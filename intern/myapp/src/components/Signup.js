import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email === '' && password === '') {
      alert('Please fill in both email and password fields.');
    } else if (confirmPassword !== password) {
      alert('Passwords do not match');
    } else {
      try {
        const response = await axios.post('http://localhost:3001/signup', {
          username,
          email,
          password
        });

        if (response.data.message) {
          alert(response.data.message);
          navigate('/'); // Redirect to home page after successful signup
        }
      } catch (error) {
        console.error('Error during signup:', error);
        alert('An error occurred during signup. Please try again.');
      }
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
