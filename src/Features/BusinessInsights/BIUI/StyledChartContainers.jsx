import styled from 'styled-components';

export const StyledChartContainer = styled.div`
  height: 98%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  background: radial-gradient(
    circle,
    var(--color-gray-25),
    var(--color-gray-0)
  );
`;
