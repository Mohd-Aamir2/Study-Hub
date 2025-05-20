import React from 'react';
export default function TaskItem({ task, onToggleComplete, onDelete }) {
  const getPriorityColor = () => {
    switch (task.priority) {
      case 'high':
        return 'priority-high';
      case 'medium':
        return 'priority-medium';
      case 'low':
        return 'priority-low';
      default:
        return '';
    }
  };

     const getSubjectColor = () => {
    switch (task.subject) {
      case 'math':
        return 'subject-math';
      case 'science':
        return 'subject-science';
      case 'history':
        return 'subject-history';
      case 'language':
        return 'subject-language';
      case 'literature':
        return 'subject-literature';
      default:
        return '';
    }
  };

   return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-checkbox">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
        />
      </div>

   <div className="task-content">
        <div className="task-title">{task.title}</div>
        <div className="task-meta">
          <span className={`task-subject ${getSubjectColor()}`}>
            {task.subject}
          </span>
          {task.dueDate && (
            <span className="task-due">Due: {task.dueDate}</span>
          )}
          <span className={`task-priority ${getPriorityColor()}`}>
            {task.priority}
          </span>
        </div>
      </div>
      <button
        className="task-delete"
        onClick={() => onDelete(task.id)}>
        &times;
      </button>
    </li>
  );
}