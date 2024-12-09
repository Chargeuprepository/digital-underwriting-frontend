import styled from 'styled-components';
import { FaEarthAmericas } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useOutsideClick from '../../../../Hooks/useOutsideClick';
import { useLocation } from 'react-router-dom';

const ZoneParentContainer = styled.div`
  position: relative;
`;
const StyledZone = styled.div`
  cursor: pointer;
  width: 20rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); */
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-gray-600);
  /* background: linear-gradient(
    45deg,
    var(--color-brand-blue-0),
    var(--color-brand-blue-0)
  ); */
  border: 1px solid var(--color-gray-100);
  transition: all 0.3s;
  &:hover {
    border: 1px solid var(--color-gray-50);
  }
  &:active {
    transform: scale(0.97);
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: #ffffff;
    background-color: var(--color-brand-green-500);
    border-radius: 50%;
  }
`;
const StyledCheckBoxContainer = styled.div`
  background-color: var(--color-gray-100);
  width: 20rem;
  position: absolute;
  z-index: 1;
  border-radius: 0.6rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  padding: 1.4rem 1.2rem 2rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  top: 5.2rem;

  opacity: 0;
  transform: scaleY(0);
  transform-origin: top;
  transition: opacity 0.3s ease, transform 0.1s ease;
  /* overflow: hidden; */

  &.open {
    opacity: 1;
    transform: scaleY(1);
  }
`;
const CheckBoxContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const CheckBox = styled.li`
  display: flex;
  gap: 1rem;
`;
const Label = styled.div`
  text-transform: capitalize;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-gray-700);
`;
const ZoneInput = styled.input`
  width: 1.5rem;
`;
const Button = styled.button`
  border: none;
  padding: 0.6rem 0;
  font-size: 1.6rem;
  font-weight: 500;
  border-radius: 0.6rem;
  color: var(--color-gray-50);
  background: linear-gradient(
    45deg,
    var(--color-brand-blue-300),
    var(--color-brand-blue-500)
  );
  &:hover {
    border: 1px solid yellow;
  }
`;

// const list = ['delhi', 'noida', 'faridabad', 'meerut', 'gujarat', 'varanasi'];

export default function Zone({ zone }) {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [openZones, setOpenZones] = useState(false);
  const [zoneList, setZoneList] = useState([]);
  const { refStyledModal } = useOutsideClick(setOpenZones);

  console.log(zoneList);

  function handleClick() {
    setOpenZones((openZones) => !openZones);
  }
  function handleList(li) {
    setZoneList(
      zoneList.includes(li)
        ? zoneList.filter((val) => val !== li)
        : [...zoneList, li]
    );
  }
  function handleSubmit() {
    if (!zoneList[0]) {
      setOpenZones((openZones) => !openZones);
      return;
    }
    searchParams.set('zone', zoneList);
    setSearchParams(searchParams);

    setOpenZones((openZones) => !openZones);
  }

  useEffect(() => {
    const zones = searchParams.get('zone');
    setZoneList(zones ? zones.split(',') : []);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        setOpenZones(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [location.search]);

  return (
    <ZoneParentContainer ref={refStyledModal}>
      <StyledZone onClick={handleClick}>
        <FaEarthAmericas />
        <p>Zone</p>
      </StyledZone>
      {openZones ? (
        // createPortal
        // (
        <StyledCheckBoxContainer className="open">
          <CheckBoxContainer>
            {zone.map((li, i) => {
              return (
                <CheckBox key={i}>
                  <ZoneInput
                    type="checkbox"
                    checked={zoneList?.includes(li)}
                    onChange={() => handleList(li)}
                  />
                  <Label>{li}</Label>
                </CheckBox>
              );
            })}
          </CheckBoxContainer>
          <Button disabled={!zoneList[0]} onClick={handleSubmit}>
            Filter
          </Button>
        </StyledCheckBoxContainer>
      ) : (
        // document.body
        // )
        ''
      )}
    </ZoneParentContainer>
  );
}
