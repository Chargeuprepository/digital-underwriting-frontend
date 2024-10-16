import styled from 'styled-components';

const ImageContainer = styled.div`
  /* background-color: #8fc5f4; */
  height: 50rem;
  padding-left: 3rem;
  /* padding-bottom: 2rem; */
`;
const Image = styled.img`
  height: 95%;
`;

export default function SideImage() {
  return (
    <ImageContainer>
      <Image src="/img/myProfile-2.png" />
    </ImageContainer>
  );
}
