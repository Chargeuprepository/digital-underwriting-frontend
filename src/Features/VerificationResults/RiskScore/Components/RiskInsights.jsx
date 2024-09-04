import styled from 'styled-components';
import GridTab from '../../UI/GridTab';

const StyledRiskInsights = styled.div`
  grid-column: 2 / -1;
  background-color: #cc76c9;
  max-width: 100%;
`;

export default function RiskInsights() {
  return (
    <GridTab gridcolumn={'2 / -1'} backgroundcolor="#cc76c9">
      RiskInsights
    </GridTab>
  );
}
