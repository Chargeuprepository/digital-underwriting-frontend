import styled from 'styled-components';
import CreditGrid from './CreditGrid';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) =>
    props.type === 'creditrisk'
      ? 'linear-gradient(18deg,var(--color-brand-blue-300),var(--color-brand-original-blue-400))'
      : 'linear-gradient(to left,var(--color-brand-original-green-400),var(--color-brand-green-700))'};
  /* background: linear-gradient(
    18deg,
    var(--color-brand-blue-300),
    var(--color-brand-original-blue-400)
  ); */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 2rem 6rem 2rem 2rem;
  border-radius: 1rem;
  transition: transform 0.6s ease;
  color: var(--color-gray-25);

  &:hover {
    transform: scale(1.04);
  }
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr;
  grid-template-rows: 1.2fr 2fr 6fr;
  height: 100%;
`;
const Heading = styled.div`
  grid-column: 1 / -1;
  font-size: 1.4rem;
  font-weight: 700;
  /* color: var(--color-gray-700); */
  color: var(--color-gray-25);
  text-transform: uppercase;
  letter-spacing: 0.9px;
`;
const Aside = styled.div`
  grid-column: 1;
  grid-row: 3 / -1;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  justify-content: space-around;
`;
const RowHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.background};
`;
const RowName = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  /* color: var(--color-gray-700); */
  /* color: var(--color-gray-25); */
  color: ${(props) => props.color};
`;
const RowRange = styled.div`
  font-size: 1rem;
  font-weight: 500;
  /* color: var(--color-gray-500); */
  color: var(--color-gray-100);
`;

export default function CreditRange({ data }) {
  return (
    <StyledContainer type={data.type}>
      <GridContainer>
        <Heading>{data.heading}</Heading>
        {data.type === 'creditrisk' ? (
          <Aside>
            <RowHeader>
              <RowName color="#5ef522">Low</RowName>
              <RowRange>Risk(&lt;450)</RowRange>
            </RowHeader>
            <RowHeader>
              <RowName color="#f9f519">Medium</RowName>
              <RowRange>Risk(450-500)</RowRange>
            </RowHeader>
            <RowHeader>
              <RowName color="#fc3c3c">High</RowName>
              <RowRange>Risk(&gt;550)</RowRange>
            </RowHeader>
          </Aside>
        ) : (
          <Aside>
            <RowHeader>
              <RowName color="#5ef522">High</RowName>
              <RowRange>Karma(&gt;700)</RowRange>
            </RowHeader>
            <RowHeader>
              <RowName color="#f9f519">Medium</RowName>
              <RowRange>Karma(500-700)</RowRange>
            </RowHeader>
            <RowHeader>
              <RowName color="#fc3c3c">Low</RowName>
              <RowRange>Karma(&lt;500)</RowRange>
            </RowHeader>
          </Aside>
        )}
        <CreditGrid data={data} />
      </GridContainer>
    </StyledContainer>
  );
}
