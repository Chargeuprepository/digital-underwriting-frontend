import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 7rem 1fr repeat(5, 16rem);
  background-color: ${(props) => props.bgcolor};
`;
export const GridValue = styled.div`
  font-size: 1.55rem;
  font-weight: 500;
  color: ${(props) => props.color};
  min-height: 4.5rem;
  text-transform: capitalize;
  overflow-x: ${(props) => props.horiScroll === 'true' && 'auto'};
  white-space: nowrap;
  display: inline-block;
  text-align: center;
  align-content: center;
  padding: 0rem 0.6rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;
