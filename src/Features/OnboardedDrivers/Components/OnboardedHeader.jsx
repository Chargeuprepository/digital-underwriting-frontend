import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';
import { useState } from 'react';

const StyledOnboardedHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 4rem;
  padding-right: 4rem;
`;
const StyledSearchBar = styled.div`
  position: relative;
  width: 28rem;
  height: 4rem;
  border: 1px solid var(--color-gray-100);
  border-radius: 0.6rem;
  transition: all 0.3s;
  ${(props) =>
    props.isFocused &&
    `
      box-shadow: 0 0 10px rgba(117, 117, 117, 0.5);
  `}
`;
const SearchInput = styled.input`
  width: 85%;
  height: 100%;
  border-radius: 0.6rem;
  border: none;
  padding-left: 10px;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  color: var(--color-gray-600);
  background-color: transparent;
  text-transform: uppercase;

  &::placeholder {
    color: var(--color-gray-200);
  }
`;
const SearchButton = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  svg {
    height: 2.6rem;
    width: 2.6rem;
    transition: all 0.3s;
    color: var(--color-gray-200);
  }
  svg:hover {
    color: var(--color-gray-500);
  }
  svg:active {
    transform: scale(0.9);
  }
`;
const ToogleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Toogle = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-gray-600);
  text-transform: capitalize;
  border: 1px solid var(--color-gray-100);
  width: auto;
  padding: 1rem 3rem;
  height: 4rem;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3;
  ${(props) =>
    props.active === 'active' &&
    `
  background-color: var(--color-brand-green-300);
    color: var(--color-gray-10);`}

  &:hover {
    background-color: var(--color-brand-green-300);
    color: var(--color-gray-10);
  }
`;

const toggleButtonType = ['top', 'bottom'];

export default function OnboardedHeader() {
  const [isFocused, setIsFocused] = useState(false);
  const [activeButton, setActiveButton] = useState(function () {
    const savedActiveButton = localStorage.getItem('activeButton');
    return savedActiveButton !== null ? parseInt(savedActiveButton, 10) : 0;
  });

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleButtonClick = (index) => {
    setActiveButton(index);
    localStorage.setItem('activeButton', index);
  };

  return (
    <StyledOnboardedHeader>
      <StyledSearchBar isFocused={isFocused}>
        <SearchInput
          type="text"
          placeholder="Search Driver..."
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <SearchButton>
          <IoIosSearch />
        </SearchButton>
      </StyledSearchBar>
      <ToogleContainer>
        {toggleButtonType.map((val, i) => {
          return (
            <Toogle
              active={activeButton === i ? 'active' : 'inActive'}
              onClick={() => handleButtonClick(i)}
              key={i}
            >
              {val}
            </Toogle>
          );
        })}
      </ToogleContainer>
    </StyledOnboardedHeader>
  );
}
