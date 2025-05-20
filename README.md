 Study-Hub

Welcome to the Study-Hub This app is designed to help you manage your study schedule effectively by organizing subjects, tasks, and study sessions. Built with Jetpack Compose, Room Library, and MVVM architecture, Study-Hub ensures a modern, efficient, and scalable experience.

 Features
Dashboard Screen: Get an overview of your study progress and upcoming tasks.
Add Subject: Create and manage different subjects.
Add Task: Assign tasks to your subjects to keep track of your study goals.
Create Session: Schedule study sessions for each subject to maintain a consistent study routine.




 Directory Layout

src/
├── components/
│   ├── auth/
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── dashboard/
│   │   ├── CalendarView.jsx
│   │   ├── ProgressChart.jsx
│   │   └── UpcomingSessions.jsx
│   ├── tasks/
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskList.jsx
│   └── UI/
│       ├── Button.jsx
│       ├── Modal.jsx
│       └── Navbar.jsx
├── pages/
│   ├── Dashboard.jsx
│   ├── Home.jsx
│   └── Settings.jsx
├── App.js
└── index.js




 Dashboard Screen

The Dashboard screen provides an overview of your subjects, tasks, and sessions. It helps you keep track of your study progress and upcoming deadlines.

Add a Subject

1. Navigate to the "Add Subject" screen from the Dashboard.
2. Enter the subject name and any additional details.
3. Click "Save" to add the subject to your list.

 Add a Task

1. Select a subject from your list.
2. Navigate to the "Add Task" screen.
3. Enter the task details, such as title, description, and due date.
4. Click "Save" to associate the task with the selected subject.

Create a Session

1. Select a subject from your list.
2. Navigate to the "Create Session" screen.
3. Enter the session details, such as date, start time, and duration.
4. Click "Save" to schedule the session for the selected subject.


