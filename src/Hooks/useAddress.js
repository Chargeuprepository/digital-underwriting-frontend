import React, { useState } from 'react';

export default function useAddress() {
  const [address, setAddress] = useState('');

  const handleAddressChange = (e) => {
    // Remove any special characters, allowing only letters, numbers, spaces, and basic punctuation (e.g., commas, periods)
    const input = e.target.value.replace(/[^a-zA-Z0-9\s.,-]/g, '');

    setAddress(input);
  };

  return { address, handleAddressChange };

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
