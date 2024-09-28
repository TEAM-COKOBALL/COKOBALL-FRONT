import styled from "styled-components";
import InputBox from "./InputBox";
import PlusBtn from "../Button/PlusBtn";
import MinusBtn from "../Button/MinusBtn";
import { useEffect, useState } from "react";

const Div = styled.div`
    display: flex;
    flex-direction: column;
`;

const RowDiv = styled.div`
    display: flex;
    align-items: center;
    &.MinusInputBoxDiv{
        gap: 10px;
    }
`;

const ColDiv = styled.div`
    display: flex;
    flex-direction: column;
    &.InputBoxDiv{
        align-items: center;
        gap: 10px;
    }
`;

const P = styled.p`
    font-family: 'GamjaFlower-Regular';
    margin: 0;
    font-size: 30px;
    user-select: none;
`;

function MinusInputBox({id, onDelete, value, onChange}){
    const [content, setContent] = useState("");
    useEffect(() => {
        onChange(id, content);
    }, [content]);
    return (
        <RowDiv className="MinusInputBoxDiv">
            <InputBox placeholder={"내용을 입력해주세요."} value={value} onChange={setContent} />
            <div onClick={() => onDelete(id)} style={{display:"flex"}}><MinusBtn/></div>
        </RowDiv>
    );
}

function WhoAmIInputBox({text, setAnswers, id}){
    const [components, setComponents] = useState([{id: Date.now(), content: ""}]);

    // 플러스 버튼을 눌렀을 때 컴포넌트를 추가하는 함수
    const handleAddComponent = () => {
      setComponents((prevComponents) => [
        ...prevComponents,
          { 
            id: Date.now(),
            content: "",
          }, // 고유한 ID를 부여 (Date.now() 사용)
      ]);
    };

    // 특정 컴포넌트를 삭제하는 함수
    const handleDeleteComponent = (id) => {
        if(components.length > 1){
            setComponents((prevComponents) =>
                prevComponents.filter((component) => component.id !== id)
            );
        }
    };

    // content를 업데이트하는 함수
    const updateContent = (id, newContent) => {
        setComponents((prevComponents) =>
            prevComponents.map((component) =>
                component.id === id
                    ? { ...component, content: newContent } // id가 일치하면 content 업데이트
                    : component // 그렇지 않으면 기존 값 유지
            )
        );
    };

    useEffect(() => {
        setAnswers((cur) => ({...cur, [id]:components}));
    }, [components]);

    return(
        <Div>
            <P>⚑ {text}</P>
            <RowDiv>
                <ColDiv className="InputBoxDiv">
                    {components.map((component) => {
                        return <MinusInputBox
                            key={component.id}
                            id={component.id}
                            onDelete={handleDeleteComponent}
                            value={component.content}
                            onChange={updateContent}
                        />
                    })}
                    <div onClick={handleAddComponent} style={{marginRight:"50px", display:"flex"}}><PlusBtn/></div>
                </ColDiv>
            </RowDiv>
        </Div>
    )
}

export default WhoAmIInputBox;