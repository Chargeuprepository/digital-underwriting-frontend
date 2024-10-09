import styled from 'styled-components';
import GridMaker from '../../../UI/GridMaker';
import EditUser from './EditUser';
import DeleteUser from './DeleteUser';
import { useMemo } from 'react';

const headValue = ['id', 'name', 'email', 'phone', 'role', '', ''];

const StyledUserManageBody = styled.div`
  margin: 2rem 4rem 0 4rem;
  border-radius: 0.8rem;
  overflow: hidden;
`;
const GridHeadValue = styled.div`
  text-transform: capitalize;
  background-color: aliceblue;
  text-align: center;
  padding: 0.7rem 0;
  background: linear-gradient(
    to top,
    var(--color-brand-green-300),
    var(--color-brand-green-500)
  );
  color: var(--color-gray-1);
`;
const GridBody = styled.div`
  height: 38.3rem;
  overflow: scroll;
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */

  &::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Opera */
  }
`;
const GridBodyValue = styled.div`
  text-align: center;
  padding: 0.71rem 0;
  text-transform: capitalize;
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--color-gray-600);
`;
export const EditDeleteButton = styled.button`
  text-transform: capitalize;
  border: none;
  height: 2.6rem;
  width: 8rem;
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--color-gray-0);
  border-radius: 0.6rem;
  background-color: ${(props) => props.backgroundcolor};
  transition: all 0.3s;
  &:hover {
  }
  &:active {
    transform: scale(0.96);
  }
`;

export default function UserManageBody({ users }) {
  return (
    <StyledUserManageBody>
      <GridMaker column={'0.4fr 0.8fr 1fr 0.6fr 0.5fr repeat(2, 0.3fr)'}>
        {headValue.map((val, i) => {
          return <GridHeadValue key={i}>{val}</GridHeadValue>;
        })}
      </GridMaker>
      <GridBody>
        {users.map((user, i) => {
          return (
            <GridMaker
              key={i}
              column={'0.4fr 0.8fr 1fr 0.6fr 0.5fr repeat(2, 0.3fr)'}
              style={{
                backgroundColor: `${
                  i % 2 === 0 ? 'var(--color-gray-1)' : '#dfffd5'
                }`,
                justifyItems: 'center',
                alignItems: 'center',
              }}
            >
              <GridBodyValue>{user.id}</GridBodyValue>
              <GridBodyValue>{user.name}</GridBodyValue>
              <GridBodyValue style={{ textTransform: 'lowercase' }}>
                {user.email}
              </GridBodyValue>
              <GridBodyValue>{user.phone}</GridBodyValue>
              <GridBodyValue
                style={{
                  color: `${
                    user.role === 'manager'
                      ? 'var(--color-gray-700)'
                      : 'var(--color-gray-500)'
                  }`,
                  fontWeight: `${user.role === 'manager' && 500}`,
                }}
              >
                {user.role}
              </GridBodyValue>
              <EditUser defaultValues={useMemo(() => user, [])} />
              <DeleteUser name={user.name} />
            </GridMaker>
          );
        })}
      </GridBody>
    </StyledUserManageBody>
  );
}
