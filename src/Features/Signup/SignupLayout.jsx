import styled from 'styled-components';
import GridMaker from '../../UI/GridMaker';
import AddDetails from './Components/AddDetails';
import EmailVerify from './Components/EmailVerify';

export const StyledSignupColumn = styled.div`
  background: ${(props) => props.background};
  border-radius: ${(props) => props.bradius === 'true' && 'calc(0.5rem)'};
  background-size: 350px;
`;

const StyledSignupLayout = styled.div`
  padding: 8rem 16rem;
  height: 100vh;
  background: var(--color-brand-original-blue-400);
`;

export default function SignupLayout() {
  return (
    <StyledSignupLayout>
      <GridMaker
        column={'0.8fr 1fr'}
        height={'100%'}
        backgroundcolor={'var(--color-gray-50)'}
        padding={'0.5rem'}
        bradius={'1rem'}
        boxshadow={'true'}
      >
        <EmailVerify />
        <AddDetails />
      </GridMaker>
    </StyledSignupLayout>
  );
}
