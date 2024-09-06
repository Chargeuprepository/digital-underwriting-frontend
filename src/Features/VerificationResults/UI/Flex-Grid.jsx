import styled from 'styled-components';

export const StyledDigiTelSocioFlex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;
  height: 100%;
  /* border-radius: 0.6rem; */
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
`;

export const InsightLabelValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid var(--color-gray-100);
  padding: 1rem 3rem;
  /* background-color: aliceblue; */
  border-radius: 0.6rem;
  /* background: linear-gradient(to bottom, #e3dcf0, #dfd394); */
  /* min-width: 20rem; */
  flex: 0 0 auto;
`;
export const InsightLabel = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-gray-900);
`;
export const InsightValue = styled.div`
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  font-size: 1.29rem;
  font-weight: 600;
  color: var(--color-gray-800);
`;
