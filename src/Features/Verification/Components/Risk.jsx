import { StyledVerificationTab } from '../UI';

export default function Risk({ image }) {
  return (
    <StyledVerificationTab onClick={() => console.log(image)}>
      StyledRisk
    </StyledVerificationTab>
  );
}
