require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT;

app.use(bodyParser());
app.use(cors());

app.listen(port, () => {
  console.log(`Express app is listening on localhost:${port}`);
});

const root = require('./middlewares/index');
const users = require('./middlewares/users');

app.get('/', root.hello);
// app.get('/users/', users.allUsers);
app.post('/users/register', users.register);
