import React from 'react';
import { TextField } from '@mui/material';

const CryptocurrencyDropdown = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      select
      label="Select Cryptocurrency"
      value={value}
      onChange={handleChange}
      SelectProps={{ native: true }}
      className="inline-block mr-4" // Add inline-block and margin-right
    >
      {/* Populate options using data fetched from API or a static list */}
      <option value="solana">Solana (SOL)</option>
      <option value="bitcoin">Bitcoin (BTC)</option>
      <option value="ethereum">WORMHOLE (W)</option>
      <option value="ethereum">Base (BSE)</option>
      <option value="ethereum">Sui (SUI)</option>
      <option value="ethereum">USDC (usdc)</option>
      {/* Add more options as needed */}
    </TextField>
  );
};

export default CryptocurrencyDropdown;