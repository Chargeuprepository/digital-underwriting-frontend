import GuageRow2 from './Components/GuageRow2';
import PieRow2 from './Components/PieRow2';
import BarHoriRow2 from './Components/BarHoriRow2';
import RowLayoutBusiInsights from '../Charts/RowLayoutBusi-Insights';

export default function Row2Layout() {
  return (
    <RowLayoutBusiInsights row="2">
      <GuageRow2 />
      <PieRow2 />
      <BarHoriRow2 />
    </RowLayoutBusiInsights>
  );
}

// const blueColors = [
//   '#0000FF', // Base Blue
//   '#1E90FF', // Dodger Blue
//   '#87CEFA', // Light Sky Blue
//   '#4682B4', // Steel Blue
//   '#4169E1', // Royal Blue
//   '#00008B', // Dark Blue
// ];
