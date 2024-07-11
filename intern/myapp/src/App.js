import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Form from './components/Form';
import Signup from './components/Signup';
import Service from './components/Service';
import StudentDashboard from './components/StudentDashboard';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <div className="app">
      {/* <Navbar/> */}
      {/* <header>
        <div className="logo">
          BlueStone Overseas Consultants
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/form">Form</Link>
          <Link to="/login">Login</Link>
          
        </nav>
      </header> */}
    
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} /> {/* Placeholder for Services page */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/form" element={<Form />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
