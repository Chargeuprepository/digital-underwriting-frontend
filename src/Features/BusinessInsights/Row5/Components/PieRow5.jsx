import Pie from '../../Charts/Pie';
import { StyledChartContainer } from '../../Charts/StyledChartContainers';

export default function PieRow5() {
  return (
    <StyledChartContainer padding={'1.5rem 4rem 0 0'} width={'40rem'}>
      <Pie
        labels={['>650', '300-550', '<300']}
        colors={['#4B0082', '#9370DB', '#D8BFD8']}
        series={[142, 73, 11]}
        heading="Phone Name Match Score"
      />
    </StyledChartContainer>
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
