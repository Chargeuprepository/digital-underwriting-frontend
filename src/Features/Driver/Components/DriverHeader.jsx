import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledDriverHeader = styled.div`
  grid-row: 1;
  /* background-color: var(--color-gray-10); */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--color-gray-700);
`;
const Id = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--color-gray-500);
`;

export default function DriverHeader({ name, id }) {
  return (
    <StyledDriverHeader>
      <ImgContainer to={'/'}>
        <Img src="/img/logo-chargeup.png" />
      </ImgContainer>
      <NameId>
        <Name>{name}</Name>
        <Id>{id}</Id>
      </NameId>
    </StyledDriverHeader>
  );
}
