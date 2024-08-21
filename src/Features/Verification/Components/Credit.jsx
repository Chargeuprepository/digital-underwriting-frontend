import { StyledVerificationTab } from '../UI';

export default function Credit({ image }) {
  return (
    <StyledVerificationTab onClick={() => console.log(image)}>
      StyledCredit
    </StyledVerificationTab>
  );
}
