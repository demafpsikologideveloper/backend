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
  register: async (req, res) => {
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
  }
};
