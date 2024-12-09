import Donut from '../../../../UI/Charts/Donut';
import { StyledChartContainer } from '../../BIUI/StyledChartContainers';

export default function DonutRow4({ socialFootprint }) {
  return (
    <StyledChartContainer padding={'2rem 0.4rem 2rem 3.6rem '} width={'40rem'}>
      <Donut
        colors={['#8d99ae', '#310a31', '#ef233c']}
        labels={['>550', '300-550', '<300']}
        series={[
          +socialFootprint?.high,
          +socialFootprint?.medium,
          +socialFootprint?.low,
        ]}
        total={
          +socialFootprint?.high +
          +socialFootprint?.medium +
          +socialFootprint?.low
        }
        heading={'Social Footprint'}
      />
    </StyledChartContainer>
  );
}
