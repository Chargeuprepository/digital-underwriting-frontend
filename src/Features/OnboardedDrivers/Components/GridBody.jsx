import styled from 'styled-components';
import { GridValue, StyledGrid } from '../UI';

const StyledGridBody = styled.div``;

const bodyData = [
  {
    name: 'ritesh kumar',
    karma: '200',
    nps: '250',
    service: '250',
    earnings: '200',
    runKm: '200',
    dpd: '100',
  },
  {
    name: 'neha sharma',
    karma: '150',
    nps: '100',
    service: '150',
    earnings: '250',
    runKm: '50',
    dpd: '200',
  },
  {
    name: 'ajay patel',
    karma: '0',
    nps: '50',
    service: '100',
    earnings: '150',
    runKm: '250',
    dpd: '0',
  },
  {
    name: 'priya singh',
    karma: '250',
    nps: '200',
    service: '50',
    earnings: '100',
    runKm: '150',
    dpd: '50',
  },
  {
    name: 'vikas mehta',
    karma: '100',
    nps: '150',
    service: '200',
    earnings: '0',
    runKm: '100',
    dpd: '250',
  },
  {
    name: 'sonali gupta',
    karma: '50',
    nps: '0',
    service: '50',
    earnings: '200',
    runKm: '250',
    dpd: '150',
  },
  {
    name: 'amit sharma',
    karma: '250',
    nps: '250',
    service: '250',
    earnings: '250',
    runKm: '200',
    dpd: '200',
  },
  {
    name: 'deepika jain',
    karma: '200',
    nps: '100',
    service: '50',
    earnings: '0',
    runKm: '150',
    dpd: '100',
  },
  {
    name: 'rohit kumar',
    karma: '150',
    nps: '200',
    service: '150',
    earnings: '200',
    runKm: '250',
    dpd: '50',
  },
  {
    name: 'anuj gupta',
    karma: '50',
    nps: '150',
    service: '100',
    earnings: '250',
    runKm: '0',
    dpd: '200',
  },
];

export default function GridBody() {
  return (
    <StyledGridBody>
      {bodyData.map((val, i) => (
        <StyledGrid key={i}>
          <GridValue>{i + 1}</GridValue>
          <GridValue horiScroll={'true'}>{val.name}</GridValue>
          <GridValue>{val.karma}</GridValue>
          <GridValue>{val.dpd}</GridValue>
          <GridValue>{val.service}</GridValue>
          <GridValue>{val.runKm}</GridValue>
          <GridValue>{val.earnings}</GridValue>
          <GridValue>{val.nps}</GridValue>
        </StyledGrid>
      ))}
    </StyledGridBody>
  );
}
