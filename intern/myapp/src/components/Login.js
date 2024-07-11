import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password
      });

      if (response.data.message === 'Login successful') {
        const userRole = response.data.role; // Assuming your backend returns the user's role
        const userId = response.data.user.id; // Ensure the backend returns the user's ID in the user object

        localStorage.setItem('userId', userId); // Save user ID in local storage

        if (userRole === null) {
          navigate('/student-dashboard');
        } else if (userRole === 'admin') {
          navigate('/admin-dashboard');
        }
      } else {
        alert(response.data.error || 'An error occurred during login.');
      }

    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <p className="mt-3">Don't have an account? <Link to="/signup">Signup here</Link></p>
    </div>
  );
}

export default Login;
