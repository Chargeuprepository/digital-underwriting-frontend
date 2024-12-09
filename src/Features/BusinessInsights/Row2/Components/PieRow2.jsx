import Pie from '../../../../UI/Charts/Pie';
import { StyledChartContainer } from '../../BIUI/StyledChartContainers';

export default function PieRow2({ resultRange }) {
  return (
    <StyledChartContainer padding={'1.5rem 4rem 0 0'} width={'40rem'}>
      <Pie
        labels={['>650', '400-650', '<400']}
        colors={['#2858ea', '#35b9ee', '#7090ef']}
        // series={[142, 73, 11]}
        series={[
          +resultRange?.highCreditPercentage,
          +resultRange?.mediumCreditPercentage,
          +resultRange?.lowCreditPercentage,
        ]}
        heading="Credit Score Range"
      />
    </StyledChartContainer>
  );
}
