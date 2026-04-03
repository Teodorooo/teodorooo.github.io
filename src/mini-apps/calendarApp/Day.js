import React from 'react';

export function Day({ day, onClick }) {
  const cls = [
    'cal-day',
    day.value === 'padding' ? 'cal-day--padding' : '',
    day.isCurrentDay ? 'cal-day--today' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={cls} onClick={onClick}>
      {day.value !== 'padding' && <span className="cal-day__num">{day.value}</span>}
      {day.event && <div className="cal-day__event">{day.event.title}</div>}
    </div>
  );
}

export default Day;
