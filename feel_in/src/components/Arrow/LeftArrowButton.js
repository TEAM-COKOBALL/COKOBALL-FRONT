import { ReactComponent as LeftArrow } from '../../assets/svg/leftarrow.svg'
import styled from 'styled-components';

const ArrowIcon = styled(LeftArrow)`
    color: #000000;
    cursor: pointer; // 마우스를 올렸을 때 클릭할 수 있도록 커서 변경
`;

function LeftArrowButton({ onClickHandler }) {
    return (
      <ArrowIcon onClick={ onClickHandler }/>
    )
}

export default LeftArrowButton;