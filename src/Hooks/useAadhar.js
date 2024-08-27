import React, { useState } from 'react';

export default function useAadhar() {
  const [aadhaar, setAadhaar] = useState('');
  console.log(+aadhaar.split(' ').join(''));

  const handleInputChange = (e) => {
    let input = e.target.value.replace(/\D/g, ''); // Remove non-digit characters

    // Limit input to 12 digits
    if (input.length > 12) {
      input = input.substring(0, 12);
    }

    // Insert spaces after every 4 digits dynamically, but only for up to 12 digits
    input = input.replace(
      /(\d{4})(\d{1,4})?(\d{1,4})?/,
      (match, p1, p2, p3) => {
        let formatted = p1;
        if (p2) formatted += ' ' + p2;
        if (p3) formatted += ' ' + p3;
        return formatted;
      }
    );

    setAadhaar(input);
  };

  return (
    <div>
      <label>Aadhaar Number:</label>
      <input
        type="text"
        value={aadhaar}
        onChange={handleInputChange}
        maxLength="14" // Max length includes spaces
        placeholder="1234 5678 9012"
      />
    </div>
  );
}
