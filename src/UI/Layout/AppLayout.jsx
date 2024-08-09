import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 25rem 1fr;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;

const Main = styled.main`
  overflow: scroll;
  padding: 2rem;
  /* background-color: #fcb6b6; */
`;
const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  /* background-color: #89e07f; */
`;

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}
