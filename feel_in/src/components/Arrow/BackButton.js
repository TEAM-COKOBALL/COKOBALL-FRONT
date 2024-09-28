import { ReactComponent as Back } from '../../assets/svg/backArrow.svg';
import styled from 'styled-components';

const StyledBackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
`;

function BackButton({ onClick }) {
  return (
    <StyledBackButton onClick={onClick}>
      <Back />
    </StyledBackButton>
  );
}

export default BackButton;
