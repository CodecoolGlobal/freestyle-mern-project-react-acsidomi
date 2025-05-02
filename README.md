<p align="center">
  <img src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/96/external-readme-is-a-easy-to-build-a-developer-hub-that-adapts-to-the-user-logo-regular-tal-revivo.png" width="100" />
</p>
<p align="center">
    <h1 align="center">FREESTYLE-MERN-PROJECT- TRIVIA</h1>
</p>
<p align="center">
    <em><code>A Trivia game MERN project</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/last-commit/CodecoolGlobal/freestyle-mern-project-react-acsidomi?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/CodecoolGlobal/freestyle-mern-project-react-acsidomi?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/CodecoolGlobal/freestyle-mern-project-react-acsidomi?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
  		<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	</a>
	<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank">
		<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">	
	</a>
	<a href="https://react.dev/reference/react" target="_blank">
		<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	</a>
	<a href="https://www.json.org/json-en.html" target="_blank">
		<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
	</a>
	<a href="https://expressjs.com" target="_blank">
		<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
	</a>
	<a href="https://www.mongodb.com/docs/" target="_blank">
  		<img src="https://img.shields.io/badge/MongoDB-47A248.svg?style=flat&logo=MongoDB&logoColor=white" alt="MongoDB">
	</a>
	<a href="https://nodejs.org/en" target="_blank">
  		<img src="https://img.shields.io/badge/Node.js-000000.svg?style=flat&logo=node.js&logoColor=white" alt="Node.js">
	</a>
	<a href="https://mongoosejs.com" target="_blank">
		<img src="https://img.shields.io/badge/Mongoose-000000.svg?style=flat&logo=Mongoose&logoColor=white" alt="mongoose">
	</a>
</p>
<hr>

## Quick Links

