// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import { useRecoilValue } from 'recoil';
// import userState from '../recoil/userState';
//
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   max-height: 100vh;
// `;
//
// const WrapperArea = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   margin-top: 60px;
//   max-width: 700px;
//   width: 100%;
//   background-color: var(--background-color);
//   box-sizing: border-box;
//   border-radius: 30px 30px 0px 0px;
//   border: 0.5px #d9d9d9 solid;
//   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
//   overflow-y: scroll;
// `;
//
// const ContentArea = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100%;
// `;
//
// export default function MainPage() {
//   const navigate = useNavigate();
//   const [showModal, setShowModal] = useState(false);
//   const [posts, setPosts] = useState([]);
//   const user = useRecoilValue(userState);
//
//   useEffect(() => {
//     const fetchPosts = async () => {
//       if (user && user.userId) {
//         try {
//           const [qaResponse, oxResponse] = await Promise.all([
//             getAllQAPosts(user.userId),
//             getAllOXPosts(user.userId),
//           ]);
//           console.log(qaResponse, oxResponse);
//
//           // QA와 OX 포스트 통합
//           const combinedPosts = [
//             ...qaResponse.result.map((post) => {
//               return { ...post, postType: 'QA' };
//             }),
//             ...oxResponse.result.map((post) => {
//               return { ...post, postType: 'OX' };
//             }),
//           ];
//
//           // 최신 날짜 순으로 정렬
//           const sortedPosts = combinedPosts.sort((a, b) => {
//             return new Date(b.created_at) - new Date(a.created_at);
//           });
//
//           setPosts(sortedPosts);
//         } catch (error) {
//           console.error('Error fetching posts:', error);
//         }
//       }
//     };
//
//     fetchPosts();
//   }, [user]);
//
//   const onClickProfileImage = () => {
//     navigate('/profile');
//   };
//
//   const onClickInput = () => {
//     setShowModal(true);
//   };
//
//   return (
//     <Container>
//       <Header />
//       <WrapperArea>
//         <ContentArea>
//           <WirteInput
//             onClickProfileImage={onClickProfileImage}
//             onClickInput={onClickInput}
//           />
//           {/* 포스트 렌더링 */}
//           {posts.map((post) => {
//             if (post.postType === 'OX') {
//               return <OxQuizPost post={post} />;
//             }
//             return <TextQuizPost post={post} />;
//           })}
//         </ContentArea>
//       </WrapperArea>
//       <WritePostButton onClick={onClickInput} />
//       {showModal && (
//         <>
//           <Backdrop
//             onClick={() => {
//               setShowModal(false);
//             }}
//           />
//           <WriteModal text="게시글 작성 모달임" />
//         </>
//       )}
//     </Container>
//   );
// }