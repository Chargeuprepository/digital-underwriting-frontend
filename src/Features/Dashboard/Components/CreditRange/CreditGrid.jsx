import styled from 'styled-components';

const StyledMain = styled.div`
  grid-column: 2 / -1;
  grid-row: 2 / -1;
  padding-top: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* gap: 3rem; */
  /* background-color: #8b9eaf; */
`;
const Header = styled.div`
  display: flex;
  justify-content: space-around;
`;
const ColumnHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ColumnName = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  /* color: var(--color-gray-700); */
  /* color: var(--color-gray-50); */
  color: ${(props) => props.color};
`;
const ColumnRange = styled.div`
  font-size: 1rem;
  font-weight: 500;
  /* color: var(--color-gray-500); */
  color: var(--color-gray-100);
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 12rem;
`;
const RowValue = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => props.background};
  border-radius: 0.6rem;
  padding: 0.2rem;
  min-height: 2.5rem;
`;
const Value = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-gray-700);
`;

export default function CreditGrid({ data }) {
  return (
    <StyledMain>
      <Header>
        <ColumnHeader>
          <ColumnName color="#5ef522">High</ColumnName>
          <ColumnRange>Credit(&gt;650)</ColumnRange>
        </ColumnHeader>
        <ColumnHeader>
          <ColumnName color="#f9f519">Medium</ColumnName>
          <ColumnRange>Credit(400-650)</ColumnRange>
        </ColumnHeader>
        <ColumnHeader>
          <ColumnName color="#fc3c3c">Low</ColumnName>
          <ColumnRange>Credit(&lt;400)</ColumnRange>
        </ColumnHeader>
      </Header>

      {data.type === 'creditRisk' && (
        <Table>
          <RowValue background="var(--color-gray-50)">
            <Value>{data.CreditHighRiskLow}</Value>
            <Value>{data.CreditMediumRiskLow}</Value>
            <Value>{data.CreditLowRiskLow}</Value>
          </RowValue>
          <RowValue background="var(--color-gray-50)">
            <Value>{data.CreditHighRiskMedium}</Value>
            <Value>{data.CreditMediumRiskMedium}</Value>
            <Value>{data.CreditLowRiskMedium}</Value>
          </RowValue>
          <RowValue background="var(--color-gray-50)">
            <Value>{data.CreditHighRiskHigh}</Value>
            <Value>{data.CreditMediumRiskHigh}</Value>
            <Value>{data.CreditLowRiskHigh}</Value>
          </RowValue>
        </Table>
      )}

      {data.type === 'creditKarma' && (
        <Table>
          <RowValue background="var(--color-gray-50)">
            <Value>{data.CreditHighKarmaHigh}</Value>
            <Value>{data.CreditMediumKarmaHigh}</Value>
            <Value>{data.CreditLowKarmaHigh}</Value>
          </RowValue>
          <RowValue background="var(--color-gray-50)">
            <Value>{data.CreditHighKarmaMedium}</Value>
            <Value>{data.CreditMediumKarmaMedium}</Value>
            <Value>{data.CreditLowKarmaMedium}</Value>
          </RowValue>
          <RowValue background="var(--color-gray-50)">
            <Value>{data.CreditHighKarmaLow}</Value>
            <Value>{data.CreditMediumKarmaLow}</Value>
            <Value>{data.CreditLowKarmaLow}</Value>
          </RowValue>
        </Table>
      )}
    </StyledMain>
  );
}
