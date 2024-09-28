import React, { useState } from 'react';
import styled from 'styled-components';
import LeftArrowButton from '../components/Arrow/LeftArrowButton';
import RightArrowButton from '../components/Arrow/RightArrowButton';
import Header from '../components/common/Header';
import book from '../assets/svg/book.svg';
import libraryBackground from '../assets/svg/library.svg';
import StickyNote from '../components/StickyNote/StickyNote';
import Modal from '../components/StickyNote/Modal';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const BodyContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${libraryBackground});
    background-size: cover;
    background-position: center;
`;

const WrapperArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;

const BookContainer = styled.div`
    display: flex;
    justify-content: center;
    background-image: url(${book});
    background-size: cover;
    background-position: center;
    width: 993px;
    height: 713px;
`;

const LeftBookContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    padding-top: 20px;
`;

const RightBookContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    padding-top: 20px;
`;

const Title = styled.p`
    font-size: 30px;
`;

const StickyNoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10%;
    max-height: 500px;
    overflow-y: auto;
    padding-right: 10px;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(217, 217, 217, 0.5);
    z-index: 999; /* 모달보다 아래 */
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; /* 모달 열릴 때만 보이도록 */
`;

function BookDetailPage() {
  const dummydata = [
    {
      title: "1. 먹을걸 먹는다",
      diaryList: [
        { createDate: "2020-05-01T00:00:00.000Z", content: "이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다.  영국에서 HGXWCH이라는 사람은 1930년에 이 편지를 받았습니다. 그는 비서에게 복사해서 보내라고 했습니다. 며칠 뒤에 복권이 당첨되어 20억을 받았습니다. 어떤 이는 이 편지를 받았으나 96시간 이내 자신의 손에서 떠나야 한다는 사실을 잊었습니다. 그는 곧 사직되었습니다. 나중에야 이 사실을 알고 7통의 편지를 보냈는데 다시 좋은 직장을 얻었습니다. 미국의 케네디 대통령은 이 편지를 받았지만 그냥 버렸습니다. 결국 9일 후 그는 암살당했습니다. 기억해 주세요. 이 편지를 보내면 7년의 행운이 있을 것이고 그렇지 않으면 3년의 불행이 있을 것입니다. 그리고 이 편지를 버리거나 낙서를 해서는 절대로 안됩니다. 7통입니다. 이 편지를 받은 사람은 행운이 깃들 것입니다. 힘들겠지만 좋은 게 좋다고 생각하세요. 7년의 행운을 빌면서..., 이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다.  영국에서 HGXWCH이라는 사람은 1930년에 이 편지를 받았습니다. 그는 비서에게 복사해서 보내라고 했습니다. 며칠 뒤에 복권이 당첨되어 20억을 받았습니다. 어떤 이는 이 편지를 받았으나 96시간 이내 자신의 손에서 떠나야 한다는 사실을 잊었습니다. 그는 곧 사직되었습니다. 나중에야 이 사실을 알고 7통의 편지를 보냈는데 다시 좋은 직장을 얻었습니다. 미국의 케네디 대통령은 이 편지를 받았지만 그냥 버렸습니다. 결국 9일 후 그는 암살당했습니다. 기억해 주세요. 이 편지를 보내면 7년의 행운이 있을 것이고 그렇지 않으면 3년의 불행이 있을 것입니다. 그리고 이 편지를 버리거나 낙서를 해서는 절대로 안됩니다. 7통입니다. 이 편지를 받은 사람은 행운이 깃들 것입니다. 힘들겠지만 좋은 게 좋다고 생각하세요. 7년의 행운을 빌면서..., 이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다.  영국에서 HGXWCH이라는 사람은 1930년에 이 편지를 받았습니다. 그는 비서에게 복사해서 보내라고 했습니다. 며칠 뒤에 복권이 당첨되어 20억을 받았습니다. 어떤 이는 이 편지를 받았으나 96시간 이내 자신의 손에서 떠나야 한다는 사실을 잊었습니다. 그는 곧 사직되었습니다. 나중에야 이 사실을 알고 7통의 편지를 보냈는데 다시 좋은 직장을 얻었습니다. 미국의 케네디 대통령은 이 편지를 받았지만 그냥 버렸습니다. 결국 9일 후 그는 암살당했습니다. 기억해 주세요. 이 편지를 보내면 7년의 행운이 있을 것이고 그렇지 않으면 3년의 불행이 있을 것입니다. 그리고 이 편지를 버리거나 낙서를 해서는 절대로 안됩니다. 7통입니다. 이 편지를 받은 사람은 행운이 깃들 것입니다. 힘들겠지만 좋은 게 좋다고 생각하세요. 7년의 행운을 빌면서..., 이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다.  영국에서 HGXWCH이라는 사람은 1930년에 이 편지를 받았습니다. 그는 비서에게 복사해서 보내라고 했습니다. 며칠 뒤에 복권이 당첨되어 20억을 받았습니다. 어떤 이는 이 편지를 받았으나 96시간 이내 자신의 손에서 떠나야 한다는 사실을 잊었습니다. 그는 곧 사직되었습니다. 나중에야 이 사실을 알고 7통의 편지를 보냈는데 다시 좋은 직장을 얻었습니다. 미국의 케네디 대통령은 이 편지를 받았지만 그냥 버렸습니다. 결국 9일 후 그는 암살당했습니다. 기억해 주세요. 이 편지를 보내면 7년의 행운이 있을 것이고 그렇지 않으면 3년의 불행이 있을 것입니다. 그리고 이 편지를 버리거나 낙서를 해서는 절대로 안됩니다. 7통입니다. 이 편지를 받은 사람은 행운이 깃들 것입니다. 힘들겠지만 좋은 게 좋다고 생각하세요. 7년의 행운을 빌면서..." },
        { createDate: "2020-05-01T00:00:00.000Z", content: "일기 내용 2" }
      ]
    },
    {
      title: "2. 놀러 가기",
      diaryList: [
        { createDate: "2020-05-01T00:00:00.000Z", content: "일기 내용 3" },
        { createDate: "2020-05-01T00:00:00.000Z", content: "일기 내용 4" }
      ]
    },
    {
      title: "3. 여행을 간다",
      diaryList: [
        { createDate: "2020-05-01T00:00:00.000Z", content: "일기 내용 5" },
        { createDate: "2020-05-01T00:00:00.000Z", content: "일기 내용 6" }
      ]
    },
    {
      title: "4. 친구 만나기",
      diaryList: [
        { createDate: "2020-05-01T00:00:00.000Z", content: "일기 내용 7" },
        { createDate: "2020-05-01T00:00:00.000Z", content: "일기 내용 8" }
      ]
    },
    {
      title: "5. 친구 만나기",
      diaryList: [
        { createDate: "2020-05-01T00:00:00.000Z", content: "일기 내용 7" },
        { createDate: "2020-05-01T00:00:00.000Z", content: "일기 내용 8" }
      ]
    }
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalDate, setModalDate] = useState(null);
  const [modalContent, setModalContent] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const leftClickHandler = () => {
    if (currentIndex > 0) {
      if (currentIndex % 2 === 0) {
        setCurrentIndex(currentIndex - 2);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  const rightClickHandler = () => {
    if (currentIndex + 2 < dummydata.length) {
      setCurrentIndex(currentIndex + 2);
    }
  };

  const openModal = (date, content) => {
    setModalDate(date);
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalDate(null);
    setModalOpen(false);
    setModalContent('');
  };

  return (
    <Container>
      <Header username={'류건'} pageNum={13} />
      <BodyContainer>
        <WrapperArea>
          <LeftArrowButton onClickHandler={leftClickHandler} />
          <BookContainer>
            <LeftBookContainer>
              <Title>{dummydata[currentIndex].title}</Title>
              <StickyNoteContainer>
                {dummydata[currentIndex].diaryList.map((note, idx) => (
                  <StickyNote
                    key={idx}
                    text={note.createDate}
                    onClick={() => openModal(note.createDate, note.content)} // 날짜와 내용을 전달
                  />
                ))}
              </StickyNoteContainer>
            </LeftBookContainer>
            <RightBookContainer>
              {currentIndex + 1 < dummydata.length && (
                <>
                  <Title>{dummydata[currentIndex + 1].title}</Title>
                  <StickyNoteContainer>
                    {dummydata[currentIndex + 1].diaryList.map((note, idx) => (
                      <StickyNote
                        key={idx}
                        text={note.createDate}
                        onClick={() => openModal(note.createDate, note.content)} // 날짜와 내용을 전달
                      />
                    ))}
                  </StickyNoteContainer>
                </>
              )}
            </RightBookContainer>
          </BookContainer>
          <RightArrowButton onClickHandler={rightClickHandler} />
        </WrapperArea>
        <Overlay isOpen={modalOpen} /> {/* 어두운 오버레이 */}
        <Modal isOpen={modalOpen} onClose={closeModal} date={modalDate} content={modalContent} />
      </BodyContainer>
    </Container>
  );
}

export default BookDetailPage;
