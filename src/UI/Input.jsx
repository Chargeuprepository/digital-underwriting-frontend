import styled from 'styled-components';

const Input = styled.input`
  border-radius: 0.6rem;
  height: ${(props) => (props.width ? props.height : '3.5rem')};
  width: ${(props) => (props.width ? props.width : '26rem')};
  border: ${(props) =>
    props.border ? props.border : '1px solid var(--color-gray-600)'};
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--color-gray-700);
  padding-left: 1rem;
  background: ${(props) => props.background};
  box-shadow: ${(props) => props.boxshadow};
  text-transform: uppercase;
  transition: all 0.3s;

  &::placeholder {
    color: var(--color-gray-200);
    font-size: 1.4rem;
    padding-top: 2rem;
  }
  &:focus,
  &:active {
    background: ${(props) =>
      props.activefocusbackgroundcolor
        ? props.activefocusbackgroundcolor
        : '#fffa9f'};
  }
`;

export default Input;
