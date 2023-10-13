# Themoviedb

### Basic functionalities:

The application is divided into two sections:
- A header that contains a link to the main page, a movie search engine and a link that leads to the movies rated by the user.
 
  This header is displayed on all screens.

- A section displayed below the header that contains the pages:

  The main screen loads in the **"/"** path and shows a list of the most popular movies.

  The movies that the user is looking for are loaded in a path similar to **"/search?query={movie}"**

  The details of a movie are shown in the path **"/movie/{idMovie}"**

  Movies rated by the user are displayed in the path **"/myList"**

The design of the application is oriented by functionalities, that is, the application will be divided into modules or functionalities where each one will contain all the code necessary to implement a specific functionality within the application.

Any code that is shared will be located in the folder shared.

The 3 functionalities implemented are: 
- movies
- details
- ratings.

Within each module or functionality you will mainly find the folders:
- components
- page
- services
- slices: contains the slice and asynchronous actions handled by redux toolkit

### Information technology

The project is divided into two branches:

- **main:** Contains the code developed for the webapp
- **develop:** This branch was created from main after the development of the webapp was finished

**Main technologies used:**

- Vite
- Typescript
- React 18
- Reduxjs/toolkit
- Tailwind

**Third party library:**

- @material-tailwind/react
- react-infinite-scroll-component
- react-sticky-box
- react-toastify

**Test libraries:**

- React Testing Library
- @faker-js/faker
- vitest

**Observations**

The APIs used in development are located in the **.env.development file**

In addition, a personal API https://github.com/isma3l/server-proxy was used to eliminate the problem with CORS presented by Themoviedb's API that rates movies.

The **Router.tsx** file contains the routes of the webapp, the pages are loaded using lazy and suspense.

### Steps to test the application

#### Initial steps
Clone the repository
- **git clone**


Install the dependencies In the root of the cloned project run the following command:
- **yarn install**

### Run the tests

In the root of the project run:

- **yarn test**
### Test webapp in development mode

Although it is not recommended to save environment variables in the repository, since it is a proof of concept, the **.env.development** file that contains the URLs is left to test the application.

In the root of the project run:

- **yarn dev**

After executing the command a local server will be executed at http://127.0.0.1:5173/ and the browser with the web application will be opened.

### Test webapp in production mode

The webapp is deployed in https://themovie-db.vercel.app/

:D