import BarChart from '../../Charts/BarChart';
import { StyledChartContainer } from '../../Charts/StyledChartContainers';

export default function BarHoriRow2({}) {
  return (
    <StyledChartContainer padding={'1.5rem 0 0 2rem'} width={'45rem'}>
      <BarChart
        heading="Vehicle Finance"
        direction="horizontal"
        format="%"
        height="90%"
        width="90%"
        total={157 + 158}
        colors={['#4169E1', '#87CEFA']}
        data={[
          { label: 'Yes', value: 157 },
          { label: 'No', value: 158 },
        ]}
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
