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

| Endpoint          | Method | Description    | isAuthenticated | isAdmin |
| ----------------- | ------ | -------------- | --------------- | ------- |
| `/admin/register` | POST   | Register admin |                 |         |
| `/admin/login`    | POST   | Login admin    |                 |         |
| `/`               | GET    | Hello          |                 |         |
| `/`               | GET    | Hello          |                 |         |
| `/`               | GET    | Hello          |                 |         |
| `/`               | GET    | Hello          |                 |         |

## Users

| Endpoint          | Method | Description           | isAuthenticated | isAdmin |
| ----------------- | ------ | --------------------- | --------------- | ------- |
| `/`               | GET    | Hello                 |                 |         |
| `/users/register` | POST   | Register new user     |                 |         |
| `/users/login`    | POST   | Login to user         |                 |         |
| `/users/profile`  | GET    | Get user profile      | YES             |         |
| `/users/:id`      | GET    | Get one user by id    |                 |         |
| `/users`          | GET    | Get all users         |                 |         |
| `/users/:id`      | DELETE | Delete one user by id | YES             |         |

## News

| Endpoint    | Method | Description        | isAuthenticated | isAdmin |
| ----------- | ------ | ------------------ | --------------- | ------- |
| `/news`     | GET    | Get all news       |                 |         |
| `/news/:id` | GET    | Get one news by id |                 |         |
| `/news`     | POST   | Create new news    |                 |         |
