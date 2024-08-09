import styled from 'styled-components';

const RowLayoutBusiInsights = styled.div`
  grid-row: ${(props) => props.row};
  border-radius: 1rem;
  /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15); */
  padding: 1rem;
  transition: transform 0.6s ease;
  /* background-color: var(--color-gray-1); */
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;

  &:hover {
    /* transform: scale(1.04); */
  }
`;

export default RowLayoutBusiInsights;
