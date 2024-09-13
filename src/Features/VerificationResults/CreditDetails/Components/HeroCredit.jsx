import styled from 'styled-components';
import ScoreChart from '../../UI/ScoreChart';
import StyledGridTab from '../../UI/GridTab';
import { camelCaseConversion } from '../../UI/fun';

const StyledHeroCredit = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  text-transform: capitalize;
  padding: 2rem 10rem 3rem 10rem;
`;
const HeroDataFlex = styled.div`
  grid-column: 3/-1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--color-gray-600);
`;
const HeroData = styled.div``;
const CreditHeadingScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
const CreditHeading = styled.div`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-gray-600);
`;

export default function HeroCredit({ heroData }) {
  return (
    <StyledGridTab boxshadow={'false'}>
      <StyledHeroCredit>
        <CreditHeadingScoreContainer>
          <CreditHeading>credit score</CreditHeading>
          <ScoreChart param={heroData.creditScore} />
        </CreditHeadingScoreContainer>
        <HeroDataFlex>
          <HeroData>
            {camelCaseConversion('outstandingBalance')}: &nbsp; &#8377;
            {heroData.outstandingBalanceAll}
          </HeroData>
          <HeroData>
            {camelCaseConversion('accountsActive')}: &nbsp;
            {heroData.accountActive}
          </HeroData>
          <HeroData>
            {camelCaseConversion('accountsDefault')}: &nbsp;
            {heroData.accountDefault}
          </HeroData>
        </HeroDataFlex>
      </StyledHeroCredit>
    </StyledGridTab>
  );
}
