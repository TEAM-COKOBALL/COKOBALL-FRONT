import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // React Router 사용 시
import profileImage from '../../assets/svg/profileImage.svg';
import BackButton from '../Arrow/BackButton';

// 컨테이너 스타일
const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #FFFAF3;
    width: 100%;
    height: 91px;
`;

// 프로필 이미지 스타일
const ProfileIcon = styled.div`
    width: 78px;
    height: 80px;
    border-radius: 50%;
    background-image: url(${profileImage});
`;

// 사용자 정보 섹션 스타일
const UserInfo = styled.div`
    display: flex;
    align-items: center;
`;

// 레벨 및 게이지 바 섹션 스타일
const LevelInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    font-size: 20px;
`;

// 레벨 게이지 바 스타일
const LevelBar = styled.div`
    width: 591px;
    height: 42px;
    background-color: #d9d9d9;
    border-radius: 20px;
    margin-left: 15px;
    position: relative;
`;

const LevelProgress = styled.div`
    height: 100%;
    background-color: #4caf50; /* 게이지 채움 색상 */
    width: ${({ exp }) => `${exp}%`}; /* 경험치에 따라 채워지는 비율 */
    border-radius: 20px;
`;

const PageCount = styled.div`
    font-size: 20px;
`;

function Header({ username, pageNum }) {
  // 레벨은 pageNum을 10으로 나눈 정수 부분, 게이지 바는 나머지 10분율로 계산
  const level = Math.floor(pageNum / 10);
  const expPercentage = (pageNum % 10) * 10; // 0 ~ 9 값을 10 ~ 90%로 변환
  const navigate = useNavigate(); // React Router의 useNavigate 훅

  // 뒤로가기 함수
  const goBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <Container>
      <BackButton onClick={goBack} />
      <UserInfo>
        <ProfileIcon />
        <LevelInfo>{username}님 Lv.{level}</LevelInfo>
        <LevelBar>
          <LevelProgress exp={expPercentage} /> {/* exp 값에 따라 게이지 바 채워짐 */}
        </LevelBar>
      </UserInfo>
      <PageCount>총 page 수: {pageNum}장</PageCount>
    </Container>
  );
}

export default Header;
