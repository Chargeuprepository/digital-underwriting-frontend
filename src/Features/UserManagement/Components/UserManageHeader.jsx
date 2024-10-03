import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledUserManageHeader = styled.div`
  background: linear-gradient(
    to right,
    var(--color-brand-blue-300),
    var(--color-brand-blue-600)
  );
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6rem 0 6rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 8rem;
  z-index: 10;
`;
const Logo = styled(NavLink)`
  height: 6rem;
`;
const Img = styled.img`
  height: 100%;
`;
const NameRole = styled.div`
  text-transform: capitalize;
`;
const Name = styled.span`
  color: var(--color-gray-25);
  font-size: 1.6rem;
`;
const Role = styled.span`
  color: #bac756;
  font-size: 1.3rem;
`;

export default function UserManageHeader() {
  return (
    <StyledUserManageHeader>
      <Logo to={'/'}>
        <Img src="img/logo-white.png" />
      </Logo>
      <NameRole>
        <Name>ritesh kumar</Name>
        <Role>(manager)</Role>
      </NameRole>
    </StyledUserManageHeader>
  );
}
