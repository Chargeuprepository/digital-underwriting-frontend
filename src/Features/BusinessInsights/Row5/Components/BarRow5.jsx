import BarChart from '../../../../UI/Charts/BarChart';
import { StyledChartContainer } from '../../BIUI/StyledChartContainers';

export default function BarRow5({ phoneFootprint }) {
  return (
    <StyledChartContainer padding={'2rem'} width={'30rem'}>
      <BarChart
        heading="Phone FootPrint"
        direction="vertical"
        // format="%"
        height="100%"
        width="85%"
        total={
          +phoneFootprint?.high + +phoneFootprint?.medium + +phoneFootprint?.low
        }
        labelSize={'12px'}
        colors={['#c19749', '#cd751d', '#c84313']}
        data={[
          { label: 'Low', value: +phoneFootprint?.low },
          { label: 'Medium', value: +phoneFootprint?.medium },
          { label: 'High', value: +phoneFootprint?.high },
        ]}
      />
    </StyledChartContainer>
  );
}
