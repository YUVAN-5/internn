const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Create a MySQL connection pool
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Cortana@260',
  database: 'bluestone',
  connectionLimit: 10 // Adjust as per your application needs
});

// Check if the database connection is successful
db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('MySQL database connected!');
    connection.release();
  }
});

// Endpoint to handle signup
app.post('/signup', (req, res) => {
  const { username,email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ error: 'Email and Password are required' });
  }

  const query = 'INSERT INTO users (username,email, password) VALUES (?, ?,?)';
  db.query(query, [username,email, password], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send({ error: 'Database error' });
    }
    res.send({ message: 'User registered successfully' });
  });
});

// endpoint to handle login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ error: 'Email and Password are required' });
  }

  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send({ error: 'Database error' });
    }

    if (results.length === 0) {
      return res.status(401).send({ error: 'Invalid credentials' });
    }

    const user = results[0];
    res.send({ message: 'Login successful', role: user.role, user: user }); // Include the user object in the response
  });
});

  
  // Fetch student profile
  app.get('/api/student/profile', (req, res) => {
    const userId = req.query.id;
  
    if (!userId) {
      return res.status(400).send({ error: 'User ID is required' });
    }
  
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [userId], (err, results) => {
      if (err) {
        return res.status(500).send({ error: 'Database error' });
      }
      if (results.length === 0) {
        return res.status(404).send({ error: 'User not found' });
      }
      res.send(results[0]);
    });
  });
  

// Fetch student applications
app.get('/api/student/applications', (req, res) => {
  const query = 'SELECT * FROM applications WHERE student_id = ?';
  db.query(query, [req.query.id], (err, results) => {
    if (err) {
      return res.status(500).send({ error: 'Database error' });
    }
    res.send(results);
  });
});

// Fetch student tasks
app.get('/api/student/tasks', (req, res) => {
  const query = 'SELECT * FROM tasks WHERE student_id = ?';
  db.query(query, [req.query.id], (err, results) => {
    if (err) {
      return res.status(500).send({ error: 'Database error' });
    }
    res.send(results);
  });
});

// Fetch student messages
app.get('/api/student/messages', (req, res) => {
  const query = 'SELECT * FROM messages WHERE student_id = ?';
  db.query(query, [req.query.id], (err, results) => {
    if (err) {
      return res.status(500).send({ error: 'Database error' });
    }
    res.send(results);
  });
});

// Fetch student notifications
app.get('/api/student/notifications', (req, res) => {
  const query = 'SELECT * FROM notifications WHERE student_id = ?';
  db.query(query, [req.query.id], (err, results) => {
    if (err) {
      return res.status(500).send({ error: 'Database error' });
    }
    res.send(results);
  });
});

// Fetch admin data
app.get('/api/admin/students', (req, res) => {
  const query = 'SELECT * FROM students';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send({ error: 'Database error' });
    }
    res.send(results);
  });
});

app.get('/api/admin/applications', (req, res) => {
  const query = 'SELECT * FROM applications';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send({ error: 'Database error' });
    }
    res.send(results);
  });
});

app.get('/api/admin/tasks', (req, res) => {
  const query = 'SELECT * FROM tasks';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send({ error: 'Database error' });
    }
    res.send(results);
  });
});

app.get('/api/admin/messages', (req, res) => {
  const query = 'SELECT * FROM messages';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send({ error: 'Database error' });
    }
    res.send(results);
  });
});

app.get('/api/admin/reports', (req, res) => {
  const query = 'SELECT * FROM reports';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send({ error: 'Database error' });
    }
    res.send(results);
  });
});

app.get('/api/admin/notifications', (req, res) => {
  const query = 'SELECT * FROM notifications';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send({ error: 'Database error' });
    }
    res.send(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
