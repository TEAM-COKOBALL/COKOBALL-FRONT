import CircleArrow from "../Arrow/CircleArrow";
import styled from "styled-components";
import { motion } from 'framer-motion';

const Div = styled.div`
    position: relative;
    width: 311px;
    height: 58px;
    border-radius: 40px;
    background-color: #452C00;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
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
    font-size: 25px;
    color: white;
    margin: 0;
    margin-left: 10px;
    user-select: none;
`;

function PressBtnLong({text, onClick}){
    return (
        <motion.div
            initial={{scale: 1}}
            whileHover={{scale: 1.1}}
            onClick={onClick}
        >
            <Div onClick={onClick}>
                <IconDiv>
                    <CircleArrow />
                </IconDiv>
                <P>{text}</P>
            </Div>
        </motion.div>
    );
}

export default PressBtnLong;