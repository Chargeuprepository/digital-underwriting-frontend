import Donut from '../../../../UI/Charts/Donut';
import { StyledChartContainer } from '../../BIUI/StyledChartContainers';

export default function DonutRow5() {
  return (
    <StyledChartContainer padding={'2rem 0.4rem 2rem 3.6rem '} width={'40rem'}>
      <Donut
        colors={['#FFA500', '#FF7F50', '#FF4500']}
        labels={['>550', '300-550', '<300']}
        series={[609, 225, 103]}
        total={609 + 225 + 103}
        heading={'Digital Age(Days)'}
      />
    </StyledChartContainer>
  );
}
