import BarChart from '../../../../UI/Charts/BarChart';
import { StyledChartContainer } from '../../BIUI/StyledChartContainers';

export default function BarRow5() {
  return (
    <StyledChartContainer padding={'2rem'} width={'30rem'}>
      <BarChart
        heading="Phone FootPrint"
        direction="vertical"
        format="%"
        height="100%"
        width="85%"
        total={600}
        labelSize={'12px'}
        colors={['#FFA500', '#FFCC99', '#FF7F50']}
        data={[
          { label: 'Low', value: 100 },
          { label: 'Medium', value: 200 },
          { label: 'High', value: 300 },
        ]}
      />
    </StyledChartContainer>
  );
}
