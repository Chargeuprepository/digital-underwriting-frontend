import styled from 'styled-components';

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
export const Label = styled.label`
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-gray-800);
`;
export const InputErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;
export const LabelInputErrorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.3rem 6rem;
`;
export const Input = styled.input`
  border-radius: 0.4rem;
  height: 3.5rem;
  width: 26rem;
  border: 1px solid var(--color-gray-600);
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--color-gray-700);
  padding-left: 1rem;
  background: linear-gradient(
    to right,
    var(--color-gray-25),
    var(--color-gray-50)
  );

  &::placeholder {
    color: var(--color-gray-400);
    font-size: 1.4rem;
  }
  &:focus {
    outline: none;
  }
`;
export const Option = styled.option`
  text-transform: capitalize;
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--color-gray-700);
  background-color: var(--color-gray-50);
`;
export const Select = styled.select`
  border: 1px solid var(--color-gray-600);
  border-radius: 0.4rem;
  height: 3.5rem;
  width: 26rem;
  font-size: 1.4rem;
  padding-left: 0.4rem;
  color: var(--color-gray-700);
  background: linear-gradient(
    to right,
    var(--color-gray-25),
    var(--color-gray-50)
  );
`;
export const Error = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: #d00000;
  margin-left: auto;
`;
