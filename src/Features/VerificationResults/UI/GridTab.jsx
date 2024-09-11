import styled from 'styled-components';
import { camelCaseConversion } from './fun';

const StyledGridTab = styled.div`
  grid-row: ${(props) => props.gridrow};
  grid-column: ${(props) => props.gridcolumn};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundcolor};
  box-shadow: ${(props) =>
    props.boxshadow === 'false' ? '' : '0 10px 20px rgba(0, 0, 0, 0.2)'};
  border-radius: 0.6rem;
  padding: ${(props) => props.padding};
`;

export const StyledDigiTelSocioFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;
  height: 100%;
  background: linear-gradient(to bottom, #237a57, #237a57);
  background: linear-gradient(
    to bottom,
    ${(props) => props.backgroundcolor[0]},
    ${(props) => props.backgroundcolor[1]}
  );
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  > :first-child {
    border: 2px solid var(--color-gray-1);
  }
  border-radius: 0.6rem;
`;

export const InsightLabelValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: 1px solid var(--color-gray-100);
  padding: 1.2rem 2.2rem;
  border-radius: 0.6rem;
  flex: 0 0 auto;
`;
export const InsightLabel = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--color-gray-800);
`;
export const InsightValue = styled.div`
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.32rem;
  font-weight: 600;
  color: var(--color-gray-700);
`;

export const renderContent = (value) => {
  if (typeof value === 'object' && value !== null) {
    return Object.entries(value).map(([key, val]) => (
      <InsightLabelValueContainer key={key}>
        <InsightLabel>{camelCaseConversion(key)}</InsightLabel>
        <InsightValue>{val}</InsightValue>
      </InsightLabelValueContainer>
    ));
  }
};

export function OverviewRiskInsightsTabs({ backgroundcolor, data, refVal }) {
  return (
    <StyledDigiTelSocioFlex
      onClick={() => (refVal ? scrollToSection(refVal) : null)}
      backgroundcolor={backgroundcolor}
      direction={data.identity_risk ? 'column' : 'row'}
    >
      {renderContent(data)}
    </StyledDigiTelSocioFlex>
  );
}

export const AllVerificationLayout = styled.div``;
export const AllVerificationGridDesign = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.column};
  grid-template-rows: ${(props) => props.row};
  gap: 2rem;
  padding: 2rem;
  margin-top: 9rem;
`;
export const AllVerificationComponentGridDesign = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.column};
  grid-template-rows: ${(props) => props.row};
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  height: ${(props) => props.height};
`;

export default StyledGridTab;
