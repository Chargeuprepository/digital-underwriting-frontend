import BarChart from '../../Charts/BarChart';
import { StyledChartContainer } from '../../Charts/StyledChartContainers';

export default function BarRow4() {
  return (
    <StyledChartContainer padding={'2rem'} width={'30rem'}>
      <BarChart
        heading="Phone FootPrint"
        direction="vertical"
        format="%"
        height="100%"
        width="85%"
        total={600}
        labelSize={'12px'}
        colors={['#FFA500', '#FFCC99', '#FF7F50']}
        data={[
          { label: 'Low', value: 100 },
          { label: 'Medium', value: 200 },
          { label: 'High', value: 300 },
        ]}
      />
    </StyledChartContainer>
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
