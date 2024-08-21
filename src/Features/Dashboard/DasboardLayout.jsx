import styled from 'styled-components';
import BusinessStats from './Components/BusinessStats';
import DistanceTenureMonths from './Components/DistanceTenureMonths';
import Churned from './Components/Churned';
import ConfusionMatrix from './Components/ConfusionMatrix';
import CreditVsRisk from './Components/CreditVsRisk';
import CreditVsKarma from './Components/CreditVsKarma';

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.7fr 0.7fr 0.9fr 0.6fr 0.6fr 1fr;
  grid-template-rows: 0.92fr 1fr;
  gap: 2rem;
`;

export default function DashboardLayout() {
  return (
    <DashboardContainer>
      <BusinessStats />
      <CreditVsRisk />
      <CreditVsKarma />
      <DistanceTenureMonths />
      <ConfusionMatrix />
      <Churned />
    </DashboardContainer>
  );
}
