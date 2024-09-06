import styled from 'styled-components';
import GridTab from '../../UI/GridTab';

const StyledPhoneNameAttributes = styled.div`
  background-color: #b8b7ff;
  grid-column: 1 / -1;
`;

export default function PhoneNameAttributes() {
  return (
    <GridTab gridcolumn={'1 / -1'} backgroundcolor="#b8b7ff">
      PhoneNameAttributes
    </GridTab>
  );
}
