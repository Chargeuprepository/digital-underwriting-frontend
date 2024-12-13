import styled from 'styled-components';
import { RxCross1 } from 'react-icons/rx';
import ScoreChart from '../../VerificationResults/UI/ScoreChart';
import WhereYouStandTable from '../../VerificationResults/RiskScore/RiskUI/WhereYouStandTable';
import breakCamelCase from '../../../Utils/breakCamelCase';
import Spinner from '../../../UI/Spinner';

const StyledRiskModelWindow = styled.div`
  height: 80vh;
  width: 80vw;
  background-color: var(--color-gray-0);
  border-radius: 0.8rem;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.305);
  background: linear-gradient(
    45deg,
    var(--color-brand-original-blue-400),
    var(--color-brand-blue-800)
  );
  padding: 1rem;
`;
const BorderContainer = styled.div`
  padding: 1rem 1rem 1rem 3rem;
  height: 100%;
  border: 2px solid var(--color-gray-50);
  border-radius: 0.8rem;
  display: grid;
  grid-template-columns: 25% 1fr;
  gap: 2rem;
`;
const CrossContainer = styled.div`
  position: absolute;
  right: 3rem;
  top: 2rem;
  color: #a5a5a5;
  svg {
    cursor: pointer;
    transition: all 0.15s;
  }
  svg:hover {
    transform: scale(1.06);
    color: aliceblue;
  }
`;
const ScoreAndStand = styled.div`
  /* background-color: #c4e0e0; */
`;
const RiskHeading = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-gray-25);
  margin: 3.2rem 0 1.4rem 1.3rem;
  /* background-color: aliceblue; */
`;
const Parameters = styled.div`
  /* background-color: aqua; */
  padding: 4rem 3rem 4rem 3rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.6rem;
`;

const StyledRiskParam = styled.div`
  /* background-color: aliceblue; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;
const DataDisplay = styled.div`
  border: 1px solid var(--color-gray-500);
  padding: 1rem 1.6rem;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  transition: all 0.3s;
  cursor: pointer;
  height: 8rem;

  &:nth-child(1) {
    background: linear-gradient(
      to left,
      var(--color-brand-green-700),
      var(--color-brand-green-800)
    );
    border: 1px solid var(--color-gray-0);
  }
  &:hover {
    transform: scale(1.02);
  }
`;
const KeyValue = styled.div`
  text-transform: capitalize;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;

const data = {
  digital: {
    digitalFootprint: 'medium',
    affluenceScore: '36',
    digitalPaymentScore: '235',
    vpa: 'qwerty@ybl',
  },
  identity: {
    identityConfidence: 'low',
    phoneFootprint: 'medium',
    digitalAge: '4792',
    nameMatchScore: '70',
  },
  social: {
    socialFootprint: 'medium',
    socialMediaScore: '445',
    socialMediaCount: '6',
    eCommerceScore: '5',
  },
  telecom: {
    telecomRisk: 'medium',
    phoneReachable: 'true',
    billing: 'prepaid',
    portHistory: 'true',
  },
};

export default function RiskModelWindow({ setOpenRiskModelWindow, data }) {
  return (
    <StyledRiskModelWindow onClick={(e) => e.stopPropagation()}>
      {data ? (
        <BorderContainer>
          <CrossContainer onClick={() => setOpenRiskModelWindow(false)}>
            <RxCross1 />
          </CrossContainer>
          <ScoreAndStand>
            <RiskHeading>Chargeup Risk Score</RiskHeading>
            <ScoreChart
              param={+data?.riskScore}
              textColor={'var(--color-gray-50)'}
            ></ScoreChart>
            <WhereYouStandTable
              CurrentRiskScore={+data?.riskScore}
              whereIStand={data?.whereIStand}
              fontSize={'1.45rem'}
            ></WhereYouStandTable>
          </ScoreAndStand>
          <Parameters>
            <RiskParam data={data['digital']} />
            <RiskParam data={data['identity']} />
            <RiskParam data={data['social']} />
            <RiskParam data={data['telecom']} />
          </Parameters>
        </BorderContainer>
      ) : (
        <Spinner></Spinner>
      )}
    </StyledRiskModelWindow>
  );
}

function RiskParam({ data }) {
  return (
    <StyledRiskParam>
      {Object.entries(data).map(([key, value]) => (
        <DataDisplay key={key}>
          <KeyValue
            size={'1.2rem'}
            weight={'600'}
            color={'var(--color-gray-300)'}
          >
            {breakCamelCase(key)}
            {/* {key} */}
          </KeyValue>
          <KeyValue
            size={'1.3rem'}
            weight={'500'}
            color={'var(--color-gray-100)'}
          >
            {value}
          </KeyValue>
        </DataDisplay>
      ))}
    </StyledRiskParam>
  );
}
