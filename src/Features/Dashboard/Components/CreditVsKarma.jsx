import styled from 'styled-components';
import CreditRange from './CreditRange/CreditRange';

const StyledCreditKarma = styled.div`
  grid-column: 5 / -1;
`;

const data = {
  heading: 'Credit VS Karma',
  type: 'creditKarma',
  // highCredit: {
  //   highKarma: 43,
  //   mediumKarma: 13,
  //   lowKarma: 7,
  // },
  // mediumCredit: {
  //   highKarma: 17,
  //   mediumKarma: 9,
  //   lowKarma: 7,
  // },
  // lowCredit: {
  //   highKarma: 2,
  //   mediumKarma: 2,
  //   lowKarma: 0,
  // },
};

export default function CreditVsKarma({ creditVsKarma }) {
  return (
    <StyledCreditKarma>
      <CreditRange data={{ ...data, ...creditVsKarma }} />
    </StyledCreditKarma>
  );
}
