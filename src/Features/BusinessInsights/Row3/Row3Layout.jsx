import Bar1Row3 from './Components/Bar1Row3';
import RowLayoutBusiInsights from '../BIUI/RowLayoutBusi-Insights';
import PieRow3 from './Components/PieRow3';
import Bar2Row3 from './Components/Bar2Row3';

export default function Row5Layout() {
  return (
    <RowLayoutBusiInsights row="3" backgroundcolor={'var(--color-gray-10)'}>
      <Bar1Row3 />
      <PieRow3 />
      <Bar2Row3 />
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
