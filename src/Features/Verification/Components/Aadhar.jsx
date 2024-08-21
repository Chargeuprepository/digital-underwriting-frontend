import { StyledVerificationTab } from '../UI';

export default function Aadhar({ image }) {
  return (
    <StyledVerificationTab onClick={() => console.log(image)}>
      StyledAadhar
    </StyledVerificationTab>
  );
}
