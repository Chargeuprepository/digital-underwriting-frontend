import styled from 'styled-components';
import GridTab from '../../UI/GridTab';

const StyledTelecomAttributes = styled.div`
  grid-column: 1 / -1;
  background-color: #b8b7ff;
`;

export default function TelecomAttributes() {
  return (
    <GridTab gridcolumn={'1 / -1'} backgroundcolor="#b8b7ff">
      TelecomAttributes
    </GridTab>
  );
}
