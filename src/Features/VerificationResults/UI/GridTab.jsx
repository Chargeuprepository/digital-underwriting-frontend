import styled from 'styled-components';
import BarRenderContent from '../../../UI/BarRenderContent';
import scrollToSection from '../../../Hooks/useScrollIntoView';

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

export function OverviewRiskInsightsTabs({ backgroundcolor, data, refVal }) {
  return (
    <StyledDigiTelSocioFlex
      onClick={() => (refVal ? scrollToSection(refVal) : null)}
      backgroundcolor={backgroundcolor}
      direction={data.identity_risk ? 'column' : 'row'}
    >
      {BarRenderContent(data)}
    </StyledDigiTelSocioFlex>
  );
}

export const AllVerificationLayout = styled.div``;
export const AllVerificationComponentGridDesign = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.column};
  grid-template-rows: ${(props) => props.row};
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  height: ${(props) => props.height};
`;

export default StyledGridTab;
