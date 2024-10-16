import Pie from '../../../../UI/Charts/Pie';
import { StyledChartContainer } from '../../BIUI/StyledChartContainers';

export default function PieRow2({}) {
  return (
    <StyledChartContainer padding={'1.5rem 4rem 0 0'} width={'40rem'}>
      <Pie
        labels={['>650', '300-550', '<300']}
        colors={['#ADD8E6', '#87CEEB', '#4169E1']}
        series={[142, 73, 11]}
        heading="Credit Score Range"
      />
    </StyledChartContainer>
  );
}
