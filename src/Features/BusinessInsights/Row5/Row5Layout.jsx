import RowLayoutBusiInsights from '../BIUI/RowLayoutBusi-Insights';
import BarRow5 from './Components/BarRow5';
import DonutRow5 from './Components/DonutRow5';
import PieRow5 from './Components/PieRow5';

export default function Row4Layout({
  phoneFootprint,
  digitalAge,
  phoneNetwork,
}) {
  return (
    <RowLayoutBusiInsights row="5" backgroundcolor={'var(--color-gray-10)'}>
      <BarRow5 phoneFootprint={phoneFootprint} />
      <DonutRow5 digitalAge={digitalAge} />
      <PieRow5 phoneNetwork={phoneNetwork} />
    </RowLayoutBusiInsights>
  );
}
