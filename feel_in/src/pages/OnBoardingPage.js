import styled from "styled-components";
import Logo from '../components/Logo'
import PressBtnLong from "../components/Button/PressBtnLong";
import { useNavigate } from "react-router-dom";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
`;

const BtnDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    gap: 48px;
`;

function OnBoardingPage(){
    const navigate = useNavigate();
    return(
        <Div>
            <Logo />
            <BtnDiv>
                <PressBtnLong text={"로그인"} onClick={() => {navigate('/login')}} />
                <PressBtnLong text={"회원가입"} onClick={() => {navigate('/join')}} />
            </BtnDiv>
        </Div>
    )    
}

export default OnBoardingPage;