import React, { useState } from 'react';
import { DatePicker } from 'antd';
import styled from 'styled-components';

const StyledDatePicker = styled(DatePicker)`
  width: 26rem;
  height: 3.6rem;
  border-radius: 0.6rem;
  border: 1px solid #fff200;
  font-size: 2rem;
  font-weight: 500;
  padding-left: 1rem;
  text-transform: uppercase;

  .ant-picker-input > input {
    color: var(--color-gray-700);
    font-size: 1.45rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  &:active,
  &:focus,
  .ant-picker-focused {
    background-color: #fffa9f;
  }
  &::placeholder {
    color: var(--color-gray-200);
  }
`;

export default function UseDate() {
  const [selectedDate, setSelectedDate] = useState(null);
  console.log(selectedDate);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return { selectedDate, handleDateChange, StyledDatePicker };

  // return (
  //   <StyledDatePicker
  //     value={selectedDate}
  //     onChange={handleDateChange}
  //     format="DD/MM/YYYY"
  //   />
  // );
}
