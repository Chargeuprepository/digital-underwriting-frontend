import RowLayoutBusiInsights from '../Charts/RowLayoutBusi-Insights';
import BarRow5 from './Components/BarRow5';
import DonutRow5 from './Components/DonutRow5';
import PieRow5 from './Components/PieRow5';

export default function Row4Layout() {
  return (
    <RowLayoutBusiInsights row="5" backgroundcolor={'var(--color-gray-10)'}>
      <BarRow5 />
      <DonutRow5 />
      <PieRow5 />
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
