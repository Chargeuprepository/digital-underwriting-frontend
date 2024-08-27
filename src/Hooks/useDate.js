import React, { useState } from 'react';
import { DatePicker } from 'antd';

export default function useDate() {
  const [selectedDate, setSelectedDate] = useState(null);
  console.log(selectedDate);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div style={{ padding: '20px' }}>
      <label>Select Date:</label>
      <DatePicker
        value={selectedDate}
        onChange={handleDateChange}
        format="DD/MM/YYYY"
      />
      <p>
        Selected Date:{' '}
        {selectedDate ? selectedDate.format('DD/MM/YYYY') : 'None'}
      </p>
    </div>
  );
}
