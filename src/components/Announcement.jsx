import styled from "styled-components"

const Container = styled.div`
height:30px;
background-color:Black;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:5000;


`;

const Anouncement = () => {
  return (
    <Container>
    Super Deal! Free Shipping on orders Over $20
    </Container>
  )
}

export default Anouncement
