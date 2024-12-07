import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Credit from './filters/Credit';
import Risk from './filters/Risk';
import Karma from './filters/Karma';
import AllDrivers from './filters/AllDrivers';

const filterTool = {
  credit: { value: ['high', 'medium', 'low'] },
  risk: { value: ['high', 'medium', 'low'] },
  karma: { value: ['high', 'medium', 'low'] },
};

const StyledOnboardedHeader = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 0rem;
  /* padding: 0 0rem 0 0; */
  /* background-color: red; */
`;
const CreditRiskKarmaDriversFilter = styled.div`
  /* background-color: #ed8282; */
  display: flex;
  /* justify-content: space-between; */
  gap: 1rem;
  width: 100%;
`;
const StyledSearchBar = styled.div`
  position: relative;
  width: 24rem;
  height: 4.4rem;
  border: 2px solid var(--color-gray-100);
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
  font-size: 1.4rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: var(--color-gray-500);
  background-color: transparent;
  text-transform: uppercase;

  &::placeholder {
    color: var(--color-gray-100);
    font-size: 1.4rem;
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

export default function OnboardedHeader() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  function handleSearchClick() {
    id.trim() &&
      navigate(`/driver/${id.toUpperCase().trim()}`, {
        state: { data: { id: id.toUpperCase().trim() } },
      });
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <StyledOnboardedHeader>
      <CreditRiskKarmaDriversFilter>
        <AllDrivers></AllDrivers>
        <Credit></Credit>
        <Risk></Risk>
        <Karma></Karma>
      </CreditRiskKarmaDriversFilter>
      <StyledSearchBar isFocused={isFocused}>
        <SearchInput
          type="text"
          placeholder="Search Driver..."
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={id}
          onChange={(e) => setId(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <SearchButton onClick={handleSearchClick}>
          <IoIosSearch />
        </SearchButton>
      </StyledSearchBar>
    </StyledOnboardedHeader>
  );
}
