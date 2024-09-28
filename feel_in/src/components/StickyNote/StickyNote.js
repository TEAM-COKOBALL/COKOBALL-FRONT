import styled from 'styled-components';

const StickyNoteContainer = styled.div`
    width: 247px;
    height: 56px; // 여기에서 'height'의 스펠링 오류를 수정했습니다.
    font-size: 20px;
    background-color: #FFEFA6;
    padding-left: 12px;
    padding-top: 16px;
    padding-bottom: 16px;
    margin-top: 15px;
    margin-bottom: 15px; // gap 대신 margin을 사용
    &:last-child {
        margin-bottom: 0; // 마지막 요소는 margin 제거
    }
    cursor: pointer;
`;

function StickyNote({ text, onClick }) {
  return (
    <StickyNoteContainer onClick={onClick}>{text}</StickyNoteContainer>
  );
}

export default StickyNote;
