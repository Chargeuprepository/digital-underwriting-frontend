import styled from 'styled-components';
import GridTab from '../../UI/GridTab';

const StyledSocialAttributes = styled.div`
  grid-column: 1 / -1;
  background-color: #b8b7ff;
`;

export default function SocialAttributes({ socialRef }) {
  return (
    <GridTab ref={socialRef} gridcolumn={' 1 / -1'} backgroundcolor="#b8b7ff">
      SocialAttributes
    </GridTab>
  );
}
