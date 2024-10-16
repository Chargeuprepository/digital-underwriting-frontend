import Pie from '../../../../UI/Charts/Pie';
import { StyledChartContainer } from '../../BIUI/StyledChartContainers';

export default function PieRow3() {
  return (
    <StyledChartContainer padding={'1.5rem 4rem 0 0'} width={'40rem'}>
      <Pie
        labels={['>650', '300-550', '<300']}
        colors={['#ba70ff', '#9370DB', '#D8BFD8']}
        series={[142, 73, 11]}
        heading="Phone Name Match Score"
      />
    </StyledChartContainer>
  );
}
