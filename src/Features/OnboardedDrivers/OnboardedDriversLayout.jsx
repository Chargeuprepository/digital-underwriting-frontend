import OnboardedHeader from './Components/OnboardedHeader';
import OnboardedBody from './Components/OnboardedBody';
import Pagination from '../../UI/Pagination';
import GridMaker from '../../UI/GridMaker';
import PrePostOnboarding from './Components/PrePostOnboarding';

export default function OnboardedDriversLayout() {
  return (
    <GridMaker column="1fr" row="1rem 5rem 1fr 3rem" gap="2rem" height={'82vh'}>
      <PrePostOnboarding></PrePostOnboarding>
      <OnboardedHeader />
      <OnboardedBody />
      <Pagination count={0} />
    </GridMaker>
  );
}
