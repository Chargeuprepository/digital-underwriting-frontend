import styled from 'styled-components';
import MLFormLayout from '../Features/AI-ML/Components/Form/MLFormLayout';

const StyledMLFormPage = styled.div`
  height: 100vh;
`;

export default function MLFormPage() {
  return (
    <StyledMLFormPage>
      <MLFormLayout />
    </StyledMLFormPage>
  );
}
