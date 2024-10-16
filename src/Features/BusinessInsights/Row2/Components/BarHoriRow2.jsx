import BarChart from '../../../../UI/Charts/BarChart';
import { StyledChartContainer } from '../../BIUI/StyledChartContainers';

export default function BarHoriRow2({}) {
  return (
    <StyledChartContainer padding={'1.5rem 0 0 2rem'} width={'45rem'}>
      <BarChart
        heading="Vehicle Finance"
        direction="horizontal"
        format="%"
        height="90%"
        width="90%"
        total={157 + 158}
        colors={['#1E90FF', '#87CEFA']}
        data={[
          { label: 'Yes', value: 157 },
          { label: 'No', value: 158 },
        ]}
      />
    </StyledChartContainer>
  );
}
