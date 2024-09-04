import styled from 'styled-components';
import GridTab from '../../UI/GridTab';

const StyledTelecomAttributes = styled.div`
  grid-column: 1 / -1;
  background-color: #5a9933;
`;

export default function TelecomAttributes() {
  return (
    <GridTab gridcolumn={'1 / -1'} backgroundcolor="#5a9933">
      TelecomAttributes
    </GridTab>
  );
}
