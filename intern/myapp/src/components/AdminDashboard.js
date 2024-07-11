import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../assets/css/Dashboard.css';

function AdminDashboard() {
  const [students, setStudents] = useState([]);
  const [applications, setApplications] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [messages, setMessages] = useState([]);
  const [reports, setReports] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch student data
    axios.get('/api/admin/students').then(response => setStudents(response.data));

    // Fetch applications data
    axios.get('/api/admin/applications').then(response => setApplications(response.data));

    // Fetch tasks data
    axios.get('/api/admin/tasks').then(response => setTasks(response.data));

    // Fetch messages data
    axios.get('/api/admin/messages').then(response => setMessages(response.data));

    // Fetch reports data
    axios.get('/api/admin/reports').then(response => setReports(response.data));

    // Fetch notifications data
    axios.get('/api/admin/notifications').then(response => setNotifications(response.data));
  }, []);

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>

      <div className="dashboard-section">
        <h2>Overview</h2>
        <p>Number of students: {students.length}</p>
        <p>Number of applications: {applications.length}</p>
        <p>Number of tasks: {tasks.length}</p>
        {/* Add other overview metrics here */}
      </div>

      <div className="dashboard-section">
        <h2>Student Management</h2>
        <ul>
          {students.map(student => (
            <li key={student.id}>{student.name} - {student.email}</li>
          ))}
        </ul>
      </div>

      <div className="dashboard-section">
        <h2>Application Management</h2>
        <ul>
          {applications.map(application => (
            <li key={application.id}>{application.university} - {application.status}</li>
          ))}
        </ul>
      </div>

      <div className="dashboard-section">
        <h2>Task Assignment</h2>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>{task.description} - Due: {task.dueDate}</li>
          ))}
        </ul>
      </div>

      <div className="dashboard-section">
        <h2>Messaging</h2>
        <ul>
          {messages.map(message => (
            <li key={message.id}>{message.from}: {message.content}</li>
          ))}
        </ul>
      </div>

      <div className="dashboard-section">
        <h2>Reports</h2>
        <ul>
          {reports.map(report => (
            <li key={report.id}>{report.title} - {report.date}</li>
          ))}
        </ul>
      </div>

      <div className="dashboard-section">
        <h2>Notifications</h2>
        <ul>
          {notifications.map(notification => (
            <li key={notification.id}>{notification.content}</li>
          ))}
        </ul>
      </div>

      <div className="dashboard-section">
        <h2>Financial Tracking</h2>
        <p>Manage and track payments</p>
      </div>

      <Link to="/logout">Logout</Link>
    </div>
  );
}

export default AdminDashboard;
