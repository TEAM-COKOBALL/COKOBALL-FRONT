import styled from "styled-components";
import WhoAmIInputBox from '../components/InputBox/WhoAmIInputBox';
import PressBtn from '../components/Button/PressBtn';
import { useEffect, useState } from "react";
import { solutionPost } from "../api/Post";
import { useNavigate } from "react-router-dom";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'GamjaFlower-Regular';
    font-size: 75px;
    gap:35px;
`;

const Form = styled.div`
    width: 865px;
    height: 570px;
    background-color: rgba(255, 255, 255, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    gap: 5px;
    padding:10px;
`;

const Title = styled.p`
    margin: 20px 0 10px 0;
`;

function WhoAmI(){
    const [answers, setAnswers] = useState({});
    const [isError, setIsError] = useState(true);
    const navigate = useNavigate();

    const onClickBtn = () => {
        try{
            Object.values(answers).forEach((value, key) => {
                const data = solutionPost(key+1, value.content);
                if(data.status === "error"){
                    setIsError(false);
                }
            });
            if(isError){
                navigate('/login');
            }
        } catch(error){
            console.log(error);
        }

    }

    return(
        <Div>
            <Title>Who Am I</Title>
            <Form>
                <WhoAmIInputBox text="기쁠 때 어떤 행동을 하시나요?" setAnswers={setAnswers} id={1} />
                <WhoAmIInputBox text="슬플 때 어떤 행동을 하시나요?" setAnswers={setAnswers} id={2}/>
                <WhoAmIInputBox text="화가날 때 어떤 행동을 하시나요?" setAnswers={setAnswers} id={3}/>
                <WhoAmIInputBox text="무기력할 때 어떤 행동을 하시나요?" setAnswers={setAnswers} id={4}/>
                <WhoAmIInputBox text="두려울 때 어떤 행동을 하시나요?" setAnswers={setAnswers} id={5}/>
            </Form>
            <PressBtn text={"다음"} onClick={onClickBtn}/>
        </Div>
    );
}

export default WhoAmI;