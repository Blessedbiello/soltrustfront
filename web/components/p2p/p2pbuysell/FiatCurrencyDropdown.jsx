import React from 'react';
import { TextField } from '@mui/material';

const FiatCurrencyDropdown = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      select
      label="Select Fiat Currency"
      value={value}
      onChange={handleChange}
      SelectProps={{ native: true }}
    >
      {/* Populate options using data fetched from API or a static list */}
      <option value="">None</option>
      <option value="ngn">Nigerian Naira (NGN)</option>
      <option value="usd">US Dollar (USD)</option>
      <option value="pounds">British pounds (BP)</option>
      {/* Add more options as needed */}
    </TextField>
  );
};

export default FiatCurrencyDropdown;