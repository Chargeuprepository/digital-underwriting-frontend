import styled from 'styled-components';

const StyledAllDrivers = styled.div`
  height: 5rem;
  width: 8rem;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-gray-600);
  border: 1px solid var(--color-gray-100);
  margin-right: 2rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border: 1px solid var(--color-gray-400);
    background-color: var(--color-gray-10);
  }

  &:active {
    transform: scale(0.97);
  }
`;

export default function AllDrivers() {
  return <StyledAllDrivers>Drivers</StyledAllDrivers>;
}
