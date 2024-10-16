import styled from 'styled-components';
import { FaRegThumbsUp } from 'react-icons/fa6';
import { SlCalender } from 'react-icons/sl';
import { HiMiniWrenchScrewdriver } from 'react-icons/hi2';
import { GiTrophyCup } from 'react-icons/gi';
import { RiPinDistanceFill } from 'react-icons/ri';

const StyledDriverSummary = styled.div`
  grid-row: 2;
  /* background-color: #c8ffd8; */
  height: 22rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  text-transform: capitalize;
`;
const SummaryRestContainer = styled.div`
  display: flex;
  gap: 1.4rem;
`;
const SummarySingle = styled.div`
  width: 11.3rem;
  height: 14rem;
  background-color: ${(props) => props.backgroundcolor};
  padding: 1.4rem 2rem;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;
const IconParent = styled.div`
  background-color: aliceblue;
  border-radius: 50%;
  width: 5.4rem;
  height: 5.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundcolor};

  svg {
    color: var(--color-gray-1);
  }
`;
const LabelName = styled.div``;
const Label = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-gray-700);
`;
const Value = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-gray-600);
`;

export default function DriverSummary({ nps, service, runKm, dpd, karma }) {
  const parameters = [
    {
      name: 'DPD',
      icon: SlCalender,
      value: dpd,
      iconBack: '#ff526c',
      back: '#ffdee3',
    },
    {
      name: 'service',
      icon: HiMiniWrenchScrewdriver,
      value: service,
      iconBack: '#2dffff',
      back: '#d4ffff',
    },
    {
      name: 'NPS',
      icon: FaRegThumbsUp,
      value: nps,
      iconBack: '#ffb62d',
      back: '#ffe1a9',
    },
    {
      name: 'run kMs',
      icon: RiPinDistanceFill,
      value: runKm,
      iconBack: '#28ff28',
      back: '#b8ffb8',
    },
  ];
  return (
    <StyledDriverSummary>
      <SummarySingle backgroundcolor={'#fcc1ac'}>
        <IconParent backgroundcolor={'#ff7a45'}>
          <GiTrophyCup size={26} />
        </IconParent>
        <LabelName>
          <Label>karma</Label>
          <Value>{karma}</Value>
        </LabelName>
      </SummarySingle>
      <SummaryRestContainer>
        {parameters.map((param, i) => {
          const IconComponent = param.icon;
          return (
            <SummarySingle key={i} backgroundcolor={param.back}>
              <IconParent backgroundcolor={param.iconBack}>
                <IconComponent size={24} />
              </IconParent>
              <LabelName>
                <Label>{param.name}</Label>
                <Value>{param.value}</Value>
              </LabelName>
            </SummarySingle>
          );
        })}
      </SummaryRestContainer>
    </StyledDriverSummary>
  );
}
