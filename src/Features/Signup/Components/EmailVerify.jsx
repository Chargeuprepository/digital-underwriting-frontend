import styled from 'styled-components';
import { StyledSignupColumn } from '../SignupLayout';
import { useState } from 'react';
import Astrick from '../../../UI/Astrick';
import handleMobile from '../../../Utils/handleNumberLength';
import handleNumberLength from '../../../Utils/handleNumberLength';

const VerifyHeading = styled.div`
  text-transform: capitalize;
  color: var(--color-gray-50);
  margin: 4rem 0rem 0rem 0rem;
  padding: 1rem;
  background: linear-gradient(
    to bottom,
    var(--color-brand-blue-300),
    var(--color-brand-blue-500)
  );
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  position: relative;
`;
const AllInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 4rem;
`;
const LabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
`;
const EmailLabel = styled.label`
  color: var(--color-gray-50);
  text-transform: capitalize;
  font-size: 1.8rem;
  font-weight: 500;
`;
const ButtonInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const ButtonSubmit = styled.button`
  margin-left: auto;
  text-transform: capitalize;
  border-radius: 0.6rem;
  border: none;
  padding: 0.4rem 2rem;
  background-color: var(--color-brand-original-green-400);
  color: var(--color-gray-50);
  font-size: 1.6rem;
  font-weight: 500;
  min-width: 11rem;
  transition: all 0.3s;
  &:hover {
    background-color: var(--color-brand-green-500);
    color: var(--color-gray-200);
  }
  &:active {
    transform: scale(0.96);
  }
`;
const EmailInput = styled.input`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-gray-600);
  width: 35rem;
  height: 4rem;
  border: none;
  border-radius: 0.6rem;
  text-align: center;
  padding: 1rem 2rem;
  background-color: var(--color-gray-100);
  transition: all 0.3s;
  &:focus {
    background-color: var(--color-gray-1);
  }
  &::placeholder {
    color: var(--color-gray-400);
  }
`;
const Logo = styled.img`
  position: absolute;
  width: 3.3rem;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);
`;

export default function EmailVerify() {
  const [email, setEmail] = useState('');
  const [OTP, setOTP] = useState();

  //   function handleOTP(e) {
  //     const value = e.target.value;
  //     const regex = /^[0-9\b]+$/;

  //     console.log(value);

  //     if (value === '' || regex.test(value)) {
  //       setOTP(value);
  //     }
  //   }
  return (
    <StyledSignupColumn
      background={'var(--color-brand-original-blue-400)'}
      bradius={'true'}
    >
      <VerifyHeading>
        <Logo src="/img/logo-plug.webp" />
        get your email verified !
      </VerifyHeading>
      <AllInputs>
        <LabelInputContainer>
          <EmailLabel>
            email
            <Astrick>*</Astrick>
          </EmailLabel>
          <ButtonInputContainer>
            <EmailInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="xyz@example.com"
            />
            <ButtonSubmit>proceed</ButtonSubmit>
          </ButtonInputContainer>
        </LabelInputContainer>
        <LabelInputContainer>
          <EmailLabel>
            enter OTP<Astrick>*</Astrick>
          </EmailLabel>
          <ButtonInputContainer>
            <EmailInput
              value={OTP}
              type="number"
              onInput={(e) => {
                e.target.value = handleNumberLength(e, 6);
                setOTP(e.target.value);
              }}
              placeholder="Enter OTP"
            />
            <ButtonSubmit>verify</ButtonSubmit>
          </ButtonInputContainer>
        </LabelInputContainer>
      </AllInputs>
    </StyledSignupColumn>
  );
}
