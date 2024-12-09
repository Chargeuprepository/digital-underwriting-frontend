import GuageRow2 from './Components/GuageRow2';
import PieRow2 from './Components/PieRow2';
import BarHoriRow2 from './Components/BarHoriRow2';
import RowLayoutBusiInsights from '../BIUI/RowLayoutBusi-Insights';

export default function Row2Layout({
  avgCredit,
  resultRange,
  vehicleFinanced,
  length,
}) {
  return (
    <RowLayoutBusiInsights row="2" backgroundcolor={'var(--color-gray-10)'}>
      <GuageRow2 avgCredit={avgCredit} />
      <PieRow2 resultRange={resultRange} />
      <BarHoriRow2 vehicleFinanced={vehicleFinanced} length={length} />
    </RowLayoutBusiInsights>
  );
}
