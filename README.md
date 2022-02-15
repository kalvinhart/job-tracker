# Job Application Tracker

## About This App

This app was created to allow users to keep a track of the jobs that they have applied to.

Jobs can be added and then displayed in a table which is sortable, filterable and searchable.

Individual jobs can be viewed and updated or deleted. The user can also add the date and time of an appointment interview and edit/delete this as applicable.

All data is stored using Firebase Firestore.

Authentication is handled with Firebase Authentication.

## Development

During development of this app I used the following technologies/dependencies:

- react
- react-router-dom
- react-table
- react-hook-form
- react-hot-toast
- firebase/firestore
- firebase/auth
- styled-components
- fontawesome
- uuid

The main feature of the application is the table displaying a list of jobs. For this I chose to use `react-table` as I wanted something with all the functionality of a table, but without any styling, allowing myself to easily add table styles to my liking.

The main functionality involves the use of a form to add jobs to the table. For this I chose to use `react-hook-form` in order to easily manage the state and error handling of this feature.

For storing data, I chose to use `firebase/firestore` as this was the simplest solution to compliment a front end as I currently do not have much back end knowledge. I also used `firebase/auth` to handle user authentication.

For styling I have again used `styled-components` as I enjoy the flexibility it gives with it's dynamic styles based on props. The design of the app is my own.

Finally, I chose to use `react-hot-toast` in order to give visual feedback to the user that an action has completed, or that an error has occurred. This library is very easy to set up and allows for a lot of customisation.
