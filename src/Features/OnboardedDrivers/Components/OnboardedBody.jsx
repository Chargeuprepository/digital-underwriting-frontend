import styled from 'styled-components';
import GridHeader from './GridHeader';
import GridBody from './GridBody';

const StyledOnboardedBody = styled.div`
  border: 1px solid var(--color-gray-50);
  border-bottom: none;
  /* border-radius: 0.6rem; */
`;

export default function OnboardedBody() {
  return (
    <StyledOnboardedBody>
      <GridHeader />
      <GridBody />
    </StyledOnboardedBody>
  );
}
