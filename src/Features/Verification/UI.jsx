import styled from 'styled-components';

export const StyledVerificationTab = styled.div`
  ${({ shade1, shade2, bgimage }) => `
    background: linear-gradient(
      to right,
      ${shade1},
      ${shade2}
    ),
    url(img/${bgimage});
  `}
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  border-radius: 0.6rem;
  transition: all 0.3s;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;

  &:hover {
    transform: scale(1.02);
  }
`;

export const VerificationName = styled.span`
  font-size: 1.7rem;
  font-weight: 800;
  color: var(--color-gray-25);
  background-color: rgba(43, 43, 43, 0.632);
  border-radius: 0.6rem;
  padding: 0.5rem 1.4rem;
  text-transform: uppercase;
  height: 3.4rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 15rem;
`;

export const VerificationNameSpan = styled.span`
  color: #ffff00;
`;
