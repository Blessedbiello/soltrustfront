import React from 'react';
import { TextField } from '@mui/material';

const LocationInput = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      label="Offer Location"
      value={value}
      onChange={handleChange}
    />
  );
};

export default LocationInput;