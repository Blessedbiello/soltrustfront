import React from 'react';
import { TextField } from '@mui/material';

const AmountInput = ({ value, onChange, name }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      label="Amount"
      type="number" // Specify type as number for numeric input
      value={value}
      onChange={handleChange}
      name={name} // Provide a name for the input field
    />
  );
};

export default AmountInput;