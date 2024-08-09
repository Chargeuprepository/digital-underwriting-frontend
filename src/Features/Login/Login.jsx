import styled from "styled-components"
import LoginImage from "./Components/LoginImage"
import LoginForm from "./Components/LoginForm"

const LoginContainer = styled.div`
    background-color: var(--color-login-image);
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export default function Login() {
    return (
        <LoginContainer>
            <LoginImage></LoginImage>
            <LoginForm></LoginForm>
        </LoginContainer>
    )
}