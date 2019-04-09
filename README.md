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

| Endpoint          | Method | Description           | isAuthenticated | isAdmin |
| ----------------- | ------ | --------------------- | --------------- | ------- |
| `/`               | GET    | Hello                 |                 |         |
| `/users/register` | POST   | Register new user     |                 |         |
| `/users/login`    | POST   | Login to user         |                 |         |
| `/users/profile`  | GET    | Get user profile      | YES             |         |
| `/users/:id`      | GET    | Get one user by id    |                 |         |
| `/users`          | GET    | Get all users         |                 |         |
| `/users/:id`      | DELETE | Delete one user by id | YES             |         |

## Users

| Endpoint     | Method | Description           |
| ------------ | ------ | --------------------- |
| `/`          | GET    | Hello                 |
| `/users`     | GET    | List of Users         |
| `/users`     | POST   | Create new user       |
| `/users/:id` | DELETE | Delete one user by id |
