import styled from 'styled-components';

const ImageContainer = styled.div`
  max-width: 700px;
  justify-self: right;
  margin-right: 40px;
`;
const Img = styled.img`
  width: 100%;
`;

export default function LoginImage() {
  return (
    <ImageContainer>
      <Img src="/img/login-img-1.png"></Img>
    </ImageContainer>
  );
}
