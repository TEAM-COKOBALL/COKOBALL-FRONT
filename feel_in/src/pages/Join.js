import styled from "styled-components";
import InputBox from "../components/InputBox/InputBox";
import PressBtn from "../components/Button/PressBtn";
import { useState } from "react";
import { joinPost } from "../api/Auth";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSetRecoilState } from "recoil";
import userState from "../recoil/userState";
import { useNavigate } from "react-router-dom";

const Div = styled.div`
    font-family: 'GamjaFlower-Regular';
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InputBoxDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    margin-bottom: 50px;
`;

const InputDiv = styled.div`
    position: relative;
    align-items: center;
`;

const Title = styled.p`
    font-size: 100px;
    user-select: none;
    margin: 40px;
`;

const ErrorSpan = styled.span`
    position: absolute;
    font-size: 20px;
    color: red;
    left: 5%;
    top: 130%;
    transform: translate(0, -50%);
`;

function LabelInput({ onChange, ErrorMsg, type = "text", placeholder, value }) {
    return (
        <InputDiv>
            <InputBox type={type} placeholder={placeholder} onChange={onChange} value={value} />
            <ErrorSpan>{ErrorMsg}</ErrorSpan>
        </InputDiv>
    );
}

function Join() {
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const [validNickname, setValidNickname] = useState(" ");
    const [validPasswrodMsg, setValidPasswordMsg] = useState(" ");
    const [validPasswrod2Msg, setValidPassword2Msg] = useState(" ");

    const [isNickname, setIsNickname] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [isPassword2, setIsPassword2] = useState(false);

    const setUserState = useSetRecoilState(userState);
    const navigate = useNavigate();

    const onChangeNickname = ((value) => {
        setNickname(value);

        if (value.length === 0) {
            setValidNickname('필수 입력항목입니다.');
            setIsNickname(false);
        }
        else if (value.length > 13) {
            setValidNickname('닉네임은 12글자 이하로 입력해주세요!');
            setIsNickname(false);
        }
        else {
            setIsNickname(true)
            setValidNickname('');
        }
    });

    const onChangePassword = ((value) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,32}$/;
        setPassword(value);

        if (value.length === 0) {
            setValidPasswordMsg('필수 입력항목입니다.')
            setIsPassword(false)
        }
        else if (!passwordRegex.test(value)) {
            setValidPasswordMsg('숫자+영문자+특수문자 조합, 8자리 이상 32자 이하로 입력해주세요!')
            setIsPassword(false)
        }
        else {
            setValidPasswordMsg('')
            setIsPassword(true)
        }

    });

    const onChangePassword2 = ((value) => {
        setPassword2(value);
        if (password !== value) {
            setValidPassword2Msg('비밀번호가 일치하지 않습니다.');
            setIsPassword2(false);
        }
        else {
            setValidPassword2Msg('');
            setIsPassword2(true);
        }
    });

    const onClickBtn = () => {
        if(isNickname && isPassword && isPassword2){
            const data = joinPost(nickname, password, password2);
            if(data.status === "success"){
                toast.success('회원가입에 성공하였습니다.');
                setUserState(
                    {
                        userName: nickname,
                        token: data.token,
                    }
                );
                navigate('/whoami');
            }else{
                toast.error("회원가입에 실패하였습니다.")
            }
        }
        else{
            toast.error("입력 조건을 다시 확인해주세요.");
        }
    }

    return (
        <Div>
            <Title>Who Are You?</Title>
            <InputBoxDiv>
                <LabelInput onChange={onChangeNickname} value={nickname} placeholder={"닉네임을 입력해주세요."} ErrorMsg={validNickname} />
                <LabelInput onChange={onChangePassword} value={password} placeholder={"비밀번호를 입력해주세요."} type="password" ErrorMsg={validPasswrodMsg} />
                <LabelInput onChange={onChangePassword2} value={password2} placeholder={"비밀번호를 한 번 더 입력해주세요."} type="password" ErrorMsg={validPasswrod2Msg} />
            </InputBoxDiv>
            <PressBtn text={"회원가입"} onClick={onClickBtn} />
            <ToastContainer /> {/* ToastContainer를 렌더링해서 화면에 toast 표시 */}
        </Div>
    )
}

export default Join;