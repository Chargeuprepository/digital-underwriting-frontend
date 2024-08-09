import styled, { keyframes } from 'styled-components';
import Zone from './Components/Zone';
import Risk from './Components/Risk';
import Credit from './Components/Credit';
import { useNavigate } from 'react-router-dom';

const Row1LayoutContainer = styled.div`
  grid-row: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3.4rem;
  margin: 0rem 1.4rem;
  padding: 2rem;
`;
const scale = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.97);
  }
  100% {
    transform: scale(1);
  }
`;
const DriverContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  border: none;
  padding: 2rem 2.6rem;
  background: linear-gradient(
    45deg,
    var(--color-brand-blue-300),
    var(--color-brand-blue-500)
  );

  transition: transform 0.3s ease-in-out;

  &:active {
    animation: ${(props) => !props.activebutton && scale} 0.3s forwards;
  }
`;
const FilterAll = styled.div`
  display: flex;
  gap: 2rem;
`;

export const DriverHeading = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-gray-50);
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;
export const DriverValue = styled.div`
  font-size: 1.2rem;
  color: var(--color-gray-100);
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

export const StyledZone = styled.div`
  width: 16rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-gray-50);
  background: linear-gradient(
    45deg,
    var(--color-brand-blue-300),
    var(--color-brand-blue-500)
  );

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: #ffffff;
    background-color: var(--color-brand-green-500);
    border-radius: 50%;
  }
`;

export default function Row1Layout() {
  const navigate = useNavigate();

  const removeQueryParams = () => {
    // Get the current pathname
    const pathname = window.location.pathname;

    // Navigate to the current pathname, effectively removing query parameters
    navigate(pathname, { replace: true });
  };
  return (
    <Row1LayoutContainer>
      <DriverContainer onClick={removeQueryParams}>
        <DriverHeading style={{ fontSize: '1.5rem', fontWeight: '500' }}>
          Drivers:
        </DriverHeading>
        <DriverValue style={{ fontSize: '1.4rem' }}>936</DriverValue>
      </DriverContainer>

      <FilterAll>
        <Risk />
        <Credit />
        <Zone />
      </FilterAll>
    </Row1LayoutContainer>
  );
}
