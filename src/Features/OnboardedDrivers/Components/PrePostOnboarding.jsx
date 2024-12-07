import styled from 'styled-components';

const StyledPrePostOnboarding = styled.div`
  display: flex;
  /* background-color: red; */
  width: 85rem;
  padding-left: 1rem;
  padding-right: 11rem;
  justify-content: space-between;
  margin-left: 11rem;
`;
const Onboarding = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-gray-500);
`;

export default function PrePostOnboarding() {
  return (
    <StyledPrePostOnboarding>
      <Onboarding>Pre-Onboarding</Onboarding>
      <Onboarding>Post-Onboarding</Onboarding>
    </StyledPrePostOnboarding>
  );
}
