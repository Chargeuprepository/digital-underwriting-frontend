import Pie from '../../Charts/Pie';
import { StyledChartContainer } from '../../Charts/StyledChartContainers';

export default function PieRow5() {
  return (
    <StyledChartContainer padding={'2rem 6rem 1rem 0'} width={'45rem'}>
      <Pie
        labels={['Prepaid', 'Postpaid']}
        colors={['#FFCC99', '#FF4500']}
        series={[97, 3]}
        heading="Phone Network"
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
