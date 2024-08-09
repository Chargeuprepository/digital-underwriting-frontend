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

      <Table>
        <RowValue background="var(--color-gray-25)">
          <Value>
            {
              data.highCredit[
                data.type === 'creditrisk' ? 'lowRisk' : 'highKarma'
              ]
            }
            %
          </Value>
          <Value>
            {
              data.mediumCredit[
                data.type === 'creditrisk' ? 'lowRisk' : 'highKarma'
              ]
            }
            %
          </Value>
          <Value>
            {
              data.lowCredit[
                data.type === 'creditrisk' ? 'lowRisk' : 'highKarma'
              ]
            }
            %
          </Value>
        </RowValue>
        <RowValue background="var(--color-gray-50)">
          <Value>
            {
              data.highCredit[
                data.type === 'creditrisk' ? 'mediumRisk' : 'mediumKarma'
              ]
            }
            %
          </Value>
          <Value>
            {
              data.mediumCredit[
                data.type === 'creditrisk' ? 'mediumRisk' : 'mediumKarma'
              ]
            }
            %
          </Value>
          <Value>
            {
              data.lowCredit[
                data.type === 'creditrisk' ? 'mediumRisk' : 'mediumKarma'
              ]
            }
            %
          </Value>
        </RowValue>
        <RowValue background="var(--color-gray-25)">
          <Value>
            {
              data.highCredit[
                data.type === 'creditrisk' ? 'highRisk' : 'lowKarma'
              ]
            }
            %
          </Value>
          <Value>
            {
              data.mediumCredit[
                data.type === 'creditrisk' ? 'highRisk' : 'lowKarma'
              ]
            }
            %
          </Value>
          <Value>
            {
              data.lowCredit[
                data.type === 'creditrisk' ? 'highRisk' : 'lowKarma'
              ]
            }
            %
          </Value>
        </RowValue>
      </Table>
    </StyledMain>
  );
}
