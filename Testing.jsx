// import React, { useState } from 'react';

// export default function Testing() {
//   const [aadhaar, setAadhaar] = useState('');
//   console.log(+aadhaar.split(' ').join(''));

//   const handleInputChange = (e) => {
//     let input = e.target.value.replace(/\D/g, ''); // Remove non-digit characters

//     // Limit input to 12 digits
//     if (input.length > 12) {
//       input = input.substring(0, 12);
//     }

//     // Insert spaces after every 4 digits dynamically, but only for up to 12 digits
//     input = input.replace(
//       /(\d{4})(\d{1,4})?(\d{1,4})?/,
//       (match, p1, p2, p3) => {
//         let formatted = p1;
//         if (p2) formatted += ' ' + p2;
//         if (p3) formatted += ' ' + p3;
//         return formatted;
//       }
//     );

//     setAadhaar(input);
//   };

//   return (
//     <div>
//       <label>Aadhaar Number:</label>
//       <input
//         type="text"
//         value={aadhaar}
//         onChange={handleInputChange}
//         maxLength="14" // Max length includes spaces
//         placeholder="1234 5678 9012"
//       />
//     </div>
//   );
// }

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// import React, { useState } from 'react';

// export default function Testing() {
//   const [address, setAddress] = useState('');

//   const handleInputChange = (e) => {
//     // Remove any special characters, allowing only letters, numbers, spaces, and basic punctuation (e.g., commas, periods)
//     const input = e.target.value.replace(/[^a-zA-Z0-9\s.,-]/g, '');

//     setAddress(input);
//   };

//   return (
//     <div>
//       <label>Address:</label>
//       <input
//         type="text"
//         value={address}
//         onChange={handleInputChange}
//         placeholder="Enter your address"
//       />
//     </div>
//   );
// }

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

import React, { useState } from 'react';
import { DatePicker } from 'antd';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  console.log(selectedDate);

  // Function to handle date changes
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div style={{ padding: '20px' }}>
      <label>Select Date:</label>
      <DatePicker
        value={selectedDate} // Controlled value
        onChange={handleDateChange} // Handle date change
        format="DD/MM/YYYY" // Format date as dd/MM/yyyy
        // showMonthDropdown // Show month dropdown
        // showYearDropdown // Show year dropdown
        // dropdownMode="select"
      />
      <p>
        Selected Date:{' '}
        {selectedDate ? selectedDate.format('DD/MM/YYYY') : 'None'}
      </p>
    </div>
  );
};

export default App;
