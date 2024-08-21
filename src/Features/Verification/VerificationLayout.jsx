import styled from 'styled-components';
import Vehicle from './Components/Vehicle';
import Risk from './Components/Risk';
import Credit from './Components/Credit';
import Aadhar from './Components/Aadhar';
import PAN from './Components/PAN';

const StyledVerificationLayout = styled.div`
  background-color: #f18ebe;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export default function VerificationLayout() {
  return (
    <StyledVerificationLayout>
      <Vehicle image={false} />
      <Risk image={false} />
      <Credit image={false} />
      <Aadhar image={true} />
      <PAN image={true} />
    </StyledVerificationLayout>
  );
}
