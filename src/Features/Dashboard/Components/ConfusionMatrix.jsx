import { useState } from 'react';
import styled from 'styled-components';

const ConfusionMatrixContainer = styled.div`
  grid-column: 3 / 5;
  grid-row: 2;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 2rem 2rem 1.5rem 1rem;
  transition: transform 0.6s ease;

  background: linear-gradient(
    to left,
    var(--color-gray-0),
    var(--color-gray-50)
  );

  &:hover {
    transform: scale(1.04);
  }
`;
const MainHeading = styled.div`
  width: 100%;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-gray-700);
  text-transform: uppercase;
  letter-spacing: 0.6px;
  padding-left: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
const ColumnHeader = styled.div`
  padding: 2rem 1rem 1rem 10rem;
  width: 100%;
  display: flex;
  gap: 2rem;
`;
const Heading = styled.div`
  font-size: 1rem;
  color: var(--color-gray-500);
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const RowMatrixContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;
const RowHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-top: 2rem;
`;
const Matrix = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.8rem;
`;
const Value = styled.div`
  height: 7rem;
  width: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  color: var(--color-gray-700);
  font-weight: 600;
  border-radius: 0.4rem;
`;

export default function ConfusionMatrix() {
  const [colors, setColors] = useState([
    '#F8BBD0',
    '#F4B942',
    '#B9E7A0',
    '#A0D6F2',
  ]);

  return (
    <ConfusionMatrixContainer>
      <MainHeading>
        <div>Prediction Accuracy </div>
        <span style={{ fontSize: '1.1rem', color: 'var(--color-gray-500)' }}>
          <span style={{ fontSize: '0.9rem' }}>(Accuracy 87%)</span>
        </span>
      </MainHeading>
      <ColumnHeader>
        <Heading>
          <div
            style={{
              fontWeight: '600',
              color: 'var(--color-gray-600)',
              fontSize: '1.2rem',
            }}
          >
            Predicted:
          </div>
          On Time Payment
        </Heading>
        <Heading>
          <div
            style={{
              fontWeight: '600',
              color: 'var(--color-gray-600)',
              fontSize: '1.2rem',
            }}
          >
            Predicted:
          </div>
          Delayed
        </Heading>
      </ColumnHeader>
      <RowMatrixContainer>
        <RowHeader>
          <Heading>
            <div
              style={{
                fontWeight: '600',
                color: 'var(--color-gray-600)',
                fontSize: '1.2rem',
              }}
            >
              Actual:
            </div>
            On Time Payment
          </Heading>
          <Heading>
            <div
              style={{
                fontWeight: '600',
                color: 'var(--color-gray-600)',
                fontSize: '1.2rem',
              }}
            >
              Actual:
            </div>
            Delayed
          </Heading>
        </RowHeader>
        <Matrix>
          <Value backgroundColor={colors[0]}>89</Value>
          <Value backgroundColor={colors[1]}>16</Value>
          <Value backgroundColor={colors[2]}>20</Value>
          <Value backgroundColor={colors[3]}>91</Value>
        </Matrix>
      </RowMatrixContainer>
    </ConfusionMatrixContainer>
  );
}
