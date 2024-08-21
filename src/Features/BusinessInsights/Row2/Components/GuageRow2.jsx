import styled from 'styled-components';
import Guage from '../../Charts/Guage';
import { StyledChartContainer } from '../../Charts/StyledChartContainers';

// const StyledGuageRow2 = styled.div`
//   height: 100%;
//   width: 30rem;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
//   border-radius: 1rem;
//   padding-top: 1.5rem;
// `;

export default function GuageRow2() {
  return (
    <StyledChartContainer padding={'1.5rem 0 0 0'} width={'30rem'}>
      <Guage
        total={900}
        score={602}
        heading="Avg. Credit Score"
        color={'#c1c1fc'}
      />
    </StyledChartContainer>
  );
}

// const blueColors = [
//   '#0000FF', // Base Blue
//   '#1E90FF', // Dodger Blue
//   '#87CEFA', // Light Sky Blue
//   '#4682B4', // Steel Blue
//   '#4169E1', // Royal Blue
//   '#00008B', // Dark Blue
// ];
