import styled from 'styled-components';
import Astrick from '../../../UI/Astrick';
import FormLabel from '../../../UI/FormLabel';
import Form from '../../../UI/Form';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

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
const Value = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Input = styled.input`
  max-width: 30rem;
  height: 4.5rem;
  border-radius: 0.6rem;
  border: none;
  font-size: 1.4rem;
  padding: 0 1.4rem;
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
  margin-top: 3rem;
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
  const navigate = useNavigate();

  const [userId, setUserId] = useState();
  const [password, setPassword] = useState();
  const credentials = {
    userId: 'underwrite@echargeup.com',
    password: 'chargeup@2025#',
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (userId === credentials.userId && password === credentials.password) {
      localStorage.setItem(
        'userCredentials',
        JSON.stringify({ userId, password })
      );
      setTimeout(() => {
        navigate('/');
        toast.success('You Are Authenticated: Welcome🤗');
      }, 300);
    } else {
      toast.error('Wrong Credentials💀');
    }

    setUserId('');
    setPassword('');
  }

  return (
    <FormContainer>
      <FormImage>
        <Logo>
          <Image src="/img/logo-chargeup.png" />
        </Logo>
      </FormImage>

      <Form
        onSubmit={(e) => handleSubmit(e)}
        height="40rem"
        gap="1.6rem"
        margin="0 0 0 4rem"
        position="relative"
      >
        <Value>
          <FormLabel htmlFor="userId">
            User Id<Astrick>*</Astrick>
          </FormLabel>
          <Input
            id="userId"
            type="userId"
            placeholder="Enter the User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          ></Input>
        </Value>
        <Value>
          <FormLabel htmlFor="password">
            Password<Astrick>*</Astrick>
          </FormLabel>
          <Input
            id="password"
            type="password"
            placeholder="Enter the password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></Input>
        </Value>
        <Value>
          <FormLabel htmlFor="message">
            Role<span style={{ fontSize: '1.3rem' }}>(optional)</span>
          </FormLabel>
          <Input
            id="message"
            type="text"
            maxLength={12}
            placeholder="Employee, Manager, HOD, Admin"
          ></Input>
        </Value>
        <Button>Login</Button>
      </Form>
    </FormContainer>
  );
}
