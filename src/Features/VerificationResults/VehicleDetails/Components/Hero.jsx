import styled from 'styled-components';
import StyledGridTab, {
  AllVerificationComponentGridDesign,
} from '../../UI/GridTab';

const MakerFinanceContainer = styled.div`
  /* background-color: #8398ac; */
  height: 100%;
  grid-column: 1/2;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: uppercase;
`;
const Maker = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-gray-700);
`;
const Finance = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-gray-400);
`;
const NumberPlate = styled.div`
  font-size: 3.8rem;
  font-weight: 700;
  color: var(--color-gray-700);
  text-transform: uppercase;
  /* background-color: #fba3cf; */
  height: 100%;
  grid-column: 3/-1;
  border-radius: 0.6rem;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export default function Hero({ heroData }) {
  const { makerDescription, financer, number } = heroData;
  return (
    <StyledGridTab height={''} backgroundcolor={''} boxshadow={'false'}>
      <AllVerificationComponentGridDesign
        column={'40rem 1fr 30rem'}
        height={'100%'}
        padding={'1rem 3.2rem'}
      >
        <MakerFinanceContainer>
          <Maker>maker&ndash;&nbsp;{makerDescription}</Maker>
          <Finance>financer&ndash;&nbsp;{financer}</Finance>
        </MakerFinanceContainer>
        <NumberPlate>{number}</NumberPlate>
      </AllVerificationComponentGridDesign>
    </StyledGridTab>
  );
}
