import styled from 'styled-components';
import { MdOutlineRefresh } from 'react-icons/md';
import { createPortal } from 'react-dom';
import Overlay from './Overlay';

const StyledTryAgain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    height: 5rem;
    width: 5rem;
    cursor: pointer;
    transition: all 0.1s;
    color: var(--color-gray-300);
    box-shadow: '0 10px 20px rgba(0, 0, 0, 0.3)';
  }

  svg:hover {
    transform: scale(1.03);
    color: var(--color-gray-700);
  }
  svg:active {
    transform: scale(1);
  }
`;
const RefreshText = styled.p`
  width: 20rem;
  text-align: center;
  color: var(--color-gray-400);
`;

export default function TryAgain() {
  function handleRefresh() {
    window.location.reload();
  }

  return createPortal(
    <Overlay height={'1rem'} width={'1rem'} top={'50%'} left={'50%'}>
      <StyledTryAgain>
        <MdOutlineRefresh onClick={handleRefresh}></MdOutlineRefresh>
        <RefreshText>Refresh!</RefreshText>
      </StyledTryAgain>
    </Overlay>,
    document.body
  );
}
