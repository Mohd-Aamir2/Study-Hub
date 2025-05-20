      import React from 'react';
      import { useState } from 'react';

export default function UpcomingSessions() {
  const [sessions, setSessions] = useState([
    {
      id: 1,
      subject: 'Mathematics',
      topic: 'Algebra Review',
      date: '2025-05-26',
      time: '14:00 - 15:30',
    },
    {
      id: 2,
      subject: 'History',
      topic: 'World War II',
      date: '2025-015-27',
      time: '10:00 - 11:30',
    },
    {

      id: 3,
      subject: 'Science',
      topic: 'Chemistry Lab Prep',
      date: '2025-05-88',
      time: '16:00 - 17:00',
    },
  ]);

  return (
    <div className="upcoming-sessions">
      <h3>Upcoming Study Sessions</h3>
      <ul>
        {sessions.map((session) => (
          <li key={session.id} className="session-item">
            <div className="session-subject">{session.subject}</div>
            <div className="session-topic">{session.topic}</div>
            <div className="session-time">
              {session.date} • {session.time}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}