import BarChart from '../../Charts/BarChart';
import { StyledChartContainer } from '../../Charts/StyledChartContainers';

export default function Bar1Row3() {
  return (
    <StyledChartContainer padding={'2rem 3rem 2rem 0.2rem'} width={'30rem'}>
      <BarChart
        heading="Identity Confidence Score"
        direction="horizontal"
        format=""
        height="100%"
        width="100%"
        // total={600}
        labelSize={'12px'}
        colors={['#962fbf', '#d62976', '#ff54a1']}
        data={[
          { label: 'High', value: 364 },
          { label: 'Medium', value: 332 },
          { label: 'Low', value: 240 },
        ]}
      />
    </StyledChartContainer>
  );
}

// Light yellow (Hex: #feda75 and RGB: 254,218,117), orange (Hex: #fa7e1e and RGB: 250,126,30), pink (Hex: #d62976 and RGB: 214,41,118), purple (Hex: #962fbf and RGB: 150,47,191) and blue (Hex: #4f5bd5 and RGB: 79,91,213).

// const purpleColors = [
//   '#800080', // Base Purple
//   '#D8BFD8', // Thistle
//   '#E6E6FA', // Lavender
//   '#9370DB', // Medium Purple
//   '#8A2BE2', // Blue Violet
//   '#4B0082', // Indigo
// ];
