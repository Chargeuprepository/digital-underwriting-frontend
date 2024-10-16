import BarChart from '../../../../UI/Charts/BarChart';
import { StyledChartContainer } from '../../BIUI/StyledChartContainers';

export default function Bar2Row3() {
  return (
    <StyledChartContainer padding={'2rem 3rem 2rem 1rem'} width={'45rem'}>
      <BarChart
        heading="Drivers Using UPI"
        direction="horizontal"
        format=""
        height="100%"
        width="100%"
        // total={600}
        labelSize={'12px'}
        colors={['#800080', '#9370DB']}
        data={[
          { label: 'Yes', value: 555 },
          { label: 'No', value: 381 },
        ]}
      />
    </StyledChartContainer>
  );
}
