import Pie from '../../../../UI/Charts/Pie';
import { StyledChartContainer } from '../../BIUI/StyledChartContainers';

export default function PieRow3({ phoneNameMatchScore }) {
  return (
    <StyledChartContainer padding={'1.5rem 4rem 0 0'} width={'40rem'}>
      <Pie
        labels={['>70', '40-70', '<40']}
        colors={['#ba70ff', '#9370DB', '#D8BFD8']}
        series={[
          +phoneNameMatchScore?.high,
          +phoneNameMatchScore?.medium,
          +phoneNameMatchScore?.low,
        ]}
        heading="Phone Name Match Score"
      />
    </StyledChartContainer>
  );
}
