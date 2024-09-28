import styled from "styled-components";
import { useState } from "react";
import PressBtn from "../components/Button/PressBtn";
import InputBox from "../components/InputBox/InputBox";
import { loginPost } from "../api/Auth";
import {useNavigate} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSetRecoilState } from "recoil";
import userState from "../recoil/userState";

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
    gap: 40px;
    margin-bottom: 50px;
`;

const Title = styled.p`
    font-size: 100px;
    user-select: none;
`;

function Login() {
    const navigate = useNavigate();
    const setUserState = useSetRecoilState(userState);

    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");

    const onClickBtn = () => {
        const data = loginPost(nickname, password);
        if (data.status === "success") {
            setUserState({
               userId: data.userid,
               userName: nickname,
               token: data.token 
            });
            navigate('/main/book');
        } else {
            toast.error('로그인에 실패했습니다. 다시 시도해주세요.');
        }
    }

    return (
        <Div>
            <Title>Who Are You?</Title>
            <InputBoxDiv>
                <InputBox placeholder={"닉네임을 입력해주세요."} onChange={setNickname} value={nickname} />
                <InputBox type={"password"} placeholder={"비밀번호를 입력해주세요."} onChange={setPassword} value={password} />
            </InputBoxDiv>
            <PressBtn text={"로그인"} onClick={onClickBtn} />
            <ToastContainer /> {/* ToastContainer를 렌더링해서 화면에 toast 표시 */}
        </Div>
    )
}

export default Login;