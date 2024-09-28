import React, { useEffect } from 'react';
import styled from 'styled-components';
import xButton from '../../assets/svg/xbutton.svg';

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: #FFEF93; /* 배경색 변경 */
    padding: 20px;
    border-radius: 5px;
    width: 582px; /* 너비 설정 */
    height: 784px; /* 높이 설정 */
    display: flex; /* 플렉스 박스 사용 */
    flex-direction: column; /* 세로 방향으로 정렬 */
    justify-content: flex-start; /* 내용 상단 정렬 */
    align-items: center; /* 내용 중앙 정렬 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 추가 */
`;

const ModalDate = styled.p`
    font-size: 20px;
    margin: 20px 0; /* 마진 추가 */
`;

const ModalText = styled.p`
    font-size: 20px;
    margin: 20px 0; /* 마진 추가 */
    overflow-y: auto;
`;

const CloseButton = styled.button`
    background: transparent; /* 배경 투명 */
    border: none; /* 테두리 없음 */
    cursor: pointer; /* 커서 포인터 */
    align-self: flex-end; /* 오른쪽 정렬 */
    margin-bottom: 20px; /* 아래 마진 추가 */
`;

const CloseButtonIcon = styled.img`
    width: 24px; /* 아이콘 크기 설정 */
    height: 24px; /* 아이콘 크기 설정 */
`;

function Modal({ isOpen, onClose, date, content }) {
  // 모달이 열려 있을 때 esc 키 눌림 감지
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose(); // esc 키를 누르면 onClose 호출
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown); // 클린업
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null; // 모달이 열려있지 않으면 null 반환

  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <CloseButtonIcon src={xButton} alt="Close" /> {/* SVG 아이콘 추가 */}
        </CloseButton>
        <ModalDate>{date}</ModalDate>
        <ModalText>{content}</ModalText>
      </ModalContent>
    </ModalContainer>
  );
}

export default Modal;
