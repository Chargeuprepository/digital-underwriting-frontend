import Guage from '../../../../UI/Charts/Guage';
import { StyledChartContainer } from '../../BIUI/StyledChartContainers';

export default function GuageRow2({ avgCredit }) {
  return (
    <StyledChartContainer padding={'1.5rem 0 0 0'} width={'30rem'}>
      <Guage
        total={900}
        score={avgCredit}
        heading="Avg. Credit Score"
        color={'#c1c1fc'}
      />
    </StyledChartContainer>
  );
}
