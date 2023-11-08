const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const bcrypt = require('bcryptjs');
const sqlite3 = require('sqlite3').verbose()
const saltRounds = 10;

const db = new sqlite3.Database('./database/quiztasticQuestions.db')
const db_login = new sqlite3.Database('./database/login_database.db');



const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(cors({ origin: 'http://localhost:5173' }));


app.get('/api/mathematics', (req, res) => {
  const query = 'SELECT * FROM mathematics'
  db.all(query, (err, rows) => {
    if (err) {
      console.error(err)
      res.status(500).json({ error: 'Internal Server Error' })
    } else {
      res.json(rows)
    }
  })
})

app.get('/api/science', (req, res) => {
  const query = 'SELECT * FROM science'
  db.all(query, (err, rows) => {
    if (err) {
      console.error(err)
      res.status(500).json({ error: 'Internal Server Error' })
    } else {
      res.json(rows)
    }
  })
})

app.get('/api/history', (req, res) => {
  const query = 'SELECT * FROM history'
  db.all(query, (err, rows) => {
    if (err) {
      console.error(err)
      res.status(500).json({ error: 'Internal Server Error' })
    } else {
      res.json(rows)
    }
  })
})

app.get('/api/geography', (req, res) => {
  const query = 'SELECT * FROM geography'
  db.all(query, (err, rows) => {
    if (err) {
      console.error(err)
      res.status(500).json({ error: 'Internal Server Error' })
    } else {
      res.json(rows)
    }
  })
})

app.get('/api/language', (req, res) => {
  const query = 'SELECT * FROM language'
  db.all(query, (err, rows) => {
    if (err) {
      console.error(err)
      res.status(500).json({ error: 'Internal Server Error' })
    } else {
      res.json(rows)
    }
  })
})

app.get('/api/sweden', (req, res) => {
  const query = 'SELECT * FROM sweden'
  db.all(query, (err, rows) => {
    if (err) {
      console.error(err)
      res.status(500).json({ error: 'Internal Server Error' })
    } else {
      res.json(rows)
    }
  })
})
db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='users'", (err, row) => {
  if (err) {
    console.error(err.message);
  } else if (!row) {
    db.run('CREATE TABLE users(id INTEGER PRIMARY KEY, username TEXT, password TEXT)', (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Table created successfully');
      }
    });
  }
});


// Registration endpoint
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  db_login.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], function (err) {
    if (err) {
      res.status(500).send('Error registering new user');
    } else {
      res.status(201).send({ id: this.lastID });
    }
  });
});

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  db_login.get('SELECT * FROM users WHERE username = ?', [username], async (err, user) => {
    if (user && await bcrypt.compare(password, user.password)) {
      res.status(200).send({ message: 'Login successful' });
    } else {
      res.status(401).send({ message: 'Invalid credentials' });
    }
  });
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

