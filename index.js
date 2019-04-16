require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT;

app.use(bodyParser());

const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'yourpassword',
    database: process.env.DB_DATABASE || 'yourdatabasename'
  }
});

// GET http://localhost:8000/

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/register', async (req, res) => {
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  };
  const newUser = await knex.insert(user).from('users');
  res.send({
    user: newUser,
    message: 'user has been created!'
  });
});

app.listen(port, () => {
  console.log(`Express app is listening on localhost:${port}`);
});
