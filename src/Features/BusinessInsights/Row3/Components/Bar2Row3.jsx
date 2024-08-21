import BarChart from '../../Charts/BarChart';
import { StyledChartContainer } from '../../Charts/StyledChartContainers';

export default function Bar2Row3() {
  return (
    <StyledChartContainer padding={'2rem 3rem 2rem 1rem'} width={'45rem'}>
      <BarChart
        heading="Drivers Using UPI"
        direction="horizontal"
        format=""
        height="100%"
        width="100%"
        // total={600}
        labelSize={'12px'}
        colors={['#800080', '#9370DB']}
        data={[
          { label: 'Yes', value: 555 },
          { label: 'No', value: 381 },
        ]}
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
