import styled from 'styled-components';
import GridTab from '../../UI/GridTab';

const StyledSocialAttributes = styled.div`
  grid-column: 1 / -1;
  background-color: #f6ff4d;
`;

export default function SocialAttributes() {
  return (
    <GridTab gridcolumn={' 1 / -1'} backgroundcolor="#f6ff4d">
      SocialAttributes
    </GridTab>
  );
}
