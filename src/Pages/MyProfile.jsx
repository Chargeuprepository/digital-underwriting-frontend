import styled from 'styled-components';
import SideImage from '../Features/MyProfile/SideImage';
import MyProfileDetails from '../Features/MyProfile/MyProfileDetails';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useMoveBack } from '../Hooks/useMoveBack';

const StyledMyProfile = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, #daffd6, #fbfff8);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const MyProfileBorder = styled.div`
  /* background-color: #f290e5; */
  width: 80%;
  height: 55rem;
  border: 4px solid var(--color-gray-100);
  border-radius: 0.9rem;
  display: flex;
`;
const Icon = styled.button`
  position: absolute;
  top: 2rem;
  left: 4rem;
  border: none;
  background-color: transparent;
  svg {
    height: 3rem;
    width: 3rem;
    color: var(--color-gray-600);
  }
`;

export default function MyProfile() {
  const back = useMoveBack();
  return (
    <StyledMyProfile>
      <Icon onClick={back}>
        <IoMdArrowRoundBack />
      </Icon>
      <MyProfileBorder>
        <MyProfileDetails />
        <SideImage />
      </MyProfileBorder>
    </StyledMyProfile>
  );
}
