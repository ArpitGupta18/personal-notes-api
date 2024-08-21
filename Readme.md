# Personal Notes API

The Personal Notes API is a RESTful service that allows users to manage personal notes. It supports creating, retrieving, updating, and deleting notes. The notes are stored in local JSON file for persistence, and various middleware functions are used for logging requests, validating input, and handling errors.

## How to run

1.  Navigate to the main directory and open terminal

2.  Write the following commands

        npm install express cors nodemon

3.  Then to run the project

        npm run dev

## API Endpoints

-   Get Notes: /api/notes
-   Get a note: /api/notes/:id
-   Add note: /api/notes
-   Update note: /api/notes/:id
-   Delete a note: /api/notes/:id

## Postman URL

In order to add and update a note, you need to pass data through the request body to make changes.

### Get notes

    GET | http://localhost:3000/api/tasks

### Get a note by id

    GET | http://localhost:3000/api/tasks/1

### Add a note

    POST | http://localhost:3000/api/task

### Update a note

    PUT | http://localhost:3000/api/task/1

### Delete a note

    DELETE | http://localhost:3000/api/task/1
