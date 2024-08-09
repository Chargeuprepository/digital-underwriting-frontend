import Pie from '../../Charts/Pie';
import { StyledChartContainer } from '../../Charts/StyledChartContainers';

export default function PieRow2({}) {
  return (
    <StyledChartContainer padding={'1.5rem 4rem 0 0'} width={'40rem'}>
      <Pie
        labels={['>650', '300-550', '<300']}
        colors={['#87CEFA', '#1E90FF', '#0000FF']}
        series={[142, 73, 11]}
        heading="Credit Score Range"
      />
    </StyledChartContainer>
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
