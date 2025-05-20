import React from 'react';
import { useContext, useState } from 'react';
import CalendarView from '../components/dashboard/CalendarView';
import ProgressChart from '../components/dashboard/ProgressChart';
import UpcomingSessions from '../components/dashboard/UpcomingSessions';
import TaskList from '../components/tasks/TaskList';
import { AuthContext } from '../context/AuthContext';

  export default function Dashboard() {
  const { currentUser } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('calendar');

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome back, {currentUser?.displayName || 'Student'}!</h1>
        <div className="tabs">
          <button 
            className={activeTab === 'calendar' ? 'active' : ''}
            onClick={() => setActiveTab('calendar')}
          >
            Calendar
          </button>
          <button 
            className={activeTab === 'tasks' ? 'active' : ''}
            onClick={() => setActiveTab('tasks')}>  Tasks 
          </button>
          <button 
            className={activeTab === 'progress' ? 'active' : ''}
            onClick={() => setActiveTab('progress')}
          >
            Progress
          </button>
        </div>
      </header>

      <main className="dashboard-content">
        {activeTab === 'calendar' && (
          <>
            <CalendarView />
            <UpcomingSessions />
          </>
        )}
        {activeTab === 'tasks' && <TaskList />}
        {activeTab === 'progress' && <ProgressChart />}
      </main>
    </div>
  );
}