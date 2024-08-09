import styled from 'styled-components';
import MLForm from './MLForm';
import FormResult from './FormResult';

const StyledMLFormLayout = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  height: 100%;
  background: linear-gradient(45deg, #000428, #004e92);
`;

export default function MLFormLayout() {
  return (
    <StyledMLFormLayout>
      <MLForm></MLForm>
      <FormResult></FormResult>
    </StyledMLFormLayout>
  );
}
