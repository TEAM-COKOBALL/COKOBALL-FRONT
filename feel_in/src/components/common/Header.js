import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    width: 100%;
`

const ProfileImage = styled.img`
    
`


function Header( {profileImage, username, level, exp, pageNum} ) {
  return (
    <Container>

    </Container>
  )
}

export default Header;