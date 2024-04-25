import React from 'react';
import { TextField } from '@mui/material';

const PaymentMethodDropdown = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      select
      label="Select Payment Method"
      value={value}
      onChange={handleChange}
      SelectProps={{ native: true }}
    >
      {/* Populate options using data fetched from API or a static list */}
      <option value="">None</option>
      <option value="bankTransfer">Bank Transfer</option>
      <option value="mobileMoney">Mobile Money</option>
      <option value="cashOnDelivery">Cash on Delivery</option>
      {/* Add more options as needed */}
    </TextField>
  );
};

export default PaymentMethodDropdown;