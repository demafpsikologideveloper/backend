# DEMAF Psikologi Backend

DEMAF Psikologi Backend.

## How to Run

Start:

```sh
npm start
# or
yarn start
```

Development:

```sh
npm run dev
# or
yarn dev
```

# REST API Endpoints

## Admin

| Endpoint           | Method | Description            | isAuthenticated | isAdmin |
| ------------------ | ------ | ---------------------- | --------------- | ------- |
| `/`                | GET    | Hello                  |                 |         |
| `/buyers/register` | POST   | Register new buyer     |                 |         |
| `/buyers/login`    | POST   | Login to buyer         |                 |         |
| `/buyers/profile`  | GET    | Get buyer profile      | YES             |         |
| `/buyers/:id`      | GET    | Get one buyer by id    |                 |         |
| `/buyers`          | GET    | Get all buyers         |                 |         |
| `/buyers/:id`      | DELETE | Delete one buyer by id | YES             |         |

| Endpoint     | Method | Description           |
| ------------ | ------ | --------------------- |
| `/`          | GET    | Hello                 |
| `/users`     | GET    | List of Users         |
| `/users`     | POST   | Create new user       |
| `/users/:id` | DELETE | Delete one user by id |
