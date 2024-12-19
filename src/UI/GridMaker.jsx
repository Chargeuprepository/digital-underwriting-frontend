import styled from 'styled-components';

const GridMaker = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.column};
  grid-template-rows: ${(props) => props.row};
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  width: ${(props) => props.width};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundcolor};
  box-shadow: ${(props) =>
    props.boxshadow === 'true' && '2px 4px 8px 10px rgba(0, 0, 0, 0.3)'};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.bradius};
  transition: all 0.3s;
`;

export default GridMaker;
