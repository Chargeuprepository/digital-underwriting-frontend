import styled from 'styled-components';
import PaymentBehaviour from './Components/PaymentBehaviour';
import KarmaScore from './Components/KarmaScore';
import CustomerDefault from './Components/CustomerDefault';

const StyledAIMLLayout = styled.div`
  /* background-color: #8eb5d7; */
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 3rem;
  gap: 3rem;
`;

export default function AIMLLayout() {
  return (
    <StyledAIMLLayout>
      <PaymentBehaviour />
      <KarmaScore />
      <CustomerDefault />
    </StyledAIMLLayout>
  );
}
