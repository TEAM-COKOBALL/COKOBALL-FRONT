import CircleArrow from "../Arrow/CircleArrow";
import styled from "styled-components";

const Div = styled.div`
    position: relative;
    width: 157px;
    height: 58px;
    border-radius: 40px;
    background-color: #452C00;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const IconDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 4px; /* Div 안에서 더 왼쪽으로 */
    transform: translateY(-50%); /* 수직으로만 중앙 정렬 */
    width: 50px; /* 아이콘 크기 조정 */
    height: 50px;
`;

const P = styled.p`
    font-family: 'GamjaFlower-Regular';
    font-size: 20px;
    color: white;
    margin: 0;
    margin-left: 10px;
    user-select: none;
`;

function PressBtn({text, onClick}){
    return(
        <Div onClick={onClick}>
            <IconDiv>
                <CircleArrow/>
            </IconDiv>
            <P>{text}</P>
        </Div>
    );
}

export default PressBtn;