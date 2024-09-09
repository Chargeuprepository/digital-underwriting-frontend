import GridTab from '../UI/GridTab';
import {
  DigiTelSocioTabContainer,
  renderSocialContent,
  StyledTelDigiSocioAttributes,
  TabsHeadingDigiTelSocio,
} from '../UI/Flex-Grid';

export default function SocialAttributes({ socialRef, socialData }) {
  return (
    <GridTab ref={socialRef} gridcolumn={' 1 / -1'} backgroundcolor="#b8b7ff">
      <DigiTelSocioTabContainer backgroundcolor={['#f4a93f', '#f4a93f']}>
        <TabsHeadingDigiTelSocio>social attributes</TabsHeadingDigiTelSocio>
        <StyledTelDigiSocioAttributes social={'TRUE'}>
          {renderSocialContent(socialData)}
        </StyledTelDigiSocioAttributes>
      </DigiTelSocioTabContainer>
    </GridTab>
  );
}
