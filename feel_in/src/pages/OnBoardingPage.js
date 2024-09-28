import styled from "styled-components";
import Logo from '../components/Logo'
import PressBtnLong from "../components/Button/PressBtnLong";

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
    
    return(
        <Div>
            <Logo />
            <BtnDiv>
                <PressBtnLong text={"로그인"} />
                <PressBtnLong text={"회원가입"} />
            </BtnDiv>
        </Div>
    )    
}

export default OnBoardingPage;