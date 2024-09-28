import styled, { createGlobalStyle } from 'styled-components';
import { useState, useRef } from 'react';
import Dropdown from '../components/DropDown';
import PlusBtn from '../components/Button/PlusBtn';
import Header from '../components/common/Header';

const GlobalStyle = createGlobalStyle`
  body{
    background-color:#A08375;
    padding: 0;
    margin: 0;
  }
  div{
    box-sizing: border-box;
  }
`;

const Diary = styled.textarea`
  box-sizing: border-box;
  padding: 15px;
  resize: none;
  height: 15em;
  border-radius: 20px;
  width: 100%;
  &::placeholder {
    color: #cdcccc;
  }
`;

const DiaryContainer = styled.div`
  width: 40%;
  margin: 0 auto;
`;

const Title = styled.p`
  color: white;
`;

const WhiteContainer = styled.div`
  box-sizing: border-box;
  padding: 20px;
  background-color: white;
  width: 100%;
  border-radius: 20px;
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 3px solid #cdcccc;
`;

const EmotionContainer = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 20px;
  height: 200%;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  gap: 15px;
`;

const ActionContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  gap: 15px;
  padding: 25px;
  width: 100%;
`;

const Container3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;

const Arrow = styled.div`
  color: #cdcccc;
`;

const ActionItem = styled.div`
  width: 100%;
  padding: 10px;
  background-color: ${(props) => (props.isSelected ? '#d3d3d3' : 'white')};
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  margin: 0;
  display: flex;
  flex-direction: column;

  &:hover {
    background-color: ${(props) => (props.isSelected ? '#d3d3d3' : '#f0f0f0')};
  }
`;

const Input = styled.input`
  padding: 10px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;

function WriteDiary() {
  const [view, setView] = useState(false);
  const [selectedEmotion, setSelectedEmotion] =
    useState('오늘 어떤 감정을 느꼈나요?');
  const [actions, setActions] = useState([]); // 감정별 행동을 관리하는 상태
  const [selectedActionId, setSelectedActionId] = useState(null); // 선택된 행동의 id를 관리
  const [diaryText, setDiaryText] = useState(''); // textarea에 입력된 내용을 관리
  const [isInputVisible, setIsInputVisible] = useState(false); // 입력 필드가 보이는지 여부
  const [newAction, setNewAction] = useState(''); // 새로운 행동의 입력값을 관리
  const nextId = useRef(2); // 새로운 요소의 id를 관리하는 ref

  // 드롭다운에서 감정을 선택했을 때
  const handleEmotionSelect = (emotionId) => {
    setSelectedEmotion(emotionId);
    setView(false);
    const initialActions = getActionsByEmotion(emotionId);
    setActions(initialActions);
  };

  // 선택한 감정에 맞는 actions 배열을 반환
  const getActionsByEmotion = (emotionId) => {
    const inputs = {
      기쁨: [{ action: '기쁠 때 하는 일', id: 1 }],
      슬픔: [{ action: '슬플 때 하는 일', id: 1 }],
      분노: [{ action: '화날 때 하는 일', id: 1 }],
      두려움: [{ action: '두려울 때 하는 일', id: 1 }],
      무기력함: [{ action: '무기력할 때 하는 일', id: 1 }],
    };
    return inputs[emotionId] || [];
  };

  // 행동을 배열에 추가하는 함수
  const handleAddAction = () => {
    const newActionObj = { action: newAction, id: nextId.current };
    setActions([...actions, newActionObj]);
    nextId.current += 1; // id 값 증가
    setNewAction(''); // 입력 필드 초기화
    setIsInputVisible(false); // 입력 필드 숨기기
  };

  const saveData = () => {
    const selectedAction = actions.find(
      (action) => action.id === selectedActionId,
    );
    const data = {
      emotion: selectedEmotion,
      diary: diaryText,
      selectedAction: selectedAction ? selectedAction.action : null,
    };
    console.log(data);
    // 여기서 data를 서버로 전송하거나 다른 저장 로직을 추가할 수 있음
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 엔터 키로 새로운 행동 추가
      handleAddAction();
    } else if (event.key === 'Escape') {
      // ESC 키로 입력 필드 숨기기
      setIsInputVisible(false);
      setNewAction('');
    }
  };

  // 항목을 클릭하면 선택되거나, 이미 선택된 항목을 다시 클릭하면 선택 해제
  const handleActionClick = (id) => {
    if (selectedActionId === id) {
      setSelectedActionId(null); // 같은 항목을 다시 클릭하면 선택 해제
    } else {
      setSelectedActionId(id); // 항목 선택
    }
  };

  return (
    <>
      <Header />
      <DiaryContainer>
        <ul onClick={() => setView(!view)}>
          <WhiteContainer>
            <div>
              {selectedEmotion !== '오늘 어떤 감정을 느꼈나요?'
                ? selectedEmotion
                : '오늘 어떤 감정을 느꼈나요?'}
            </div>
            <div>{view ? <Arrow>▲</Arrow> : <Arrow>▼</Arrow>}</div>
          </WhiteContainer>
          {view && (
            <EmotionContainer>
              <Dropdown onSelect={handleEmotionSelect} />
            </EmotionContainer>
          )}
        </ul>

        {selectedEmotion !== '오늘 어떤 감정을 느꼈나요?' && (
          <>
            <div>
              <Title>일기</Title>
              <Diary
                value={diaryText}
                onChange={(e) => setDiaryText(e.target.value)}
                placeholder="오늘 느낀 감정과 그 이후 나의 행동에 대해 기록해주세요"
              ></Diary>
            </div>
            <div>
              <Title>나의 행동</Title>
              <Container3>
                <ActionContainer>
                  {actions.map((action) => (
                    <ActionItem
                      key={action.id} // 고유한 key로 구분
                      isSelected={selectedActionId === action.id} // 선택된 항목만 스타일 적용
                      onClick={() => handleActionClick(action.id)} // 클릭하면 선택 또는 해제
                    >
                      {action.action}
                    </ActionItem>
                  ))}

                  {selectedActionId === null && !isInputVisible && (
                    <PlusBtn onClick={() => setIsInputVisible(true)} />
                  )}

                  {isInputVisible && (
                    <div>
                      <Input
                        type="text"
                        value={newAction}
                        onChange={(e) => setNewAction(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="새로운 행동을 입력하세요"
                      />
                    </div>
                  )}
                </ActionContainer>
              </Container3>
            </div>
            {selectedActionId && <button onClick={saveData}>다음 버튼</button>}
          </>
        )}
      </DiaryContainer>
    </>
  );
}

export default WriteDiary;
