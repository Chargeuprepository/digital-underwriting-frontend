import styled from 'styled-components';
import { StyledChartContainer } from '../../BIUI/StyledChartContainers';
import Heading from '../../../../UI/Charts/Heading';

const ParentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
  height: 15rem;
`;
const MediaContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 2rem;
  /* height: 6rem;
  width: 10rem; */
  border-radius: 0.6rem;
  background-color: var(--color-brand-blue-50);
  transition: all 0.3s;
  &:hover {
    scale: 1.1;
  }
`;
const Value = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-gray-700);
`;
const Icon = styled.img`
  height: 3.8rem;
  width: 3.8rem;
`;

const obj = [
  { label: 'whatsapp', value: 80 },
  { label: 'paytm', value: 60 },
  { label: 'instagram', value: 90 },
  { label: 'flipkart', value: 80 },
  { label: 'amazon', value: 90 },
  { label: 'waBusiness', value: 40 },
];

export default function SocialMedia({ socialMediaPlatform }) {
  const obj =
    socialMediaPlatform &&
    Object.entries(socialMediaPlatform).map(([label, value]) => ({
      label,
      value: Number(value),
    }));

  const sorted = socialMediaPlatform && obj.sort((a, b) => b.value - a.value);

  return (
    <StyledChartContainer padding={'2rem 4.4rem 0.8rem 4.4rem'} width={'45rem'}>
      <Heading>Social Media Platform</Heading>
      <ParentContainer>
        {sorted?.map((val) => (
          <MediaContainer key={val.label}>
            <Icon src={`/img/socialMediaIcons/${val?.label}.svg`} />
            <Value>{val?.value}%</Value>
          </MediaContainer>
        ))}
      </ParentContainer>
    </StyledChartContainer>
  );
}

// export default function SocialMedia({ socialMediaPlatform }) {
//   const sorted = socialMediaPlatform?.sort((a, b) => b.value - a.value);
//   return (
//     <StyledChartContainer padding={'2rem 4.4rem 0.8rem 4.4rem'} width={'45rem'}>
//       <Heading>Social Media Platform</Heading>
//       <ParentContainer>
//         {sorted.map((val) => (
//           <MediaContainer key={val.label}>
//             <Icon src={`/img/socialMediaIcons/${val.label}.svg`} />
//             <Value>{val.value}</Value>
//           </MediaContainer>
//         ))}
//       </ParentContainer>
//     </StyledChartContainer>
//   );
// }
