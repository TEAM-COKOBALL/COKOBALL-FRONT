import styled from 'styled-components';

const Emotion = styled.li`
  background-color: white;
  color: black;
  list-style-type: none;
  text-align: left;
  cursor: pointer; /* 항목이 클릭 가능하다는 시각적 피드백 */
  padding: 10px; /* 클릭 영역 확대를 위한 패딩 추가 */
  border-radius: 5px;

  &:hover {
    background-color: #f0f0f0; /* 항목에 마우스를 올릴 때 배경색 변경 */
  }
`;

const EmotionContainer = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 20px;
  height: auto; /* 동적으로 크기 조정 */
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function Dropdown({ onSelect }) {
  const emotions = [
    { id: 'Joy', label: '기쁨' },
    { id: 'Sad', label: '슬픔' },
    { id: 'Anger', label: '분노' },
    { id: 'Scared', label: '두려움' },
    { id: 'Tired', label: '무기력함' },
  ];

  return (
    <EmotionContainer>
      {emotions.map((emotion) => (
        <Emotion key={emotion.id} onClick={() => onSelect(emotion.label)}>
          {emotion.label}
        </Emotion>
      ))}
    </EmotionContainer>
  );
}

export default Dropdown;
