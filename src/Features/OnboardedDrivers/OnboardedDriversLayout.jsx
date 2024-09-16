import styled from 'styled-components';
import OnboardedHeader from './Components/OnboardedHeader';
import StyledOnboardedBody from './Components/OnboardedBody';
import { Background } from 'victory';

const StyledOnboardedDriversLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5rem auto;
  gap: 2.6rem;
`;

export default function OnboardedDriversLayout() {
  return (
    <StyledOnboardedDriversLayout>
      <OnboardedHeader></OnboardedHeader>
      <StyledOnboardedBody></StyledOnboardedBody>
    </StyledOnboardedDriversLayout>
  );
}
