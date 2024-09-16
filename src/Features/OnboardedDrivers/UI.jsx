import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 7rem 1fr repeat(6, 15rem);

  :last-child {
    border-right: none;
  }
  :last-child {
    /* border-bottom: none; */
  }
`;
export const GridValue = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-gray-600);
  height: 4rem;
  text-transform: capitalize;
  border-right: 1px solid var(--color-gray-50);
  border-bottom: 1px solid var(--color-gray-50);
  overflow-x: ${(props) => props.horiScroll === 'true' && 'auto'};
  white-space: nowrap;
  display: inline-block;
  text-align: center;
  align-content: center;
  padding: 0rem 0.6rem;

  &::-webkit-scrollbar {
    display: none;
  }

  :last-child > div {
    /* border-bottom: none; */
  }
`;
