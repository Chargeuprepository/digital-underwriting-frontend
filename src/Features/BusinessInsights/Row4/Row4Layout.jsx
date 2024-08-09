import BarRow4 from './Components/BarRow4';
import DonutRow4 from './Components/DonutRow4';
import PieRow4 from './Components/PieRow4';
import RowLayoutBusiInsights from '../Charts/RowLayoutBusi-Insights';

export default function Row4Layout() {
  return (
    <RowLayoutBusiInsights row="4">
      <BarRow4 />
      <DonutRow4 />
      <PieRow4 />
    </RowLayoutBusiInsights>
  );
}

// const orangeColors = [
//   '#FFA500', // Base Orange
//   '#FFB347', // Light Orange
//   '#FFCC99', // Peach
//   '#FF8C00', // Dark Orange
//   '#FF7F50', // Coral
//   '#FF4500', // Deep Orange
// ];
