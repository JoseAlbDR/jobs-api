
<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>jobs-api
</h1>
<h3>◦ Unlock limitless opportunities with jobs-API.</h3>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Express-000000.svg?style&logo=Express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/languages/top/JoseAlbDR/jobs-api?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/JoseAlbDR/jobs-api?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/JoseAlbDR/jobs-api?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/license/JoseAlbDR/jobs-api?style&color=5D6D7E" alt="GitHub license" />
</div>

---

## 📒 Table of Contents
- [📒 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [⚙️ Features](#-features)
- [📂 Project Structure](#project-structure)
- [🧩 Modules](#modules)
- [🚀 Getting Started](#-getting-started)
- [🗺 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

The project is a job management API built with Node.js, Express, and MongoDB. It allows users to register, login, create, update, and delete job listings. The API also provides authentication and authorization using JWT tokens. Its value lies in providing a secure and scalable solution for managing job data with user access control.

---

## ⚙️ Features

| Feature                | Description                                                                                                                                              |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **⚙️ Architecture**     | The codebase follows a typical server-side architecture, where an Express server acts as the API backend with separate routes, controllers, and models. |
| **📖 Documentation**   | The codebase includes well-documented code snippets and clear inline comments, making it easy to understand and maintain.                                 |
| **🔗 Dependencies**    | The system relies on external libraries and tools such as Express, Mongoose, bcrypt, and Joi for various functionalities and error handling.            |
| **🧩 Modularity**      | The codebase is organized into smaller components such as controllers, middleware, routes, errors, models, and utility functions for better reusability. |
| **✔️ Testing**          | Without specific information mentioned, it is assumed that there is no explicit information or codebase reference related to the testing strategies. |
| **⚡️ Performance**      | Without specific information mentioned related to optimization or performance measurement, no conclusive remark can be made.                           |
| **🔐 Security**        | The system addresses security concerns by implementing authentication, password hashing, error handling for unauthorized requests, and sanitization of user input against XSS attacks. |
| **🔀 Version Control** | Git is used as the version control system, allowing easy collaboration, bug fixing, feature development, and maintainability.                               |
| **🔌 Integrations**    | There are no defined integrations with other systems mentioned in the given codebase.                                                                     |
| **📶 Scalability**     | While there is no direct mention of architecture scalability, the codebase's modular design and proper separation of concerns enable handling growth efficiently.          |

---


## 📂 Project Structure




---

## 🧩 Modules

<details closed><summary>Root</summary>

| File                                                                                                  | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---                                                                                                   | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [.eslintrc](https://github.com/JoseAlbDR/jobs-api/blob/main/.eslintrc)                                | This code snippet provides a comprehensive set of rules and configuration options for ESLint and TypeScript. It includes recommended rules, plugins, and parser options, ensuring code quality and adherence to best practices.                                                                                                                                                                                                                           |
| [index.ts](https://github.com/JoseAlbDR/jobs-api/blob/main/src\index.ts)                              | This code initializes an Express server with various middleware, including error handling and API rate limiting. It also sets up routes for authentication and CRUD operations on jobs. The server is connected to a database and serves Swagger documentation.                                                                                                                                                                                           |
| [auth.ts](https://github.com/JoseAlbDR/jobs-api/blob/main/src\controllers\auth.ts)                    | The provided code snippet contains two functions, "register" and "login", responsible for handling registration and authentication processes. The "register" function creates a new user based on the request body, generates a token, and sends a response with the user name and token. The "login" function checks if a user exists with the given email, verifies the password, generates a token, and sends a response with the user name and token. |
| [jobs.ts](https://github.com/JoseAlbDR/jobs-api/blob/main/src\controllers\jobs.ts)                    | This code snippet includes functions for handling CRUD operations on a Job model. getAllJobs retrieves all jobs created by the logged-in user. getJob retrieves a single job by its ID. createJob creates a new job. updateJob updates an existing job. deleteJob deletes a job by its ID.                                                                                                                                                                |
| [connect.ts](https://github.com/JoseAlbDR/jobs-api/blob/main/src\db\connect.ts)                       | The code connects to a MongoDB database using Mongoose ORM by retrieving the database URL from the environment variables configured in a.env file.                                                                                                                                                                                                                                                                                                        |
| [bad-request.ts](https://github.com/JoseAlbDR/jobs-api/blob/main/src\errors\bad-request.ts)           | The provided code snippet exports a class called BadRequestError that extends a CustomAPIError. It is used to handle and represent a bad request error with a custom message. It sets the HTTP status code to 400 (Bad Request) for this type of error.                                                                                                                                                                                                   |
| [custom-error.ts](https://github.com/JoseAlbDR/jobs-api/blob/main/src\errors\custom-error.ts)         | The code snippet defines a custom API error class that extends the built-in Error class. It takes a message and a status code as constructor arguments and sets them as public properties.                                                                                                                                                                                                                                                                |
| [index.ts](https://github.com/JoseAlbDR/jobs-api/blob/main/src\errors\index.ts)                       | The code snippet exports custom error classes for API operations including custom, bad request, unauthenticated, and not found errors.                                                                                                                                                                                                                                                                                                                    |
| [not-found.ts](https://github.com/JoseAlbDR/jobs-api/blob/main/src\errors\not-found.ts)               | The code snippet exports a class called NotFoundError, which extends a custom error class called CustomAPIError. It sets the error message and HTTP status code to be utilized when a requested resource is not found (HTTP status code 404).                                                                                                                                                                                                             |
| [unauthenticated.ts](https://github.com/JoseAlbDR/jobs-api/blob/main/src\errors\unauthenticated.ts)   | The code defines a custom error class called BadRequest that extends the CustomAPIError class. It accepts a message parameter in its constructor, which is passed to the base class along with the HTTP status code for unauthorized requests (401). The class is then exported as a default export.                                                                                                                                                      |
| [authentication.ts](https://github.com/JoseAlbDR/jobs-api/blob/main/src\middleware\authentication.ts) | This code snippet defines an authentication middleware function for an Express application. It extracts the JWT token from the request header, verifies it using a secret key, and attaches the decoded user information to the request object. It throws an error if the authentication is invalid.                                                                                                                                                      |
| [error-handler.ts](https://github.com/JoseAlbDR/jobs-api/blob/main/src\middleware\error-handler.ts)   | This code snippet is an error handling middleware function for an Express application. It handles different types of errors, such as custom errors, validation errors, cast errors, and duplicate MongoDB errors. It returns an appropriate error message and status code based on the type of error encountered.                                                                                                                                         |
| [joi-validation.ts](https://github.com/JoseAlbDR/jobs-api/blob/main/src\middleware\joi-validation.ts) | This code snippet exports a middleware function for validating the request body using a provided validation function. If the validation fails, it throws a BadRequestError with the error messages generated by Joi. Otherwise, it modifies the request object with the validated body and calls the next middleware function.                                                                                                                            |
| [not-found.ts](https://github.com/JoseAlbDR/jobs-api/blob/main/src\middleware\not-found.ts)           | The code snippet is a default handler for when a route does not exist. It uses the Express framework to send a "Route does not exist" response with a 404 status code.                                                                                                                                                                                                                                                                                    |
| [xssMiddleware.ts](https://github.com/JoseAlbDR/jobs-api/blob/main/src\middleware\xssMiddleware.ts)   | This code snippet implements an XSS middleware function in an Express application. The function sanitizes any user input in the request body by using the xss library, guarding against XSS attacks. The sanitized values are then stored back into the request body. The middleware function is exported as the default.                                                                                                                                 |
| [Job.ts](https://github.com/JoseAlbDR/jobs-api/blob/main/src\Models\Job.ts)                           | The code snippet defines a JobSchema using Mongoose, which represents a job with properties such as company name, position, status, and createdBy. It also sets default values and constraints for these properties. The JobSchema is then exported as the Job model.                                                                                                                                                                                     |
| [User.ts](https://github.com/JoseAlbDR/jobs-api/blob/main/src\Models\User.ts)                         | The provided code snippet defines a UserSchema using Mongoose, which includes fields for name, email, and password with various validation rules. It also includes pre-save middleware to hash the password securely using bcrypt, and two methods for creating a JWT token and checking the password. Finally, it exports the User model.                                                                                                                |
| [auth.ts](https://github.com/JoseAlbDR/jobs-api/blob/main/src\routes\auth.ts)                         | This code snippet represents a router module that handles authentication routes. It uses Express and includes functions for user login and registration. The code includes middleware for validating the request body using Joi validation. It also includes rate limiting using the express-rate-limit package to prevent abuse.                                                                                                                         |
| [jobs.ts](https://github.com/JoseAlbDR/jobs-api/blob/main/src\routes\jobs.ts)                         | This code snippet sets up the routing for a job management API using Express. It handles different HTTP methods for routes related to getting all jobs, creating a job, getting a specific job, updating a job, and deleting a job. It also applies input validation middleware for creating and updating jobs.                                                                                                                                           |
| [index.d.ts](https://github.com/JoseAlbDR/jobs-api/blob/main/src\types\index.d.ts)                    | This code snippet declares two global namespaces in TypeScript: 1.'Express' namespace modifies the'Request' interface to include a'user' property with'userId' and'username' fields. 2.'NodeJS' namespace modifies the'ProcessEnv' interface to include environment variables such as'PORT','DATABASE_URL','JWT_SECRET', and'JWT_LIFETIME'.                                                                                                               |
| [interfaces.ts](https://github.com/JoseAlbDR/jobs-api/blob/main/src\types\interfaces.ts)              | The provided code snippet defines various interfaces and types used in an Express application, including request bodies, models, user data, job data, and error handling for MongoDB.                                                                                                                                                                                                                                                                     |
| [authValidation.ts](https://github.com/JoseAlbDR/jobs-api/blob/main/src\utils\authValidation.ts)      | The code snippet exports two functions: "validateRegisterData" and "validateLoginData". These functions use the "joi" library to validate the structure and constraints of input data for user registration and login respectively. The validation includes checking the presence and format of email and password fields. If any errors occur during validation, corresponding error messages are returned.                                              |
| [jobsValidation.ts](https://github.com/JoseAlbDR/jobs-api/blob/main/src\utils\jobsValidation.ts)      | The code snippet provides two functions: validateCreateJobData and validateUpdateJobData. Both functions use Joi library for data validation. validateCreateJobData validates the input data for creating a job, and validateUpdateJobData validates the input data for updating a job, using predefined schema and error messages.                                                                                                                       |

</details>

---

## 🚀 Getting Started

### ✔️ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:
> - `ℹ️ Requirement 1`
> - `ℹ️ Requirement 2`
> - `ℹ️ ...`

### 📦 Installation

1. Clone the jobs-api repository:
```sh
git clone https://github.com/JoseAlbDR/jobs-api
```

2. Change to the project directory:
```sh
cd jobs-api
```

3. Install the dependencies:
```sh
npm install
```

### 🎮 Using jobs-api

```sh
npm run build && node dist/main.js
```

### 🧪 Running Tests
```sh
npm test
```

---


## 🗺 Roadmap

> - [X] `ℹ️  Task 1: Implement X`
> - [ ] `ℹ️  Task 2: Refactor Y`
> - [ ] `ℹ️ ...`


---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `ℹ️  INSERT-LICENSE-TYPE` License. See the [LICENSE](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository) file for additional info.

---

## 👏 Acknowledgments

> - `ℹ️  List any resources, contributors, inspiration, etc.`

---
