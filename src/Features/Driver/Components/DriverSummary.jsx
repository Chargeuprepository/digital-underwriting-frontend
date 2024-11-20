import styled from 'styled-components';
import { FaRegThumbsUp } from 'react-icons/fa6';
import { SlCalender } from 'react-icons/sl';
import { HiMiniWrenchScrewdriver } from 'react-icons/hi2';
import { GiTrophyCup } from 'react-icons/gi';
import { RiPinDistanceFill } from 'react-icons/ri';
import { MdOutlineRememberMe } from 'react-icons/md';
import { TbBatteryOff } from 'react-icons/tb';
import RiskCibilSocialRadial from './Graphs/RiskCibilSocialRadial';
import PaymentModeRadial from './Graphs/PaymentModeRadial';

const StyledDriverSummary = styled.div`
  grid-row: 2;
  height: 26rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  text-transform: capitalize;
  margin-top: 8rem;
`;
const SummaryRestContainer = styled.div`
  display: flex;
  gap: 1.4rem;
`;
const SummarySingle = styled.div`
  width: 10.8rem;
  height: 14rem;
  border: 1px solid var(--color-gray-500);
  padding: 1.4rem 1.8rem;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.318);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;
const IconParent = styled.div`
  background-color: aliceblue;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundcolor};

  svg {
    color: var(--color-gray-0);
  }
`;
const LabelName = styled.div``;
const Label = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-gray-100);
`;
const Value = styled.div`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--color-gray-200);
`;
const RadialContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default function DriverSummary({
  nps,
  service,
  runKm,
  avgDpd,
  karma,
  lossDays,
  aon,
  scores,
}) {
  const parameters = [
    {
      name: 'karma',
      icon: GiTrophyCup,
      value: karma,
      iconBack: '#e7602b',
    },
    {
      name: 'DPD',
      icon: SlCalender,
      value: avgDpd,
      iconBack: '#e62743',
    },
    {
      name: 'service',
      icon: HiMiniWrenchScrewdriver,
      value: service,
      iconBack: '#00bdbd',
    },
    {
      name: 'NPS',
      icon: FaRegThumbsUp,
      value: nps,
      iconBack: '#d57807',
    },
    {
      name: 'run kMs',
      icon: RiPinDistanceFill,
      value: runKm,
      iconBack: '#00c200',
    },
    {
      name: 'loss days',
      icon: MdOutlineRememberMe,
      value: lossDays,
      iconBack: '#0f7fe1',
    },
    {
      name: 'AON',
      icon: TbBatteryOff,
      value: aon,
      iconBack: '#009356',
    },
  ];
  return (
    <StyledDriverSummary>
      <SummaryRestContainer>
        {parameters.map((param, i) => {
          const IconComponent = param.icon;
          return (
            <SummarySingle key={i} backgroundcolor={param.back}>
              <IconParent backgroundcolor={param.iconBack}>
                <IconComponent size={20} />
              </IconParent>
              <LabelName>
                <Label>{param.name}</Label>
                <Value>{param.value ? param.value : '-1'}</Value>
              </LabelName>
            </SummarySingle>
          );
        })}
      </SummaryRestContainer>
      <RadialContainer>
        <RiskCibilSocialRadial scores={scores} />
        <PaymentModeRadial />
      </RadialContainer>
    </StyledDriverSummary>
  );
}
