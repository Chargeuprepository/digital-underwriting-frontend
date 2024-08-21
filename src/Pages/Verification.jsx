import styled from 'styled-components';
import VerificationLayout from '../Features/Verification/VerificationLayout';

const StyledVerification = styled.div`
  height: 100%;
`;

export default function Verification() {
  return (
    <StyledVerification>
      <VerificationLayout />
    </StyledVerification>
  );
}
