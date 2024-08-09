import BarChart from '../../Charts/BarChart';
import { StyledChartContainer } from '../../Charts/StyledChartContainers';

export default function Bar1Row5() {
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
        colors={['#800080', '#9370DB', '#b16db1']}
        data={[
          { label: 'High', value: 364 },
          { label: 'Medium', value: 332 },
          { label: 'Low', value: 240 },
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
