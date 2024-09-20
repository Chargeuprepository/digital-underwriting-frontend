import styled from 'styled-components';

const FormLabel = styled.label`
  font-size: 1.5rem;
  color: ${(props) => (props.color ? props.color : 'var(--color-gray-900)')};
  font-weight: 500;
  text-transform: capitalize;
`;

export default FormLabel;
