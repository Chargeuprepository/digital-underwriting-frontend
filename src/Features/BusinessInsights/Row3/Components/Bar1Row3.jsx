import BarChart from '../../../../UI/Charts/BarChart';
import { StyledChartContainer } from '../../BIUI/StyledChartContainers';

export default function Bar1Row3({ identityConfidence }) {
  return (
    <StyledChartContainer padding={'2rem 3rem 2rem 0.2rem'} width={'30rem'}>
      <BarChart
        heading="Identity Confidence Score"
        direction="horizontal"
        format=""
        height="100%"
        width="100%"
        labelSize={'12px'}
        colors={['#962fbf', '#d62976', '#f592be']}
        data={[
          { label: 'High', value: +identityConfidence?.high },
          { label: 'Medium', value: +identityConfidence?.medium },
          { label: 'Low', value: +identityConfidence?.low },
        ]}
      />
    </StyledChartContainer>
  );
}
