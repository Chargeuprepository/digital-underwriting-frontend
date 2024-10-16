import styled from 'styled-components';
import { GridValue, StyledGrid } from '../UI';
import { useEffect, useState } from 'react';
import Spinner from '../../../UI/Spinner';
import { useNavigate } from 'react-router-dom';

const StyledGridBody = styled.div`
  height: 45rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function GridBody() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function game() {
      const res = await fetch(
        'http://localhost:3000/data?_sort=karma&_order=asc'
      );
      const ans = await res.json();
      setData(ans);
    }
    game();
  }, []);

  function karmaHandler(karmaValue) {
    const value = Number(karmaValue);

    if (value <= 50) {
      return '#ff000084';
    } else if (value <= 400) {
      return '#ff000084';
    } else if (value <= 700) {
      return '#ffee0083';
    } else if (value <= 1000) {
      return '#15ff0087';
    } else {
      return '#fff';
    }
  }

  function handleClick(val) {
    navigate(`/driver/${val.id}`, { state: { data: val } });
  }

  return (
    <StyledGridBody>
      {data ? (
        data.map((val, i) => {
          const color = karmaHandler(val.karma);

          return (
            <StyledGrid
              key={i}
              bgcolor={i % 2 === 0 ? '#f6f6f6' : '#e5e9f2'}
              pointer={'true'}
              onClick={() => handleClick(val)}
            >
              <GridValue
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '3rem',
                }}
              >
                {val.id}
              </GridValue>
              <GridValue horiScroll={'true'}>{val.name}</GridValue>
              <GridValue
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    height: '45%',
                    width: '70%',
                    backgroundColor: color,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    borderRadius: '10px',
                    color: 'var(--color-gray-800)',
                    textTransform: 'uppercase',
                  }}
                >
                  {val.karma}
                </div>
              </GridValue>
              <GridValue>{val.dpd}</GridValue>
              <GridValue>{val.service}</GridValue>
              <GridValue>{val.runKm}</GridValue>
              <GridValue>{val.nps}</GridValue>
            </StyledGrid>
          );
        })
      ) : (
        <Spinner />
      )}
    </StyledGridBody>
  );
}
