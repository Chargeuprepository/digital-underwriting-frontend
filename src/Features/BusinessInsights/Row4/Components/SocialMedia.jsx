import styled from 'styled-components';
import { StyledChartContainer } from '../../Charts/StyledChartContainers';
import Heading from '../../Charts/Heading';

const ParentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
`;
const MediaContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 2rem;
  border-radius: 0.6rem;
  background-color: var(--color-brand-blue-50);
  transition: all 0.3s;
  &:hover {
    scale: 1.1;
  }
`;
const Value = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-gray-700);
`;
const Icon = styled.img`
  height: 4rem;
  width: 4rem;
`;

const obj = [
  { label: 'whatsapp', value: 80 },
  { label: 'paytm', value: 60 },
  { label: 'instagram', value: 90 },
  { label: 'flipkart', value: 80 },
  { label: 'amazon', value: 90 },
  { label: 'indiamart', value: 40 },
];

const sorted = obj.sort((a, b) => b.value - a.value);

export default function SocialMedia() {
  return (
    <StyledChartContainer padding={'2rem 4.4rem 0.8rem 4.4rem'} width={'45rem'}>
      <Heading>Social Media Platform</Heading>
      <ParentContainer>
        {sorted.map((val) => (
          <MediaContainer key={val.label}>
            <Icon src={`/img/${val.label}.svg`} />
            <Value>{val.value}</Value>
          </MediaContainer>
        ))}
      </ParentContainer>
    </StyledChartContainer>
  );
}

// Pallete 2
// indiamart: #2e3192
// paytm: #00baf2
// whatsapp: #25D366
// instagram: #d62976
// flipkart: #1F74BA
// amazon: #f6bc66

{
  /* <BarChart
  heading="Social Media Platform"
  direction="vertical"
  format="%"
  height="100%"
  width="100%"
  total={411}
  labelSize={'10px'}
  colors={['#2e3192', '#00baf2', '#25D366', '#d62976', '#1F74BA', '#f6bc66']}
  data={[
    { label: 'IndiaMart', value: 40 },
    { label: 'Paytm', value: 60 },
    { label: 'Whatsapp', value: 80 },
    { label: 'Instagram', value: 90 },
    { label: 'Flipkart', value: 80 },
    { label: 'Amazon', value: 90 },
  ]}
/>; */
}
