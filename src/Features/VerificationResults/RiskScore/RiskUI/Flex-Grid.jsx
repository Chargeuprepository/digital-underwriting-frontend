import styled from 'styled-components';
import { InsightValue } from '../../UI/GridTab';

export const StyledTelDigiSocioAttributes = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.social === 'TRUE' ? '1fr' : 'repeat(4, 1fr)'};
  gap: ${(props) => (props.social === 'TRUE' ? '4rem' : '2rem')};
  padding: 3rem 3rem;
`;
export const TabsHeadingDigiTelSocio = styled.div`
  text-transform: uppercase;
  font-size: 1.7rem;
  font-weight: 700;
  color: var(--color-gray-800);
  padding: 2.5rem 0 0 2rem;
`;
export const DigiTelSocioTabContainer = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 0.6rem;
  background: linear-gradient(
    to bottom,
    ${(props) => props.backgroundcolor[0]},
    ${(props) => props.backgroundcolor[1]}
  );
`;
const SocialHeadingCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const SocialCategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;
const SocialCategoryHeading = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-gray-700);
`;
const SocialIcon = styled.img`
  height: 4rem;
  width: 4rem;
`;
const SocialIconHeading = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  border: 1px solid var(--color-gray-100);
  padding: 1rem 3rem 1rem 10rem;
  border-radius: 0.6rem;
  flex: 0 0 auto;
`;

export const renderSocialContent = (value) => {
  if (typeof value === 'object' && value !== null) {
    return Object.entries(value).map(([key, val]) => (
      <SocialHeadingCategoryContainer key={key}>
        <SocialCategoryHeading>{key}</SocialCategoryHeading>
        <SocialCategoryContainer>
          {val.map((soc) => {
            return (
              <SocialIconHeading key={soc}>
                <SocialIcon src={`/img/${soc}.svg`} />
                <InsightValue>{soc}</InsightValue>
              </SocialIconHeading>
            );
          })}
        </SocialCategoryContainer>
      </SocialHeadingCategoryContainer>
    ));
  }
};
