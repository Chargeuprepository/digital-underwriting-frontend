import styled from 'styled-components';

const StyledHeader = styled.div`
  grid-column: 2 / -1;
  position: sticky;
  border-bottom: 1px solid var(--color-gray-50);
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6rem 0 6rem;
`;
const HeaderContainer = styled.div`
  width: 28rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Name = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--color-gray-800);
`;

const Profile = styled.span`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  border: 1px solid var(--color-gray-50);
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
const Logout = styled.button`
  border: none;
  background: linear-gradient(
    45deg,
    var(--color-brand-original-blue-400),
    var(--color-brand-blue-200)
  );
  width: 8rem;
  height: 3.6rem;
  border-radius: 0.4rem;
  color: var(--color-gray-50);

  &:hover {
    transform: translate(0, 3%);
    transition: all 0.3s;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Name>Gaurav</Name>
        <Profile>
          <Img src="/img/male.png" />
        </Profile>
        <Logout>Logout</Logout>
      </HeaderContainer>
    </StyledHeader>
  );
}
