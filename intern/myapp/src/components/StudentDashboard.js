import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../assets/css/Dashboard.css';

function StudentDashboard() {
  const [profile, setProfile] = useState({});
  const [applications, setApplications] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [messages, setMessages] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch profile data
    axios.get('/api/student/profile?id=1') // Replace with dynamic user ID
      .then(response => setProfile(response.data))
      .catch(error => {
        console.error('Error fetching profile:', error);
        setProfile({});
      });

    // Fetch applications data
    axios.get('/api/student/applications?id=1') // Replace with dynamic user ID
      .then(response => setApplications(response.data))
      .catch(error => {
        console.error('Error fetching applications:', error);
        setApplications([]);
      });

    // Fetch tasks data
    axios.get('/api/student/tasks?id=1') // Replace with dynamic user ID
      .then(response => setTasks(response.data))
      .catch(error => {
        console.error('Error fetching tasks:', error);
        setTasks([]);
      });

    // Fetch messages data
    axios.get('/api/student/messages?id=1') // Replace with dynamic user ID
      .then(response => setMessages(response.data))
      .catch(error => {
        console.error('Error fetching messages:', error);
        setMessages([]);
      });

    // Fetch notifications data
    axios.get('/api/student/notifications?id=1') // Replace with dynamic user ID
      .then(response => setNotifications(response.data))
      .catch(error => {
        console.error('Error fetching notifications:', error);
        setNotifications([]);
      });
  }, []);

  return (
    <div className="dashboard">
      <h1>Student Dashboard</h1>
      
      <div className="dashboard-section">
        <h2>Profile Overview</h2>
        <p>Name: {profile.name || 'N/A'}</p>
        <p>Email: {profile.email || 'N/A'}</p>
        <p>Phone: {profile.phone || 'N/A'}</p>
        {/* Add other profile details here */}
      </div>
      
      <div className="dashboard-section">
        <h2>Application Status</h2>
        <ul>
          {applications.map(application => (
            <li key={application.id}>{application.university} - {application.status}</li>
          ))}
        </ul>
      </div>
      
      <div className="dashboard-section">
        <h2>Upcoming Tasks</h2>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>{task.description} - Due: {task.dueDate}</li>
          ))}
        </ul>
      </div>
      
      <div className="dashboard-section">
        <h2>Messages</h2>
        <ul>
          {messages.map(message => (
            <li key={message.id}>{message.from}: {message.content}</li>
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
        <h2>Document Upload</h2>
        <input type="file" name="document" />
        <button>Upload</button>
      </div>
      
      <div className="dashboard-section">
        <h2>Calendar</h2>
        <p>Integrate with a calendar to show important dates</p>
      </div>
      
      <Link to="/logout">Logout</Link>
    </div>
  );
}

export default StudentDashboard;
