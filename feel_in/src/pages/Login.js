import styled from "styled-components";
import { useState } from "react";
import PressBtn from "../components/Button/PressBtn";
import InputBox from "../components/InputBox/InputBox";

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
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");

    const onClickBtn = () =>{
        console.log("로그인 API 호출");
    }

    return(
        <Div>
            <Title>Who Are You?</Title>
            <InputBoxDiv>
                <InputBox placeholder={"닉네임을 입력해주세요."} onChange={setNickname} value={nickname} />
                <InputBox type={"password"} placeholder={"비밀번호를 입력해주세요."} onChange={setPassword} value={password} />
            </InputBoxDiv>
            <PressBtn text={"로그인"} onClick={onClickBtn} />
        </Div>
    )
}

export default Login;