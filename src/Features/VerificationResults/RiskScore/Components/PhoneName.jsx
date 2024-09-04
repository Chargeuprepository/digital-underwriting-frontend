import styled from 'styled-components';
import GridTab from '../../UI/GridTab';

const StyledPhoneNameAttributes = styled.div`
  background-color: #339799;
  grid-column: 1 / -1;
`;

export default function PhoneNameAttributes() {
  return (
    <GridTab gridcolumn={'1 / -1'} backgroundcolor="#339799">
      PhoneNameAttributes
    </GridTab>
  );
}
