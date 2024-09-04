import styled from 'styled-components';

const StyledGridTab = styled.div`
  grid-row: ${(props) => props.gridrow};
  grid-column: ${(props) => props.gridcolumn};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundcolor};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 0.6rem;
`;

export default StyledGridTab;
