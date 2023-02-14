import React from 'react';
import { CheckInCheckOut } from './checkIn-checkOut';
import { GuestsNights } from './guests-nights';
import { SelectCategory } from './select category';
import './style.scss'

export const Options = () => {
  return (
    <div className='options-container'>
      <SelectCategory />
      <div className="check-guests">
        <CheckInCheckOut />
        <GuestsNights />
      </div>
    </div>
  );
};
