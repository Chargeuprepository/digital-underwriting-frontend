import styled from 'styled-components';
import GridTab from '../../UI/GridTab';
import {
  StyledDigiTelSocioFlex,
  InsightLabelValueContainer,
  InsightLabel,
  InsightValue,
} from '../../UI/Flex-Grid';
import scrollToSection from '../../../../Hooks/useScrollIntoView';

const StyledRiskInsights = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 13rem;
  gap: 1.2rem;
  background-color: var(--color-gray-50);
`;
const DigitalTelecomIdentityOverview = styled.div`
  background-color: var(--color-gray-50);
  display: grid;
  grid-template-columns: 22rem 1fr;
  gap: 1.2rem;
`;
const DigitalTelecomOverview = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.2rem;
`;
const EachInsightOverview = styled.div`
  border-radius: 0.6rem;
  /* border: 1px solid gray; */
  overflow-y: hidden;
`;

export default function RiskInsights({ riskInsightsData, allRef }) {
  const [socialRef, digitalRef, telecomRef] = allRef;
  const renderContent = (value) => {
    if (typeof value === 'object' && value !== null) {
      return Object.entries(value).map(([key, val]) => (
        <InsightLabelValueContainer key={key}>
          <InsightLabel>{key.split('_').join(' ')}</InsightLabel>
          <InsightValue>{val}</InsightValue>
        </InsightLabelValueContainer>
      ));
    }
  };

  return (
    <GridTab gridcolumn={'2 / -1'}>
      <StyledRiskInsights>
        <DigitalTelecomIdentityOverview>
          <EachInsightOverview>
            <StyledDigiTelSocioFlex backgroundcolor={['#519bb9', '#69eae6']}>
              {renderContent(riskInsightsData.identity)}
            </StyledDigiTelSocioFlex>
          </EachInsightOverview>
          <DigitalTelecomOverview>
            <EachInsightOverview>
              <StyledDigiTelSocioFlex
                onClick={() => scrollToSection(digitalRef)}
                backgroundcolor={['#6190e8', '#6190e8']}
              >
                {renderContent(riskInsightsData.digital)}
              </StyledDigiTelSocioFlex>
            </EachInsightOverview>
            <EachInsightOverview>
              <StyledDigiTelSocioFlex
                onClick={() => scrollToSection(telecomRef)}
                backgroundcolor={['#76b852', '#8dc26f']}
              >
                {renderContent(riskInsightsData.telecom)}
              </StyledDigiTelSocioFlex>
            </EachInsightOverview>
          </DigitalTelecomOverview>
        </DigitalTelecomIdentityOverview>
        <EachInsightOverview backgroundcolor={[]}>
          <StyledDigiTelSocioFlex
            onClick={() => scrollToSection(socialRef)}
            backgroundcolor={['#ac8881', '#b99088']}
          >
            {renderContent(riskInsightsData.social)}
          </StyledDigiTelSocioFlex>
        </EachInsightOverview>
      </StyledRiskInsights>
    </GridTab>
  );
}
