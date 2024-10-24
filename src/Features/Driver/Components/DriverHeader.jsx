import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledDriverHeader = styled.div`
  grid-row: 1;
  background-color: var(--color-brand-original-blue-400);
  box-shadow: 0 10px 20px rgba(26, 26, 41, 0.245);
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 1000;
`;
const ImgContainer = styled(Link)`
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  height: 7rem;
  margin-left: 3rem;
`;
const NameId = styled.div`
  margin-right: 6rem;
`;
const Name = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-gray-50);
`;
const Id = styled.div`
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--color-gray-100);
`;

export default function DriverHeader({ name, id, joiningDate }) {
  return (
    <StyledDriverHeader>
      <ImgContainer to={'/'}>
        <Img src="/img/logo-white.png" />
      </ImgContainer>
      <NameId>
        <Name>{name}</Name>
        <Id>{joiningDate}</Id>
        <Id>{id}</Id>
      </NameId>
    </StyledDriverHeader>
  );
}
