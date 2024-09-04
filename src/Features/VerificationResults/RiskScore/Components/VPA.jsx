import styled from 'styled-components';
import GridTab from '../../UI/GridTab';

const StyledVPAAttributes = styled.div`
  /* grid-row: 5; */
  grid-column: 1 / -1;
  background-color: #e98282;
`;

export default function VPAAttributes() {
  return (
    <GridTab gridcolumn={'1 / -1'} backgroundcolor="#e98282">
      VPAAttributes
    </GridTab>
  );
}
