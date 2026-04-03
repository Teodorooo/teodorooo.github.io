import React from 'react';

export function CalendarHeader({ dateDisplay, onNext, onBack }) {
  return (
    <div className="cal-header">
      <span className="cal-header__title">{dateDisplay}</span>
      <div className="cal-header__nav">
        <button className="cal-nav-btn" onClick={onBack}>&#8592;</button>
        <button className="cal-nav-btn" onClick={onNext}>&#8594;</button>
      </div>
    </div>
  );
}

export default CalendarHeader;
