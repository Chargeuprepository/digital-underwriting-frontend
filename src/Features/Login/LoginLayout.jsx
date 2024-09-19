import LoginImage from './Components/LoginImage';
import LoginForm from './Components/LoginForm';
import GridMaker from '../../UI/GridMaker';

export default function LoginLayout() {
  return (
    <GridMaker
      backgroundcolor="#d0d7df"
      height="100vh"
      column="1fr 0.8fr"
      gap="8rem"
    >
      <LoginImage></LoginImage>
      <LoginForm></LoginForm>
    </GridMaker>
  );
}
