import styled from 'styled-components';
import { RiUserAddLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const StyledUserManageStats = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4rem 0 5.3rem;
  text-transform: capitalize;
  align-items: center;
  height: 14rem;
  margin-top: 10rem;
`;
const AddUser = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 4rem;
  height: 8rem;
  border-radius: 0.6rem;
  cursor: pointer;

  svg {
    height: 5rem;
    width: 5rem;
    color: var(--color-gray-500);
    transition: all 0.3s;
  }
  svg:hover {
    color: var(--color-gray-700);
  }
  svg:active {
    transform: scale(0.98);
  }
`;
const StatsContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;
const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0 4rem;
  height: 8rem;
  border-radius: 0.6rem;
  background: linear-gradient(${(props) => props.backgroundcolor});
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.04);
  }
`;

const Label = styled.div`
  font-size: 1.7rem;
  font-weight: 600;
  color: var(--color-gray-700);
`;
const Value = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-gray-700);
`;

export default function UserManageStats({ managers, employees }) {
  return (
    <StyledUserManageStats>
      <AddUser to={'/signup'}>
        <RiUserAddLine />
      </AddUser>
      <StatsContainer>
        <Stat backgroundcolor={'to bottom, #ffe299, #ffd560'}>
          <Label>total user</Label>
          <Value>15</Value>
        </Stat>
        <Stat backgroundcolor={'to bottom, #ffaa9b, #ff897f'}>
          <Label>managers</Label>
          <Value>{managers}</Value>
        </Stat>
        <Stat backgroundcolor={'to bottom, #d1ff98, #abff84'}>
          <Label>employees</Label>
          <Value>{employees}</Value>
        </Stat>
      </StatsContainer>
    </StyledUserManageStats>
  );
}
