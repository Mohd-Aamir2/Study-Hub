 import React from 'react';
 import { useState } from 'react';

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('math');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

 const newTask = {
      id: Date.now(),
      title,
      subject,
      dueDate,
      priority,
      completed: false,
    };

    onAddTask(newTask);
    setTitle('');
    setSubject('math');
    setDueDate('');
    setPriority('medium');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">

<div className="form-group">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-row">
        <div className="form-group">
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="history">History</option>
            <option value="language">Language</option>
            <option value="literature">Literature</option>
          </select>
        </div>


     <div className="form-group">
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
}