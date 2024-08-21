import Donut from '../../Charts/Donut';
import { StyledChartContainer } from '../../Charts/StyledChartContainers';

export default function DonutRow4() {
  return (
    <StyledChartContainer padding={'2rem 0.4rem 2rem 3.6rem '} width={'40rem'}>
      <Donut
        colors={['#8d99ae', '#310a31', '#ef233c']}
        labels={['>550', '300-550', '<300']}
        series={[609, 225, 103]}
        total={609 + 225 + 103}
        heading={'Social Footprint'}
      />
    </StyledChartContainer>
  );
}

// Pallete 2
// indiamart: #2e3192
// paytm: #00baf2
// whatsapp: #25D366
// instagram: #d62976
// flipkart: #1F74BA
// amazon: #f6bc66
