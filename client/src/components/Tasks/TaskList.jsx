import React from 'react';
import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

export default function TaskList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Complete algebra exercises',
      subject: 'math',
      dueDate: '2023-11-20',
      priority: 'high',
      completed: false,
    },

{
      id: 2,
      title: 'Read history chapter 5',
      subject: 'history',
      dueDate: '2023-11-18',
      priority: 'medium',
      completed: false,
    },
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

 const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="task-list">
      <h2>My Study Tasks</h2>
      <TaskForm onAddTask={addTask} />
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={toggleComplete}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}