import { useSearchParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

export const TitleHeading = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-gray-700);
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
  /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); */
  border-radius: 0.5rem;
  border: 1px solid var(--color-gray-100);
  padding: 0.8rem 1.6rem;
  background: linear-gradient(45deg, var(--color-gray-0), var(--color-gray-0));
`;

export const Heading = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;
export const Value = styled.div`
  font-size: 1.2rem;
  color: var(--color-gray-100);
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

const scaleOut = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.98);
  }
  100% {
    transform: scale(1);
  }
`;

export const RiskCreditContainer = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-gray-100);
  padding: 0.4rem 1.2rem;
  transition: transform 0.3s ease-in-out;
  color: ${(props) => props.color || 'var(--color-gray-600)'};

  &:active {
    animation: ${(props) => !props.activebutton && scaleOut} 0.1s forwards;
  }

  &:hover {
    ${(props) =>
      !props.activebutton && { border: '1px solid var(--color-gray-50)' }}
  }

  ${(props) =>
    props.activebutton && {
      // background: 'linear-gradient(45deg, #2b18a9, #511bcf)',
      background: props.backColor,
      border: '1px solid transparent',
      color: 'var(--color-gray-800)',
      // background:
      //   'linear-gradient(45deg, var(--color-brand-original-blue-400), var(--color-brand-blue-600))',
      // border: '1.2px solid var(--color-gray-50)',
    }};
`;

export default function Filter({ paramName, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramValue = searchParams.get(paramName);

  function handleClick(value) {
    searchParams.set(paramName, value);

    setSearchParams(searchParams);
  }

  return (
    <Container>
      <TitleHeading>{paramName}</TitleHeading>
      <FilterContainer>
        {options.map((option) => (
          <RiskCreditContainer
            onClick={() => handleClick(option.value)}
            key={option.value}
            disabled={option.value === paramValue}
            activebutton={option.value === paramValue}
            backColor={option.backColor}
          >
            {<Heading>{option.label}</Heading>}
          </RiskCreditContainer>
        ))}
      </FilterContainer>
    </Container>
  );
}
