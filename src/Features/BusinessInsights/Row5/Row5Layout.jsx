import Bar1Row5 from './Components/Bar1Row5';
import Bar2Row5 from './Components/Bar2Row5';
import PieRow5 from './Components/PieRow5';
import RowLayoutBusiInsights from '../Charts/RowLayoutBusi-Insights';

export default function Row5Layout() {
  return (
    <RowLayoutBusiInsights row="5">
      <Bar1Row5 />
      <PieRow5 />
      <Bar2Row5 />
    </RowLayoutBusiInsights>
  );
}

// const purpleColors = [
//   '#800080', // Base Purple
//   '#D8BFD8', // Thistle
//   '#E6E6FA', // Lavender
//   '#9370DB', // Medium Purple
//   '#8A2BE2', // Blue Violet
//   '#4B0082', // Indigo
// ];