> - [ Overview](#overview)
> - [ Features](#features)
> - [ Repository Structure](#repository-structure)
> - [ Modules](#modules)
> - [ Getting Started](#getting-started)
>   - [ Installation](#installation)
>   - [ Running freestyle-mern-project-react-acsidomi](#running-freestyle-mern-project-react-acsidomi)
> - [ Contributing](#contributing)
> - [ Acknowledgments](#acknowledgments)

---

## Overview

This project is a trivia game application built using the MERN stack (MongoDB, Express, React, Node.js). The server side is implemented using Node.js with Express for handling routes and middleware, MongoDB for the database, and Mongoose for object data modeling. The application allows users to register, login, and participate in trivia quizzes. Users can answer trivia questions, and their scores are stored and managed in the database.

---

## Features

- **User Authentication**: Register and login functionality for users, ensuring secure access to the application.
- **Trivia Questions**: A variety of trivia questions across different categories are available.
- **Score Tracking**: User scores are tracked and stored, allowing users to see their performance over time.
- **RESTful API**: The server provides a RESTful API for interacting with the trivia questions and user data.
- **Database Management**: Uses MongoDB for storing user information, trivia questions, and scores.
- **Environment Configuration**: Utilizes dotenv for managing environment variables securely.
- **Auto-Reload**: Nodemon is used in development to automatically restart the server on code changes.
- **Fetch API**: Utilizes `node-fetch` for making server-side HTTP requests.

---

## Repository Structure

```sh
└── freestyle-mern-project-react-acsidomi/
    ├── README.md
    ├── client
    │   └── trivia
    │       ├── .gitignore
    │       ├── README.md
    │       ├── package-lock.json
    │       ├── package.json
    │       ├── public
    │       │   ├── favicon.ico
    │       │   ├── index.html
    │       │   ├── manifest.json
    │       │   └── robots.txt
    │       └── src
    │           ├── App.css
    │           ├── App.js
    │           ├── App.test.js
    │           ├── components
    │           │   ├── AddQuestion.js
    │           │   ├── AdminSite.js
    │           │   ├── Home.js
    │           │   ├── Leaderboard.js
    │           │   ├── Login.js
    │           │   ├── Navbar.js
    │           │   ├── Quiz.js
    │           │   ├── Registration.js
    │           │   └── UserProfile.js
    │           ├── index.css
    │           ├── index.js
    │           ├── reportWebVitals.js
    │           └── setupTests.js
    └── server
        ├── .gitignore
        ├── filldatabase.js
        ├── fillusers.js
        ├── model
        │   ├── Score.js
        │   ├── TriviaSchema.js
        │   └── Users.js
        ├── package-lock.json
        ├── package.json
        ├── routes
        │   └── routes.js
        ├── server.js
        └── test.http
```

---

## Modules

<details closed><summary>client.trivia.src</summary>

| File                                                                                                                               | Summary                                                     |
| ---                                                                                                                                | ---                                                                 |
| [App.js](https://github.com/CodecoolGlobal/freestyle-mern-project-react-acsidomi/blob/master/client/trivia/src/App.js)             | Main component that sets up the structure of the React application. |
| [App.css](https://github.com/CodecoolGlobal/freestyle-mern-project-react-acsidomi/blob/master/client/trivia/src/App.css)           | CSS file for styling the App component.                     |
| [index.js](https://github.com/CodecoolGlobal/freestyle-mern-project-react-acsidomi/blob/master/client/trivia/src/index.js)         | Entry point of the React application that renders the App component. |
| [index.css](https://github.com/CodecoolGlobal/freestyle-mern-project-react-acsidomi/blob/master/client/trivia/src/index.css)       | CSS file for global styles applied to the application.      |

</details>


<details closed><summary>client.trivia.src.components</summary>

| File                                                                                                                                                | Summary                         |
| ---                                                                                                                                                 | ---                             |
| [Leaderboard.js](https://github.com/CodecoolGlobal/freestyle-mern-project-react-acsidomi/blob/master/client/trivia/src/components/Leaderboard.js)   | Displays the leaderboard with the top players and their scores. |
| [Home.js](https://github.com/CodecoolGlobal/freestyle-mern-project-react-acsidomi/blob/master/client/trivia/src/components/Home.js)                 | The homepage component that introduces the trivia game and provides navigation options. |
| [Login.js](https://github.com/CodecoolGlobal/freestyle-mern-project-react-acsidomi/blob/master/client/trivia/src/components/Login.js)               | Handles user login functionality with form inputs for username and password. |
| [Navbar.js](https://github.com/CodecoolGlobal/freestyle-mern-project-react-acsidomi/blob/master/client/trivia/src/components/Navbar.js)             | The navigation bar component that provides links to different sections of the application. |
| [Registration.js](https://github.com/CodecoolGlobal/freestyle-mern-project-react-acsidomi/blob/master/client/trivia/src/components/Registration.js) | Manages user registration with form inputs for creating a new account. |
| [AddQuestion.js](https://github.com/CodecoolGlobal/freestyle-mern-project-react-acsidomi/blob/master/client/trivia/src/components/AddQuestion.js)   | Allows admins to add new trivia questions to the database.|
| [AdminSite.js](https://github.com/CodecoolGlobal/freestyle-mern-project-react-acsidomi/blob/master/client/trivia/src/components/AdminSite.js)       | The admin panel component for managing the trivia game, including questions and user data. |
| [Quiz.js](https://github.com/CodecoolGlobal/freestyle-mern-project-react-acsidomi/blob/master/client/trivia/src/components/Quiz.js)                 | The main quiz component where users can answer trivia questions. |
| [UserProfile.js](https://github.com/CodecoolGlobal/freestyle-mern-project-react-acsidomi/blob/master/client/trivia/src/components/UserProfile.js)   | Displays the user's profile with their information and quiz performance. |

</details>


<details closed><summary>server</summary>

| File                                                                                                                              | Summary                         |
| ---                                                                                                                               | ---                             |
| [server.js](https://github.com/CodecoolGlobal/freestyle-mern-project-react-acsidomi/blob/master/server/server.js)                 | This file initializes the Express server, connects to the MongoDB database, and sets up middleware and routes. |
| [filldatabase.js](https://github.com/CodecoolGlobal/freestyle-mern-project-react-acsidomi/blob/master/server/filldatabase.js)     | This script populates the database with initial trivia questions and categories from a JSON file. |
| [test.http](https://github.com/CodecoolGlobal/freestyle-mern-project-react-acsidomi/blob/master/server/test.http)                 | This file contains HTTP requests for testing the server endpoints. |
| [fillusers.js](https://github.com/CodecoolGlobal/freestyle-mern-project-react-acsidomi/blob/master/server/fillusers.js)           | This script populates the database with initial user data from a JSON file. |

</details>

<details closed><summary>server.model</summary>

| File                                                                                                                                | Summary                         |
| ---                                                                                                                                 | ---                             |
| [Users.js](https://github.com/CodecoolGlobal/freestyle-mern-project-react-acsidomi/blob/master/server/model/Users.js)               | Defines the schema for the Users collection in MongoDB, including fields for username, email, password, and scores. |
| [Score.js](https://github.com/CodecoolGlobal/freestyle-mern-project-react-acsidomi/blob/master/server/model/Score.js)               | Defines the schema for the Score collection, which includes user ID, score value, and date. |
| [TriviaSchema.js](https://github.com/CodecoolGlobal/freestyle-mern-project-react-acsidomi/blob/master/server/model/TriviaSchema.js) | Defines the schema for the Trivia collection, including fields for question, answers, correct answer, and category. |

</details>

<details closed><summary>server.routes</summary>

| File                                                                                                                     | Summary                         |
| ---                                                                                                                      | ---                             |
| [routes.js](https://github.com/CodecoolGlobal/freestyle-mern-project-react-acsidomi/blob/master/server/routes/routes.js) | Sets up the API endpoints for the application, including routes for user authentication, retrieving trivia questions, and managing scores. |

</details>


## Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **JavaScript**: Node.js (version 14.x or newer is recommended)
* **dotenv**: `16.3.1`
* **express**: `4.18.2`
* **mongoose**: `7.5.3`
* **node-fetch**: `3.3.2`
* **nodemon**: `2.0.4` (devDependency, to automatically restart the server on changes)

### Installation

1. Clone the freestyle-mern-project-react-acsidomi repository:

```sh
git clone https://github.com/CodecoolGlobal/freestyle-mern-project-react-acsidomi
```

2. Change to the project directory:

```sh
cd freestyle-mern-project-react-acsidomi
```

3. Install the dependencies:

```sh
npm install
```

### Running freestyle-mern-project-react-acsidomi

Use the following command to run freestyle-mern-project-react-acsidomi:

```sh
node app.js
```

---


## Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/CodecoolGlobal/freestyle-mern-project-react-acsidomi/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/CodecoolGlobal/freestyle-mern-project-react-acsidomi/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/CodecoolGlobal/freestyle-mern-project-react-acsidomi/issues)**: Submit bugs found or log feature requests for Freestyle-mern-project-react-acsidomi.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/CodecoolGlobal/freestyle-mern-project-react-acsidomi
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---


## Acknowledgments

I would like to thank my teammates for their collaboration and contributions to this project:

- **[Attila Szolnoki](https://github.com/szoszo23)** 
- **[Dominik Ács](https://github.com/acsidomi)**

Your teamwork and dedication were invaluable in bringing this project to fruition.


[**Return**](#quick-links)

---
