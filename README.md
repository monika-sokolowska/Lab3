# User Management App

A simple React application that allows users to view, add, and delete users. The app communicates with a backend API for fetching and managing users. It features authentication, input validation, and error handling.

## Features

- **View Users**: Displays a list of users fetched from the backend.
- **Add User**: Allows you to add a new user with a first name, last name, and role. The form validates that all fields are filled before submission.
- **Delete User**: Allows you to delete a user from the list.

## Requirements

- Node.js and npm
- Backend API running on `http://localhost:8000` (with appropriate endpoints for fetching, adding, and deleting users, ex. `http://localhost:8000/api/users/`).

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/monika-sokolowska/Lab3
cd Lab3
```

### 2. Install dependencies

```bash
cd ui-app
npm i
```

### 3. Run server

```bash
cd backend
py manage.py runserver
```

### 3. Run application

```bash
cd ui app
npm run dev
```
The app will be available at http://localhost:5173/
