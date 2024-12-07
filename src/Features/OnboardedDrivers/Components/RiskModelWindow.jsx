import styled from 'styled-components';
import { RxCross1 } from 'react-icons/rx';
import ScoreChart from '../../VerificationResults/UI/ScoreChart';
import WhereYouStandTable from '../../VerificationResults/RiskScore/RiskUI/WhereYouStandTable';

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
  margin: 3.8rem 0 1.4rem 1.3rem;
  /* background-color: aliceblue; */
`;
const Parameters = styled.div`
  /* background-color: aqua; */
  padding: 3rem 3rem 4rem 3rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
`;

const StyledRiskParam = styled.div`
  /* background-color: aliceblue; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;
const DataDisplay = styled.div`
  border: 1px solid var(--color-gray-500);
  padding: 1rem 2rem;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:nth-child(1) {
    background: linear-gradient(
      45deg,
      var(--color-brand-original-blue-400),
      var(--color-brand-blue-500)
    );
    border: 1px solid var(--color-gray-10);
  }
`;
const KeyValue = styled.div`
  text-transform: capitalize;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;

const data = {
  telecom: {
    name: 'gaurav joshi gj',
    game: 'gaurav joshi gj',
    tame: 'gaurav joshi gj',
    came: 'gaurav joshi gj',
  },
  efflugence: {
    name: 'gaurav joshi gj',
    game: 'gaurav joshi gj',
    tame: 'gaurav joshi gj',
    came: 'gaurav joshi gj',
  },
  social: {
    name: 'gaurav joshi gj',
    game: 'gaurav joshi gj',
    tame: 'gaurav joshi gj',
    came: 'gaurav joshi gj',
  },
  identity: {
    name: 'gaurav joshi gj',
    game: 'gaurav joshi gj',
    tame: 'gaurav joshi gj',
    came: 'gaurav joshi gj',
  },
  digital: {
    name: 'gaurav joshi gj',
    game: 'gaurav joshi gj',
    tame: 'gaurav joshi gj',
    came: 'gaurav joshi gj',
  },
};

export default function RiskModelWindow({ setOpenRiskModelWindow }) {
  return (
    <StyledRiskModelWindow onClick={(e) => e.stopPropagation()}>
      <BorderContainer>
        <CrossContainer onClick={() => setOpenRiskModelWindow(false)}>
          <RxCross1 />
        </CrossContainer>
        <ScoreAndStand>
          <RiskHeading>Charge Up Risk Score</RiskHeading>
          <ScoreChart
            param={500}
            textColor={'var(--color-gray-50)'}
          ></ScoreChart>
          <WhereYouStandTable
            CurrentRiskScore={500}
            fontSize={'1.45rem'}
          ></WhereYouStandTable>
        </ScoreAndStand>
        <Parameters>
          <RiskParam data={data['telecom']} />
          <RiskParam data={data['efflugence']} />
          <RiskParam data={data['social']} />
          <RiskParam data={data['identity']} />
          <RiskParam data={data['digital']} />
        </Parameters>
      </BorderContainer>
    </StyledRiskModelWindow>
  );
}

function RiskParam({ data }) {
  return (
    <StyledRiskParam>
      {Object.entries(data).map(([key, value]) => (
        <DataDisplay>
          <KeyValue
            size={'1.4rem'}
            weight={'600'}
            color={'var(--color-gray-100)'}
          >
            {key}
          </KeyValue>
          <KeyValue
            size={'1.3rem'}
            weight={'500'}
            color={'var(--color-gray-300)'}
          >
            {value}
          </KeyValue>
        </DataDisplay>
      ))}
    </StyledRiskParam>
  );
}
