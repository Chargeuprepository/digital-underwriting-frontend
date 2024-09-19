import BusinessStats from './Components/BusinessStats';
import DistanceTenureMonths from './Components/DistanceTenureMonths';
import Churned from './Components/Churned';
import ConfusionMatrix from './Components/ConfusionMatrix';
import CreditVsRisk from './Components/CreditVsRisk';
import CreditVsKarma from './Components/CreditVsKarma';
import GridMaker from '../../UI/GridMaker';

export default function DashboardLayout() {
  return (
    <GridMaker
      column="1fr 0.7fr 0.7fr 0.9fr 0.6fr 0.6fr 1fr"
      row="0.92fr 1fr"
      gap="2rem"
    >
      <BusinessStats />
      <CreditVsRisk />
      <CreditVsKarma />
      <DistanceTenureMonths />
      <ConfusionMatrix />
      <Churned />
    </GridMaker>
  );
}
