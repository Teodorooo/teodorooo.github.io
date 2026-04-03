import { useEffect, useState, useCallback } from 'react';

export function useDate(events, nav) {
  const [dateDisplay, setDateDisplay] = useState('');
  const [days, setDays] = useState([]);

  const eventForDate = useCallback(
    date => events.find(e => e.date === date),
    [events]
  );

  useEffect(() => {
    const WEEKDAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const dt = new Date();
    if (nav !== 0) dt.setMonth(new Date().getMonth() + nav);

    const day        = dt.getDate();
    const month      = dt.getMonth();
    const year       = dt.getFullYear();
    const firstDay   = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayStr = firstDay.toLocaleDateString('en-us', {
      weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric',
    });

    setDateDisplay(`${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`);

    const padding = WEEKDAYS.indexOf(firstDayStr.split(', ')[0]);
    const arr = [];

    for (let i = 1; i <= padding + daysInMonth; i++) {
      const dateStr = `${month + 1}/${i - padding}/${year}`;
      if (i > padding) {
        arr.push({
          value: i - padding,
          event: eventForDate(dateStr),
          isCurrentDay: i - padding === day && nav === 0,
          date: dateStr,
        });
      } else {
        arr.push({ value: 'padding', event: null, isCurrentDay: false, date: '' });
      }
    }
    setDays(arr);
  }, [events, nav, eventForDate]);

  return { days, dateDisplay };
}

export default useDate;
