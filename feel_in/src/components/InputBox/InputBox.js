import styled from "styled-components";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
`;

const InputBG = styled.div`
    display: flex;
    width: 534px;
    background-color: #FF7F44;
    justify-content: flex-end;
    border-radius: 20px;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.25);
`;

const Input = styled.input`
    width: 500px;
    height: 50px;
    border-radius: 20px;
    border: none;
    padding-left: 20px;
    &:focus{
        outline: none;
    }
    font-family: 'GamjaFlower-Regular';
    font-size: 20px;
`;

function InputBox({placeholder, onChange, value, type="text"}){
    return(
        <Div>
            <InputBG>
                <Input placeholder={placeholder} value={value} onChange={(value) => onChange(value.target.value)} type={type}/>
            </InputBG>
        </Div>
    )
}

export default InputBox;