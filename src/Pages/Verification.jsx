import styled from 'styled-components';
import VerificationLayout from '../Features/Verification/VerificationLayout';

const StyledVerification = styled.div`
  height: 100%;
  padding: 2rem;
  background-color: var(--color-gray-1);
  border-radius: 0.6rem;
`;

export default function Verification() {
  return (
    <StyledVerification>
      <VerificationLayout />
    </StyledVerification>
  );
}
