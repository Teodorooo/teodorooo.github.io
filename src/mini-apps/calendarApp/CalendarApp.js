import React, { useState, useEffect } from 'react';
import { CalendarHeader } from './CalendarHeader';
import { Day } from './Day';
import { NewEventModal } from './NewEventModal';
import { DeleteEventModal } from './DeleteEventModal';
import { useDate } from './useDate';
import backgroundvideo from '../../videos/video-compressed.mp4';

export function CalendarApp() {
  const [nav, setNav] = useState(0);
  const [clicked, setClicked] = useState(null);
  const [events, setEvents] = useState(() => {
    try { return JSON.parse(localStorage.getItem('events')) || []; }
    catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const { days, dateDisplay } = useDate(events, nav);
  const eventForDate = date => events.find(e => e.date === date);

  return (
    <div className="cal-page">
      <video src={backgroundvideo} loop autoPlay muted playsInline className="bgvideo" />

      <div className="cal-wrap">
        <CalendarHeader
          dateDisplay={dateDisplay}
          onBack={() => setNav(n => n - 1)}
          onNext={() => setNav(n => n + 1)}
        />

        <div className="cal-weekdays">
          {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
            <div key={d} className="cal-weekday">{d}</div>
          ))}
        </div>

        <div className="cal-grid">
          {days.map((d, i) => (
            <Day
              key={i}
              day={d}
              onClick={() => { if (d.value !== 'padding') setClicked(d.date); }}
            />
          ))}
        </div>
      </div>

      {clicked && !eventForDate(clicked) && (
        <NewEventModal
          onClose={() => setClicked(null)}
          onSave={title => {
            setEvents(prev => [...prev, { title, date: clicked }]);
            setClicked(null);
          }}
        />
      )}

      {clicked && eventForDate(clicked) && (
        <DeleteEventModal
          eventText={eventForDate(clicked).title}
          onClose={() => setClicked(null)}
          onDelete={() => {
            setEvents(prev => prev.filter(e => e.date !== clicked));
            setClicked(null);
          }}
        />
      )}
    </div>
  );
}

export default CalendarApp;
