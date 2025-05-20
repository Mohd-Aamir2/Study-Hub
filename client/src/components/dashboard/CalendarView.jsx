import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import { enUS } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css'; 

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function CalendarView() {
  const [events, setEvents] = useState([
    {
      title: 'Math Study Session',
      start: new Date(2025, 10, 15, 10, 0),
      end: new Date(2025, 10, 15, 12, 0),
    },
    {
      title: 'History Chapter Review',
      start: new Date(2025, 10, 16, 14, 0),
      end: new Date(2025, 10, 16, 15, 30),
    },
  ]);

  // ✨ Add event interactively (for demo purpose only)
  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt('Enter Event Title:');
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  // Show details on event click
  const handleSelectEvent = (event) => {
    alert(`Event: ${event.title}\nStart: ${event.start}\nEnd: ${event.end}`);
  };

  return (
    <div className="calendar-container" style={{ padding: '30px' }}>
      <h1>📅 Study Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        popup
        views={['month', 'week', 'day']}
        defaultView="month"
      />
    </div>
  );
}
