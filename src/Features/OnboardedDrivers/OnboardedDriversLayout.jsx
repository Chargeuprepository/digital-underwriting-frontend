import OnboardedHeader from './Components/OnboardedHeader';
import OnboardedBody from './Components/OnboardedBody';
import Pagination from '../../UI/Pagination';
import GridMaker from '../../UI/GridMaker';

export default function OnboardedDriversLayout() {
  return (
    <GridMaker column="1fr" row="5rem 1fr 3rem" gap="2rem">
      <OnboardedHeader />
      <OnboardedBody />
      <Pagination count={38} />
    </GridMaker>
  );
}
