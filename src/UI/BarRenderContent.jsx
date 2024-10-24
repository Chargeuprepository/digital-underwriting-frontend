import styled from 'styled-components';
import breakCamelCase from '../Utils/breakCamelCase';

const InsightLabelValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: 1px solid var(--color-gray-100);
  border: ${(props) =>
    props.border ? props.border : '1px solid var(--color-gray-100)'};
  padding: 1.2rem 2.2rem;
  border-radius: 0.6rem;
  flex: 0 0 auto;
`;
const InsightLabel = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.35rem;
  font-weight: 700;
  color: ${(props) => (props.color ? props.color : 'var(--color-gray-800)')};
`;
export const InsightValue = styled.div`
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.32rem;
  font-weight: 600;
  color: ${(props) => (props.color ? props.color : 'var(--color-gray-700)')};
`;

export default function BarRenderContent(
  value,
  labelColor,
  valueColor,
  border
) {
  if (typeof value === 'object' && value !== null) {
    return Object.entries(value).map(([key, val]) => (
      <InsightLabelValueContainer key={key} border={border}>
        <InsightLabel color={labelColor}>{breakCamelCase(key)}</InsightLabel>
        <InsightValue color={valueColor}>{val}</InsightValue>
      </InsightLabelValueContainer>
    ));
  }
}
