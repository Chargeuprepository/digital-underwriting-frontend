import styled from 'styled-components';

import { useMoveBack } from '../Hooks/useMoveBack';

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
  background: linear-gradient(
    to right,
    var(--color-brand-green-300),
    var(--color-brand-blue-300)
  );
`;

const Box = styled.div`
  /* box */
  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;
  border: 0.2rem solid var(--color-gray-100);
  background: transparent;
  border-radius: 2rem;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

const Heading = styled.h1`
  font-size: 30px;
  font-weight: 200;
  color: var(--color-gray-50);
`;
const Button = styled.button`
  border: none;
  padding: 1.4rem;
  border-radius: 2rem;
  background-color: var(--color-gray-50);
  font-size: large;
  font-weight: 500;
  width: 14rem;
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">
          The page you are looking for could not be found 😢
        </Heading>
        <Button onClick={moveBack}> Go back</Button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
