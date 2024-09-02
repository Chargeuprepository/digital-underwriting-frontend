import styled from 'styled-components';

export const StyledVerificationTab = styled.div`
  ${({ shade1, shade2, bgimage }) => `
    background: linear-gradient(
      to right,
      ${shade1},
      ${shade2}
    ),
    url(img/${bgimage});
  `}
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  border-radius: 0.6rem;
  transition: all 0.3s;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;

  &:hover {
    transform: scale(1.02);
  }
`;

export const VerificationName = styled.span`
  font-size: 1.7rem;
  font-weight: 800;
  color: var(--color-gray-25);
  background-color: rgba(43, 43, 43, 0.8);
  border-radius: 0.6rem;
  padding: 0.5rem 1.4rem;
  text-transform: uppercase;
  height: 3.4rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 15rem;
`;
export const Astrick = styled.span`
  position: absolute;
  margin-left: 0.2rem;
  font-size: 1.5rem;
  color: #ff5959;
  /* color: #ffff00; */
`;

export const VerificationNameSpan = styled.span`
  color: #ffff00;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.3s;
`;

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-gray-10);
  border-radius: 0.6rem;
  box-shadow: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
  background: linear-gradient(to top, #41295a, #2f0743);
`;
export const Heading = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-gray-50);
  text-transform: uppercase;
  margin-bottom: 3rem;
`;
export const Button = styled.button`
  border: none;
  text-transform: uppercase;
  font-size: 1.7rem;
  font-weight: 600;
  margin-left: auto;
  padding: 0.5rem 3.6rem;
  border-radius: 0.6rem;
  color: var(--color-gray-800);
  background-color: #dbc4f4;
  transition: all 0.1s;

  &:hover {
    background-color: #b295d0;
  }
  &:active {
    transform: scale(0.98);
  }
`;
export const FormContainer = styled.form`
  color: aliceblue;
  display: flex;
  flex-direction: column;
`;
export const GridTypeOne = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0rem 6rem;
  padding: 0rem 8rem;
`;
export const GridTypeTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;
export const FormRowGridOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
export const FormRowGridTwo = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 2rem;
`;
export const Label = styled.label`
  text-transform: capitalize;
`;
export const Input = styled.input`
  width: 26rem;
  height: 3.6rem;
  color: var(--color-gray-700);
  border-radius: 0.6rem;
  border: 1px solid #fff200;
  font-size: 1.45rem;
  font-weight: 500;
  padding-left: 1rem;
  text-transform: uppercase;

  &:active {
    background-color: #fffa9f;
  }
  &:focus {
    background-color: #fffa9f;
  }
  &::placeholder {
    color: var(--color-gray-200);
  }
`;
export const Select = styled.select`
  width: 26rem;
  height: 3.6rem;
  color: var(--color-gray-700);
  border-radius: 0.6rem;
  border: 1px solid #fff200;
  font-size: 1.45rem;
  font-weight: 500;
  padding-left: 1rem;
  text-transform: uppercase;

  &:active {
    background-color: #fffa9f;
  }
  &:focus {
    background-color: #fffa9f;
  }
`;
export const Option = styled.option`
  text-transform: capitalize;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-gray-700);
`;
export const GridInputError = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;
export const Error = styled.div`
  font-size: 1rem;
  margin-left: auto;
  color: #ff5959;
`;
export const Placeholder = styled.div`
  font-size: 1rem;
  margin-left: auto;
  color: #ff5959;
  height: 1.5rem;
`;
export const Icon = styled.div`
  position: absolute;
  right: 3rem;
  top: 2rem;
  cursor: pointer;

  &:active {
    transform: scale(0.96);
  }

  svg {
    color: var(--color-gray-100);
    height: 3.5rem;
    width: 3.5rem;
    transition: all 0.14s;
  }
  svg:hover {
    color: #ff2e2e;
  }
`;
