import { StyledVerificationTab } from '../UI';

export default function Vehicle({ image }) {
  return (
    <StyledVerificationTab onClick={() => console.log(image)}>
      StyledVehicle
    </StyledVerificationTab>
  );
}
