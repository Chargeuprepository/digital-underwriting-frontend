import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 40rem;
  height: 54rem;
  background-color: var(--color-gray-50);
  display: flex;
  flex-direction: column;
  gap: 3rem;
  border-radius: 1.2rem;
  align-self: center;
`;
const FormImage = styled.div`
  width: 100%;
  margin-top: 2rem;
`;
const Logo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 60%;
`;
const Form = styled.form`
  height: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-left: 4rem;
  position: relative;
`;
const Value = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
const Label = styled.label`
  font-size: 1.5rem;
  color: var(--color-gray-900);
  font-weight: 500;
`;
const Input = styled.input`
  max-width: 30rem;
  height: 4.5rem;
  border-radius: 0.6rem;
  border: none;
  font-size: 1.4rem;
  padding-left: 0.8rem;
  color: var(--color-gray-800);
  background-color: var(--color-gray-100);
  box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem var(--color-gray-200);

  &::placeholder {
    font-size: 1.4rem;
    color: var(--color-gray-200);
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
`;
const Astrick = styled.span`
  position: absolute;
  margin-left: 0.2rem;
  font-size: 1.2rem;
  color: var(--color-astrick-red);
`;

const ForgotPass = styled.button`
  color: var(--color-blue-light);
  position: absolute;
  top: 27.5rem;
  right: 7rem;
  font-size: 1.4rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  background: none;

  &:hover {
    color: var(--color-blue-dark);
  }
`;
const Button = styled.button`
  max-width: 30rem;
  height: 4.2rem;
  border-radius: 0.6rem;
  border: none;
  font-size: 1.6rem;
  margin-top: 4rem;
  cursor: pointer;
  color: var(--color-gray-50);
  box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem var(--color-brand-green-0);
  background: linear-gradient(
    to right,
    var(--color-brand-original-blue-400) 50%,
    var(--color-brand-original-green-400)
  );
  transition: all;

  &:hover {
    background: linear-gradient(
      to right,
      var(--color-brand-blue-500) 50%,
      var(--color-brand-green-500)
    );
  }
  &:active {
    box-shadow: 0.2rem 0.2rem 0.3rem 0.3rem var(--color-brand-green-50);
  }
`;

export default function LoginForm() {
  return (
    <FormContainer>
      <FormImage>
        <Logo>
          <Image src="/img/logo-chargeup.png" />
        </Logo>
      </FormImage>

      <Form>
        <Value>
          <Label htmlFor="email">
            Email <Astrick>*</Astrick>
          </Label>
          <Input id="email" type="email" placeholder="xyz@example.com"></Input>
        </Value>
        <Value>
          <Label htmlFor="password">
            Password <Astrick>*</Astrick>
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter the password"
          ></Input>
        </Value>
        <Value>
          <Label htmlFor="message">
            Role<span style={{ fontSize: '1.3rem' }}>(optional)</span>
          </Label>
          <Input
            id="message"
            type="text"
            maxLength={12}
            placeholder="Employee, Manager, HOD, Admin"
          ></Input>
        </Value>

        <ForgotPass>Forgot password ?</ForgotPass>

        <Button>Login</Button>
      </Form>
    </FormContainer>
  );
}
