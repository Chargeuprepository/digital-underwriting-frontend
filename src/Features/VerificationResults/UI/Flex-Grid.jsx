import styled from 'styled-components';

export const StyledDigiTelSocioFlex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;
  height: 100%;
  background: linear-gradient(to bottom, #237a57, #237a57);
  background: linear-gradient(
    to top,
    ${(props) => props.backgroundcolor[0]},
    ${(props) => props.backgroundcolor[1]}
  );
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  > :first-child {
    border: 2px solid var(--color-gray-1);
  }
`;

export const InsightLabelValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid var(--color-gray-100);
  padding: 1rem 3rem;
  border-radius: 0.6rem;
  flex: 0 0 auto;
`;
export const InsightLabel = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--color-gray-800);
`;
export const InsightValue = styled.div`
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  font-size: 1.32rem;
  font-weight: 700;
  color: var(--color-gray-700);
`;
