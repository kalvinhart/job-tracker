# Job Application Tracker

This app was created to allow users to keep a track of the jobs that they have applied to.

Jobs can be added and then displayed in a list.

Individual jobs can be viewed and updated or deleted. The user can also add the date and time of an appointment interview and edit/delete this as applicable.

State management is handled with Redux Toolkit and the Context API.

All data is persisted using Firebase Firestore.

Authentication is handled with Firebase Authentication.

## Running Locally

#### Prerequisites

- A free account with Google Firebase.

#### 1. Clone the repo and install dependencies

```bash
git clone
npm i
```

#### 2. Create a .ENV file in the root folder

This should include the following firebase variables:

- `REACT_APP_API_KEY`
- `REACT_APP_AUTH_DOMAIN`
- `REACT_APP_PROJECT_ID`
- `REACT_APP_STORAGE_BUCKET`
- `REACT_APP_MESSAGING_SENDER_ID`
- `REACT_APP_APP_ID`

These can all be obtained from your firebase console.

#### 3. Start the application

```bash
npm start
```

## Features

- Add new jobs via a form.
- Display all added jobs in a list.
- Filter jobs by current status.
- View more details on individual jobs.
- Edit jobs.
- Delete jobs.
- Mark jobs as selected and then batch delete them.
- Add an interview date.

## Technologies/Packages

The packages used in creating this application are:

- react
- react-redux
- react-router-dom
- react-hook-form
- react-hot-toast
- firebase/firestore
- firebase/auth
- styled-components
- fontawesome
- uuid
