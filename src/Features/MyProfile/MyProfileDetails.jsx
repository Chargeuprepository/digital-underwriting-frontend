import styled from 'styled-components';

const details = [
  { title: 'name', value: 'Admin Chargeup' },
  { title: 'phone', value: '18001230181' },
  { title: 'email', value: 'admin@echargeup.com' },
  { title: 'role', value: 'Build such technical innovations' },
];

const StyledMyProfileDetails = styled.div`
  /* background-color: #00ff1a; */
  height: 100%;
  width: 55%;
  padding-left: 2rem;
`;
const ProfileHeading = styled.div`
  text-transform: uppercase;
  background: linear-gradient(
    to right,
    var(--color-brand-blue-300),
    var(--color-brand-blue-500)
  );
  text-align: center;
  margin-top: 13rem;
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: 0.15rem;
  color: var(--color-gray-25);
  border-radius: 0.6rem;
`;
const Details = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: blueviolet; */
  gap: 2rem;
  margin-top: 3rem;
  padding-left: 8rem;
`;
const TitleValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  /* background-color: aqua; */
  text-transform: capitalize;
`;
const Title = styled.div`
  /* background-color: #bad4fd; */
  /* width: 14rem; */
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--color-gray-700);
`;
const Value = styled.div`
  /* background-color: #bcbc75; */
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--color-gray-500);
`;

export default function MyProfileDetails() {
  return (
    <StyledMyProfileDetails>
      <ProfileHeading>chargeupreneur</ProfileHeading>
      <Details>
        <TitleValueContainer style={{ alignItems: 'flex-end' }}>
          {details.map((val) => {
            return <Title key={val.title}>{val.title}&#58;</Title>;
          })}
        </TitleValueContainer>
        <TitleValueContainer>
          {details.map((val) => {
            return <Value key={val.title}>{val.value}</Value>;
          })}
        </TitleValueContainer>
      </Details>
    </StyledMyProfileDetails>
  );
}
