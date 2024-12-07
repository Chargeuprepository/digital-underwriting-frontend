import styled from 'styled-components';
import { PAGE_SIZE } from '../Utils/constants';
import { useSearchParams } from 'react-router-dom';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6rem;
`;
const ResultString = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-gray-500);
`;
const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background: linear-gradient(
    45deg,
    var(--color-brand-blue-300),
    var(--color-brand-blue-600)
  );
  color: var(--color-gray-50);
  border: none;
  border-radius: 0.6rem;
  font-weight: 500;
  font-size: 1.4rem;
  width: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.2s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-gray-200);
  }
  &:active:not(:disabled) {
    transform: scale(0.95);
  }
`;

function formatWithLeadingZero(value) {
  if (Number.isInteger(value) && value >= 1 && value <= 9) {
    return value < 10 ? `0${value}` : `${value}`;
  } else return value;
}

export default function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get('page')
    ? 1
    : Number(searchParams.get('page'));
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set('page', next);
    setSearchParams(searchParams);
  }
  function previousPage() {
    const previous = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set('page', previous);
    setSearchParams(searchParams);
  }

  if (count <= PAGE_SIZE || count === 0) return null;
  return (
    <StyledPagination>
      <ResultString>
        Showing{' '}
        <span>{formatWithLeadingZero((currentPage - 1) * PAGE_SIZE + 1)}</span>{' '}
        to{' '}
        <span>
          {formatWithLeadingZero(
            currentPage === pageCount ? count : currentPage * PAGE_SIZE
          )}
        </span>{' '}
        of <span>{formatWithLeadingZero(count)}</span> results
      </ResultString>
      <Buttons>
        <PaginationButton onClick={previousPage} disabled={currentPage === 1}>
          <HiChevronLeft />
          <span>Previous</span>
        </PaginationButton>

        <PaginationButton
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <span>Next</span>
          <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}
