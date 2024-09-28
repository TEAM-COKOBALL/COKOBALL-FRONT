import {ReactComponent as RightArrow} from '../../assets/svg/rightarrow.svg';
import styled from 'styled-components';

const ArrowIcon = styled(RightArrow)`
    color: #000000;
    cursor: pointer; // 마우스를 올렸을 때 클릭할 수 있도록 커서 변경
`;

function RightArrowButton({ onClickHandler }) {
  return (
    <ArrowIcon onClick={ onClickHandler }/>
  )
}

export default RightArrowButton;