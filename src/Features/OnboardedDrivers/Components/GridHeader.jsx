import styled from 'styled-components';
import { GridValue, StyledGrid } from '../UI';

const StyledGridHeader = styled.div``;

const headerData = [
  'sNo',
  'name',
  'karma',
  'avg DPD',
  'service',
  'run KMs',
  'earnings',
  'NPS',
];

export default function GridHeader() {
  return (
    <StyledGridHeader>
      <StyledGrid>
        {headerData.map((val, i) => {
          return <GridValue key={i}>{val}</GridValue>;
        })}
      </StyledGrid>{' '}
    </StyledGridHeader>
  );
}
