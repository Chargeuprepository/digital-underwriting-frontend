import styled from 'styled-components';
import { StyledSignupColumn } from '../SignupLayout';
import UserCreateDeleteForm from '../../../UI/UserCreateEditForm';

const DetailsLogo = styled.img`
  width: 24rem;
  display: block;
  margin: 2rem auto;
`;

export default function AddDetails() {
  return (
    <StyledSignupColumn background={'var(--color-gray-50)'} bradius={'true'}>
      <DetailsLogo src="img/logo-chargeup.png" />
      <UserCreateDeleteForm
        formButtonName={'create user'}
        buttonColor={'var(--color-brand-original-green-400)'}
        buttonHoverColor={'var(--color-brand-green-500)'}
        inputbackground={'#efffeb'}
      />
    </StyledSignupColumn>
  );
}
