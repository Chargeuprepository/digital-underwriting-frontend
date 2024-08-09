import styled from 'styled-components';
import DashboardLayout from '../Features/Dashboard/DasboardLayout';

const DashboardContainer = styled.div`
  /* padding: 2rem; */
`;

export default function Dashboard() {
  return (
    <DashboardContainer>
      <DashboardLayout />
    </DashboardContainer>
  );
}
