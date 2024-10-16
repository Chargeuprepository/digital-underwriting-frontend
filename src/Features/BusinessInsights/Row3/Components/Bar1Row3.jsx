import BarChart from '../../../../UI/Charts/BarChart';
import { StyledChartContainer } from '../../BIUI/StyledChartContainers';

export default function Bar1Row3() {
  return (
    <StyledChartContainer padding={'2rem 3rem 2rem 0.2rem'} width={'30rem'}>
      <BarChart
        heading="Identity Confidence Score"
        direction="horizontal"
        format=""
        height="100%"
        width="100%"
        labelSize={'12px'}
        colors={['#962fbf', '#d62976', '#ff54a1']}
        data={[
          { label: 'High', value: 364 },
          { label: 'Medium', value: 332 },
          { label: 'Low', value: 240 },
        ]}
      />
    </StyledChartContainer>
  );
}
