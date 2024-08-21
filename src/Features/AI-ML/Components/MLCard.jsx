import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const StyledMLCard = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.place % 2 === 0 ? '20rem 1fr' : '1fr 20rem'};
  gap: 2rem;
  padding: 2rem 4rem;
  border-radius: 1rem;
  background: linear-gradient(
    ${(props) =>
      props.place % 2 === 0
        ? 'to right, #283048, #859398'
        : 'to left, #360033, #0b8793'}
  );
  /* background: linear-gradient(
    ${(props) => (props.place % 2 === 0 ? 'to right' : 'to left')},
    #360033,
    #0b8793
  ); */
  transition: all 0.3s;
  &:hover {
    scale: 1.01;
    cursor: pointer;
  }
`;
const StyledCardIconContainer = styled.div`
  height: 20rem;
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: ${(props) =>
    props.place === 0 || props.place % 2 === 0 ? '1 / 2' : '2 / -1'};
`;
const StyledCardIcon = styled.img`
  height: 100%;
  width: 100%;
`;
const StyledCard = styled.div`
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  position: relative;
  /* background: ${(props) => (props.place % 2 === 0 ? '#2329cd' : '1/ 2')}; */
  /* background: #6b6104; */
  box-shadow: 0 10px 20px rgba(89, 0, 255, 0.5);
  grid-column: ${(props) => (props.place % 2 === 0 ? '2 / -1' : '1/ 2')};
  grid-row: 1;
  animation: ${slideIn} 0.5s ease-in-out;
`;
const Header = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-gray-1);
  text-transform: capitalize;
  padding: 1.6rem 0 0 2.2rem;
`;
const Description = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${(props) =>
    props.place % 2 === 0 ? 'var(--color-gray-100)' : 'var(--color-gray-100)'};
  padding-left: 2.2rem;
`;
const Points = styled.div`
  margin-bottom: 0.4rem;
`;

export default function MLCard({ data, place, inputs }) {
  const navigate = useNavigate();

  function handleClick(name) {
    navigate(`/ML-form/${name}`, { state: { data: inputs } });
  }

  return (
    <StyledMLCard place={place} onClick={() => handleClick(data.name)}>
      <StyledCardIconContainer place={place}>
        <StyledCardIcon src={`/img/${data.name}.png`} />
      </StyledCardIconContainer>
      <StyledCard place={place}>
        <Header>{data.modelName}</Header>
        <Description place={place}>
          {data.description
            .split('.')
            .slice(0, 3)
            .map((val, i) => (
              <Points key={i}>&ndash;&nbsp;{val}&#46;</Points>
            ))}
        </Description>
      </StyledCard>
    </StyledMLCard>
  );
}
