import Donut from '../../../../UI/Charts/Donut';
import { StyledChartContainer } from '../../BIUI/StyledChartContainers';

export default function DonutRow5({ digitalAge }) {
  return (
    <StyledChartContainer padding={'2rem 0.4rem 2rem 3.6rem '} width={'40rem'}>
      <Donut
        colors={['#FFA500', '#FF7F50', '#FF4500']}
        labels={['>550', '300-550', '<300']}
        series={[+digitalAge?.high, +digitalAge?.medium, +digitalAge?.low]}
        // total={+digitalAge?.high + +digitalAge?.medium + +digitalAge?.low}
        heading={'Digital Age(Days)'}
      />
    </StyledChartContainer>
  );
}
