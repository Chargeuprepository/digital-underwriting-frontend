import BarChart from '../../../../UI/Charts/BarChart';
import { StyledChartContainer } from '../../BIUI/StyledChartContainers';

export default function BarHoriRow2({ vehicleFinanced, length }) {
  return (
    <StyledChartContainer padding={'1.5rem 0 0 2rem'} width={'45rem'}>
      <BarChart
        heading="Vehicle Finance"
        direction="horizontal"
        // format="%"
        height="90%"
        width="90%"
        // total={+vehicleFinanced?.yes + +vehicleFinanced?.no}
        colors={['#1E90FF', '#87CEFA']}
        data={[
          { label: 'Yes', value: +vehicleFinanced?.yes },
          { label: 'No', value: +vehicleFinanced?.no },
        ]}
      />
    </StyledChartContainer>
  );
}
