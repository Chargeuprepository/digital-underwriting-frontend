import styled from 'styled-components';
import GridTab from '../../UI/GridTab';

const StyledPositiveNegative = styled.div`
  grid-column: 2 / -1;
  max-width: 100%;
  background-color: #edb770;
`;

export default function PositiveNegative() {
  return (
    <GridTab gridcolumn={'2 / -1'} backgroundcolor="#edb770">
      PositiveNegative
    </GridTab>
  );
}
