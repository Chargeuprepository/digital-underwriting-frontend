import PaymentBehaviour from './Components/PaymentBehaviour';
import KarmaScore from './Components/KarmaScore';
import CustomerDefault from './Components/CustomerDefault';
import GridMaker from '../../UI/GridMaker';

export default function AIMLLayout() {
  return (
    <GridMaker height="auto" column={'1fr'} padding="0 3rem" gap="3rem">
      <PaymentBehaviour />
      <KarmaScore />
      <CustomerDefault />
    </GridMaker>
  );
}
