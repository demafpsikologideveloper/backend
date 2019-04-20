const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'yourpassword',
    database: process.env.DB_DATABASE || 'yourdatabasename'
  }
});
module.exports = {
  getAllUsers: async (req, res) => {
    const getAllUsers = await knex
      .select('id', 'username', 'email')
      .from('users');

    res.send({
      message: 'List of all users',
      users: getAllUsers
    });
  },
  registerUser: async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    const user = {
      username: req.body.username,
      email: req.body.email,
      password
    };

    const newUser = await knex.insert(user).from('users');
    res.send({
      user: newUser,
      message: 'user has been created!'
    });
  },
  loginUser: async (req, res) => {
    let foundUser = await knex
      .select()
      .from('users')
      .where({ username: req.body.username });

    if (foundUser.length === 0) {
      res.status(404).send({
        message: 'not found'
      });
    } else {
      const authenticted = await bcrypt.compare(
        req.body.password,
        foundUser[0].password
      );

      if (authenticted === false) {
        res.status(401).send({
          message:
            'The username and password you entered did not match our records. Please double-check and try again.'
        });
      } else {
        const { password, salt, ...user } = foundUser[0];
        const payload = {
          user
        };
        const token = await jwt.sign(payload, process.env.SECRET);

        res.status(200).send({
          message: 'login success',
          token: token
        });
      }
    }
  }
};
