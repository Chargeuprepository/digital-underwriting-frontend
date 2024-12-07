import styled from 'styled-components';
import { MdOutlineVideogameAssetOff } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';

import { FaRegUser } from 'react-icons/fa';

const InsightsBar = styled.div`
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 2rem 2rem 0rem;
  border-radius: 1rem;
`;
const Heading = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-gray-700);
  text-transform: uppercase;
  letter-spacing: 0.1px;
`;
const InsightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Insight = styled.div`
  background-color: ${(props) => props.bgcolor};
  display: flex;
  gap: 1.6rem;
  padding: 0.8rem 0.4rem 0.8rem 1rem;
  border-radius: 0.8rem;
  transition: transform 0.6s ease;

  &:hover {
    transform: scale(1.04);
  }
`;
const IconContainer = styled.div`
  background-color: ${(props) => props.bgcolor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  color: var(--color-gray-0);
`;
const InsightValue = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-gray-800);
`;
const InsightName = styled.p`
  font-size: 1.1rem;
  color: var(--color-gray-600);
  font-weight: 500;
`;

export default function BusinessStats({ drivers, emiOnTime }) {
  return (
    <InsightsBar>
      <Heading>Driver&rsquo;s overview</Heading>
      <InsightContainer>
        <Insight bgcolor="#ffcdcf">
          <IconContainer bgcolor="#ff595e">
            <FaRegUser style={{ height: '50%', width: '50%' }} />
          </IconContainer>
          <div>
            <InsightValue>{drivers}</InsightValue>
            <InsightName>Drivers</InsightName>
          </div>
        </Insight>

        <Insight bgcolor="#ffeab0">
          <IconContainer bgcolor="#ffca3a">
            <SlCalender style={{ height: '50%', width: '50%' }} />
          </IconContainer>
          <div>
            <InsightValue>{emiOnTime}</InsightValue>
            <InsightName>EMI On Time</InsightName>
          </div>
        </Insight>

        <Insight bgcolor="#d0e9a8">
          <IconContainer bgcolor="#8ac926">
            <MdOutlineVideogameAssetOff
              style={{ height: '50%', width: '50%' }}
            />
          </IconContainer>
          <div>
            <InsightValue>1.13%</InsightValue>
            <InsightName>Asset loss</InsightName>
          </div>
        </Insight>
      </InsightContainer>
    </InsightsBar>
  );
}
