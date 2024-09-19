import Tab from './Components/VerificationTabs';
import GridMaker from '../../UI/GridMaker';

export default function VerificationLayout() {
  return (
    <GridMaker
      height="100%"
      column="repeat(4, 1fr)"
      row="repeat(2, 1fr)"
      gap="3rem"
    >
      <Tab />
    </GridMaker>
  );
}
