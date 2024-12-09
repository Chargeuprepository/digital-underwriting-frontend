import BarChart from '../../../../UI/Charts/BarChart';
import { StyledChartContainer } from '../../BIUI/StyledChartContainers';

export default function BarVerti1Row4({ digitalFootprint }) {
  return (
    <StyledChartContainer padding={'2rem'} width={'30rem'}>
      <BarChart
        heading="Digital FootPrint"
        direction="vertical"
        // format="%"
        height="100%"
        width="85%"
        total={
          +digitalFootprint?.high +
          +digitalFootprint?.medium +
          +digitalFootprint?.low
        }
        labelSize={'12px'}
        data={[
          { label: 'High', value: +digitalFootprint?.high },
          { label: 'Medium', value: +digitalFootprint?.medium },
          { label: 'Low', value: +digitalFootprint?.low },
        ]}
      />
    </StyledChartContainer>
  );
}
