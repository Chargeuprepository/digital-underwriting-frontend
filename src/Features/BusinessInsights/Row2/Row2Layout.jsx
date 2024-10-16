import GuageRow2 from './Components/GuageRow2';
import PieRow2 from './Components/PieRow2';
import BarHoriRow2 from './Components/BarHoriRow2';
import RowLayoutBusiInsights from '../BIUI/RowLayoutBusi-Insights';

export default function Row2Layout() {
  return (
    <RowLayoutBusiInsights row="2" backgroundcolor={'var(--color-gray-10)'}>
      <GuageRow2 />
      <PieRow2 />
      <BarHoriRow2 />
    </RowLayoutBusiInsights>
  );
}
