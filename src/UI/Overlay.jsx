import styled from 'styled-components';
const Overlay = styled.div`
  position: fixed;
  top: ${(props) => props.top || 0};
  left: ${(props) => props.left || 0};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100vh'};
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Overlay;
