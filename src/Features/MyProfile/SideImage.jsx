import styled from 'styled-components';

const ImageContainer = styled.div`
  /* background-color: #8fc5f4; */
  height: 53rem;
  padding-left: 3rem;
  margin-top: 1rem;
`;
const Image = styled.img`
  height: 95%;
`;

export default function SideImage() {
  return (
    <ImageContainer>
      <Image src="/img/myProfile.png" />
    </ImageContainer>
  );
}
