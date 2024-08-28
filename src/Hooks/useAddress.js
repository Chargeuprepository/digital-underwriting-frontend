import React, { useState } from 'react';

export default function useAddress() {
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');

  const handleAddress1Change = (e) => {
    // Remove any special characters, allowing only letters, numbers, spaces, and basic punctuation (e.g., commas, periods)
    const input = e.target.value.replace(/[^a-zA-Z0-9\s.,-]/g, '');

    setAddress1(input);
  };
  const handleAddress2Change = (e) => {
    // Remove any special characters, allowing only letters, numbers, spaces, and basic punctuation (e.g., commas, periods)
    const input = e.target.value.replace(/[^a-zA-Z0-9\s.,-]/g, '');

    setAddress2(input);
  };

  return { address1, address2, handleAddress1Change, handleAddress2Change };

  // return (
  //   <div>
  //     <label>Address:</label>
  //     <input
  //       type="text"
  //       value={address}
  //       onChange={handleAddressChange}
  //       placeholder="Enter your address"
  //     />
  //   </div>
  // );
}
