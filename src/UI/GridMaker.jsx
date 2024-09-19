import styled from 'styled-components';

const GridMaker = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.column};
  grid-template-rows: ${(props) => props.row};
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundcolor};
`;

export default GridMaker;
