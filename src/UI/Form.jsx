import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
  border-radius: ${(props) => props.borderradius};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  position: ${(props) => props.position};
  color: ${(props) => props.color};
`;

export default Form;
