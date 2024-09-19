import styled from 'styled-components';
import OnboardedHeader from './Components/OnboardedHeader';
import OnboardedBody from './Components/OnboardedBody';
import Pagination from '../../UI/Layout/Pagination';

const StyledOnboardedDriversLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5rem 1fr 3rem;
  gap: 2rem;
`;

export default function OnboardedDriversLayout() {
  return (
    <StyledOnboardedDriversLayout>
      <OnboardedHeader />
      <OnboardedBody />
      <Pagination count={38} />
    </StyledOnboardedDriversLayout>
  );
}
