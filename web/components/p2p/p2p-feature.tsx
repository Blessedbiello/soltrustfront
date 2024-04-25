'use client';

import React, { useState } from 'react';
import { RadioGroup, Radio, FormControlLabel, TextField, Select } from '@mui/material'; // Material UI for form components
import CryptocurrencyDropdown from './p2pbuysell/CryptocurrencyDropdown';
import FiatCurrencyDropdown from './p2pbuysell/FiatCurrencyDropdown';
import AmountInput from './p2pbuysell/AmountInput';
import LocationInput from './p2pbuysell/LocationInput';
import PaymentMethodDropdown from './p2pbuysell/PaymentMethodDropdown';
// import P2PFeature from './BuySellForm';

const P2pFeature = () => {
  const [buySell, setBuySell] = useState('buy');
  const [cryptocurrency, setCryptocurrency] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [fiatCurrency, setFiatCurrency] = useState('');
  const [location, setLocation] = useState('');
  const [amount, setAmount] = useState(''); // New state for amount

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'buySell':
        setBuySell(value);
        break;
      case 'cryptocurrency':
        setCryptocurrency(value);
        break;
      case 'paymentMethod':
        setPaymentMethod(value);
        break;
      case 'fiatCurrency':
        setFiatCurrency(value);
        break;
      case 'location':
        setLocation(value);
        break;
      case 'amount':
        setAmount(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., call API to create a trade)
    console.log('Submitted form:', { buySell, cryptocurrency, paymentMethod, fiatCurrency, location, amount });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-purple-50 px-4 py-8 rounded-md shadow-md"> {/* Apply styling classes */}
      <RadioGroup row aria-label="buySell" className="text-purple-700">
        <FormControlLabel value="buy" control={<Radio />} label="Buy" checked={buySell === 'buy'} onChange={handleChange} name="buySell" />
        <FormControlLabel value="sell" control={<Radio />} label="Sell" checked={buySell === 'sell'} onChange={handleChange} name="buySell" />
      </RadioGroup>
      <div className="grid grid-cols-3 gap-4"> {/* Apply grid layout */}
      <CryptocurrencyDropdown value={cryptocurrency} onChange={setCryptocurrency} /> {/* Custom component for cryptocurrency selection */}
      <PaymentMethodDropdown value={paymentMethod} onChange={setPaymentMethod} /> {/* Custom component for payment method selection */}
      <FiatCurrencyDropdown value={fiatCurrency} onChange={setFiatCurrency} /> {/* Custom component for fiat currency selection */}
      </div>
      <LocationInput value={location} onChange={setLocation} /> {/* Custom component for location input */}
      <AmountInput value={amount} onChange={handleChange} name="amount" /> {/* New component for amount input */}
      <button type="submit"className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700">Search Trades</button>
    </form>
  );
};

export default P2pFeature;