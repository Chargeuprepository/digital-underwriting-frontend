import styled from 'styled-components';
import GridTab from '../../UI/GridTab';

const StyledVPAAttributes = styled.div`
  /* grid-row: 5; */
  grid-column: 1 / -1;
  background-color: #b8b7ff;
`;

export default function VPAAttributes({ digitalRef }) {
  return (
    <GridTab ref={digitalRef} gridcolumn={'1 / -1'} backgroundcolor="#b8b7ff">
      VPAAttributes
    </GridTab>
  );
}
