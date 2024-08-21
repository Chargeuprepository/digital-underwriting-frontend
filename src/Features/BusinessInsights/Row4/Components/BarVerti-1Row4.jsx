import BarChart from '../../Charts/BarChart';
import { StyledChartContainer } from '../../Charts/StyledChartContainers';

export default function BarVerti1Row4() {
  return (
    <StyledChartContainer padding={'2rem'} width={'30rem'}>
      <BarChart
        heading="Digital FootPrint"
        direction="vertical"
        format="%"
        height="100%"
        width="85%"
        total={461}
        labelSize={'12px'}
        data={[
          { label: 'Medium', value: 206 },
          { label: 'High', value: 255 },
        ]}
      />
    </StyledChartContainer>
  );
}

// title: 'Bar Chart',
//   direction: 'vertical',
//   format: '%',
//   height: '100%',
//   width: '80%',
