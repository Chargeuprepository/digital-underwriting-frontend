import {
  HiHome,
  HiCheckBadge,
  HiMiniUsers,
  HiMiniChartBar,
} from 'react-icons/hi2';
import { FaCircleUser } from 'react-icons/fa6';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SideNav = styled.ul`
  height: 50rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const SideNavElement = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1rem;

    color: var(--color-grey-500);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1rem 0 1rem 1.2rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-gray-25);
    background-color: var(--color-brand-original-green-400);
    border-radius: 1rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-gray-500);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-gray-25);
  }
`;

export default function MainNav() {
  return (
    <nav>
      <SideNav>
        <li>
          <SideNavElement to={'/dashboard'}>
            <HiHome />
            <span>Home</span>
          </SideNavElement>
        </li>
        <li>
          <SideNavElement to={'/businessInsights'}>
            <HiMiniChartBar />
            <span>Business Insights</span>
          </SideNavElement>
        </li>
        <li>
          <SideNavElement to={'/verification'}>
            <HiCheckBadge />
            <span>Verification</span>
          </SideNavElement>
        </li>
        <li>
          <SideNavElement to={'/onboardedDrivers'}>
            <HiMiniUsers />
            <span>Onboarded Drivers</span>
          </SideNavElement>
        </li>
        {/* <li>
          <SideNavElement to={'/AI-ML-models'}>
            <GiArtificialIntelligence />
            <span>AI/ML Models</span>
          </SideNavElement>
        </li> */}
        <li>
          <SideNavElement to={'/userManagement'}>
            <FaCircleUser />
            <span>User Management</span>
          </SideNavElement>
        </li>
      </SideNav>
    </nav>
  );
}
