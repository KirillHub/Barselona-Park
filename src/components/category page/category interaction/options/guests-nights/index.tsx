import '../checkIn-checkOut/style.scss';

import { useState } from 'react';

import { More } from '../../../../../svg';

export const GuestsNights = () => {
  const [guests, setGuests] = useState(1);

  const onClickGuests = (action: string) => {
    if (guests === 1 && action === 'minus') {
      return;
    }
    if (guests === 8 && action === 'plus') {
      return;
    }

    if (action === 'plus') {
      setGuests(guests + 1);
    }
    if (action === 'minus') {
      setGuests(guests - 1);
    }
  };

  return (
    <>
      <div className="checkIn">
        <p className="check-title">Люди</p>
        <div className="check-date">
          <span className="check-date-number">{guests}</span>
          <div className="zaputalsa">
            <div className="check-date-date-more wrap" onClick={() => onClickGuests('plus')}>
              <More />
            </div>
            <div className="check-date-date-more" onClick={() => onClickGuests('minus')}>
              <More />
            </div>
          </div>
        </div>
      </div>
      <div className="checkIn">
        <p className="check-title">Ночей</p>
        <div className="check-date">
          <span className="nigths">{365}</span>
        </div>
      </div>
    </>
  );
};
