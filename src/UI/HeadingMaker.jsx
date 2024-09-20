import styled from 'styled-components';

const HeadingMaker = styled.div`
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fontweight};
  color: ${(props) => props.color};
  text-transform: ${(props) => props.texttransform};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  letter-spacing: ${(props) => props.letterspacing};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexdirection};
  gap: ${(props) => props.gap};
`;

export default HeadingMaker;
