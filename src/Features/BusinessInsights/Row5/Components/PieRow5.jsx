import Pie from '../../../../UI/Charts/Pie';
import { StyledChartContainer } from '../../BIUI/StyledChartContainers';

export default function PieRow5({ phoneNetwork }) {
  return (
    <StyledChartContainer padding={'2rem 6rem 1rem 0'} width={'45rem'}>
      <Pie
        labels={['Prepaid', 'Postpaid']}
        colors={['#ff6b35', '#FF4500']}
        series={[+phoneNetwork?.prepaid, +phoneNetwork?.postpaid]}
        heading="Phone Network"
      />
    </StyledChartContainer>
  );
}
