import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-gray-10);
  border-radius: 0.6rem;
  box-shadow: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
  background: radial-gradient(
    circle,
    var(--color-brand-green-200),
    var(--color-brand-blue-600)
  );
  width: 60%;
  height: 60%;
`;
const Heading = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-gray-700);
  text-transform: uppercase;
`;
const Button = styled.button`
  border: none;
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--color-gray-600);
`;
const FormContainer = styled.div`
  color: aliceblue;
`;

export default function VerificationForm({ formParams }) {
  if (Object.keys(formParams).length === 0) return;
  console.log(formParams);

  return createPortal(
    <Overlay>
      <StyledModal>
        <Heading>{formParams.name}</Heading>
        <FormContainer>
          {formParams.parameters.length >= 4 ? 1 : 2}
        </FormContainer>
        <Button>check</Button>
      </StyledModal>
    </Overlay>,
    document.body
  );
}
