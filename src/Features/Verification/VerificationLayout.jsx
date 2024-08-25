import styled from 'styled-components';
import Tab from './Components/VerificationTabs';

const StyledVerificationLayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 3rem;
`;

export default function VerificationLayout() {
  return (
    <StyledVerificationLayout>
      <Tab />
    </StyledVerificationLayout>
  );
}
