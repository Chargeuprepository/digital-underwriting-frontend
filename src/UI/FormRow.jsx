import styled from 'styled-components';

const FormRow = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexdirection};
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
`;

export default FormRow;
