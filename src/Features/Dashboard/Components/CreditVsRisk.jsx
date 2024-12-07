import styled from 'styled-components';
import CreditRange from './CreditRange/CreditRange';

const StyledCreditRisk = styled.div`
  grid-column: 2 / 5;
`;

const data = {
  heading: 'Credit vs risk',
  type: 'creditRisk',
  // highCredit: {
  //   lowRisk: 19,
  //   mediumRisk: 3,
  //   highRisk: 39,
  // },
  // mediumCredit: {
  //   lowRisk: 12,
  //   mediumRisk: 2,
  //   highRisk: 18,
  // },
  // lowCredit: {
  //   lowRisk: 1,
  //   mediumRisk: 1,
  //   highRisk: 3,
  // },
};

export default function CreditVsRisk({ creditVsRisk }) {
  return (
    <StyledCreditRisk>
      <CreditRange data={{ ...creditVsRisk, ...data }} />
    </StyledCreditRisk>
  );
}
