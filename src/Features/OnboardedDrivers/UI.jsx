import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 8rem 28rem repeat(2, 14rem) 14rem repeat(4, 1fr);
  background-color: ${(props) => props.bgcolor};
  transition: all 0.3s;
  &:hover {
    cursor: ${(props) => props.pointer === 'true' && 'pointer'};
  }
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
  transition: all 0.5s;

  /* padding: 0rem 0.6rem; */

  &::-webkit-scrollbar {
    display: none;
  }
  &:hover {
    cursor: ${(props) => props.pointer === 'true' && 'pointer'};
    transform: ${(props) => props.pointer === 'true' && 'scale(1.13)'};
  }
`;

export const ColorDiv = styled.div`
  height: 45%;
  width: 70%;
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 10px;
  color: var(--color-gray-800);
  text-transform: uppercase;
`;

export function valueColorHandler(type, value) {
  const numValue = Number(value);

  // Handle cases where the value is an empty string or invalid
  if (!value || isNaN(numValue)) {
    return '#cccccc'; // Default color for empty or invalid values (e.g., gray)
  }

  if (type === 'credit') {
    if (numValue > 650) {
      return '#15ff0087'; // High
    } else if (numValue <= 650 && numValue >= 450) {
      return '#ffee0083'; // Medium
    } else if (numValue >= 1) {
      return '#ff000084'; // Low
    } else {
      return '#cccccc';
    }
  } else if (type === 'risk') {
    if (numValue > 650) {
      return '#ff000084'; // High
    } else if (numValue <= 650 && numValue >= 450) {
      return '#ffee0083'; // Medium
    } else {
      return '#15ff0087'; // Low
    }
  } else if (type === 'karma') {
    if (numValue > 700) {
      return '#15ff0087'; // High
    } else if (numValue <= 700 && numValue >= 500) {
      return '#ffee0083'; // Medium
    } else {
      return '#ff000084'; // Low
    }
  } else {
    throw new Error(`Invalid type: ${type}`);
  }
}
