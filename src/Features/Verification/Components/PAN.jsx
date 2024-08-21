import { StyledVerificationTab } from '../UI';

export default function PAN({ image }) {
  return (
    <StyledVerificationTab onClick={() => console.log(image)}>
      StyledPAN
    </StyledVerificationTab>
  );
}
