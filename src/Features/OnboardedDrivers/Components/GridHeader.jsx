import styled from 'styled-components';
import { GridValue, StyledGrid } from '../UI';

const StyledGridHeader = styled.div``;

const headerData = [
  'id',
  'name',
  'credit',
  'risk',
  'karma',
  'avg DPD',
  'service',
  'run KMs',
  'NPS',
];

export default function GridHeader() {
  return (
    <StyledGridHeader>
      <StyledGrid
        bgcolor={'var(--color-brand-original-blue-400)'}
        pointer={'false'}
      >
        {headerData.map((val, i) => {
          return (
            <GridValue color="var(--color-gray-50)" key={i}>
              {val}
            </GridValue>
          );
        })}
      </StyledGrid>{' '}
    </StyledGridHeader>
  );
}
