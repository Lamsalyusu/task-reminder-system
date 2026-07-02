# Task Reminder System

A RESTful Task Reminder System built with **Node.js**, **TypeScript**, **Express.js**, **Sequelize**, and **PostgreSQL**.

## Features

- Create, Read, Update and Delete (CRUD) Tasks
- Create, Read, Update and Delete (CRUD) Reminders
- PostgreSQL database
- Sequelize ORM
- Sequelize Migrations
- Environment variable support
- Swagger API Documentation
- TypeScript support

---

## Tech Stack

- Node.js
- TypeScript
- Express.js
- PostgreSQL
- Sequelize ORM
- Sequelize CLI
- Swagger UI
- dotenv

---

## Project Structure

```text
task-reminder-system/
│
├── database/
│   ├── config/
│   ├── migrations/
│   └── seeders/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── app.ts
│   └── server.ts
│
├── .env
├── .sequelizerc
├── package.json
├── tsconfig.json
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project

```bash
cd task-reminder-system
```

Install dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root.

Example:

```env
PORT=3000

DATABASE_URL=your_postgresql_connection_string
```

---

## Database Setup

Run all migrations

```bash
npx sequelize-cli db:migrate
```

Undo latest migration

```bash
npx sequelize-cli db:migrate:undo
```

Undo all migrations

```bash
npx sequelize-cli db:migrate:undo:all
```

---

## Running the Project

Development

```bash
npm run dev
```

or

```bash
npx ts-node src/server.ts
```

---

## API Endpoints

### Tasks

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/tasks` | Create Task |
| GET | `/api/tasks` | Get All Tasks |
| GET | `/api/tasks/:id` | Get Task by ID |
| PUT | `/api/tasks/:id` | Update Task |
| DELETE | `/api/tasks/:id` | Delete Task |

---

### Reminders

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/reminders` | Create Reminder |
| GET | `/api/reminders` | Get All Reminders |
| GET | `/api/reminders/:id` | Get Reminder by ID |
| PUT | `/api/reminders/:id` | Update Reminder |
| DELETE | `/api/reminders/:id` | Delete Reminder |

---

## Database Relationship

```text
Tasks
------
id
title
description
dueDate
status

        │
        │ One-to-Many
        ▼

Reminders
----------
id
taskId (Foreign Key)
reminderTime
status
```

- One Task can have multiple Reminders.
- One Reminder belongs to one Task.
- `onDelete: CASCADE` automatically deletes related reminders when a task is deleted.

---


## Author

**Yuyutsu Lamsal**