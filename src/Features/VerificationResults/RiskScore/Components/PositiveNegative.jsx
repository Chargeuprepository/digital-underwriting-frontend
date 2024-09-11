import styled from 'styled-components';
import GridTab from '../../UI/GridTab';
import { RiArrowDropRightFill } from 'react-icons/ri';
import { camelCaseConversion } from '../../UI/fun';

const StyledPositiveNegative = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  gap: 3rem;
  padding: 2.5rem 3rem 2rem 3rem;
  border: 1px solid var(--color-gray-100);
  border-radius: 0.6rem;
  background: linear-gradient(to bottom, #41295a, #2f0743);
`;
const PosNegColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  height: 100%;
  overflow-y: hidden;
`;
const PosNeg = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const PosNegHeading = styled.div`
  text-transform: capitalize;
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-gray-50);
  color: ${(props) => (props.color === 'red' ? '#e70101' : '#07c300')};
  padding-left: 1rem;
`;
const PosNegValue = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-gray-50);
`;
const ValueIconContainer = styled.div`
  display: flex;

  svg {
    margin-top: 0.1rem;
    height: 1.8rem;
    width: 1.8rem;
    color: var(--color-gray-100);
  }
`;

export default function PositiveNegative({ positiveNegative }) {
  const { positiveInsights, negativeInsights } = positiveNegative;

  return (
    <GridTab gridcolumn={'2 / -1'} backgroundcolor="#ffffff">
      <StyledPositiveNegative>
        <PosNegColumn>
          <PosNegHeading color="red">
            {camelCaseConversion('positiveInsights')}
          </PosNegHeading>
          <PosNeg>
            {negativeInsights.map((val, i) => {
              return (
                <ValueIconContainer key={i}>
                  <div>
                    <RiArrowDropRightFill />
                  </div>
                  <PosNegValue key={i}>{val}</PosNegValue>
                </ValueIconContainer>
              );
            })}
          </PosNeg>
        </PosNegColumn>
        <PosNegColumn>
          <PosNegHeading color="green">
            {camelCaseConversion('negativeInsights')}
          </PosNegHeading>
          <PosNeg>
            {positiveInsights.map((val, i) => {
              return (
                <ValueIconContainer key={i}>
                  <div>
                    <RiArrowDropRightFill />
                  </div>
                  <PosNegValue>{val}</PosNegValue>
                </ValueIconContainer>
              );
            })}
          </PosNeg>
        </PosNegColumn>
      </StyledPositiveNegative>
    </GridTab>
  );
}
