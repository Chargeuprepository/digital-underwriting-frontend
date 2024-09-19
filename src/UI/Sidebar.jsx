import styled from 'styled-components';
import MainNav from './MainNav';
import { NavLink } from 'react-router-dom';

const StyledNavbar = styled.aside`
  grid-row: 1 / -1;
  background-color: var(--color-gray-0);
  padding: 0.6rem 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;
const StyledNavLogo = styled(NavLink)`
  width: 20rem;
  justify-self: center;
`;
const Img = styled.img`
  width: 100%;

  &:hover {
    transform: translate(0, 2%);
    transition: all 0.3s;
  }
`;

export default function Sidebar() {
  return (
    <StyledNavbar>
      <StyledNavLogo to={'/'}>
        <Img src="/img/logo-chargeup.png" />
      </StyledNavLogo>
      <MainNav />
    </StyledNavbar>
  );
}
