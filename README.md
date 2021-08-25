# Tech Blog - MVC Demo

  ## Description
  
  This is a simple CMS-Style blog application built to demonstrate knowledge of the Model View Controller structure in web app development. It allows the user to create an account with an encrypted password and then create posts or comment on other user's content. All data is stored in a MySQL database. Express is used as a routing controller, Sequelize ORM is used to interact with the database on the backend, and Handlebars is used as a View Controller.
  

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Questions](#questions)
  

  ## Installation
  
  To run a copy of this application locally, a MySQL database is required. After creating a database, a .env file will have to be created in the application's directory with the following format: 
  
  ```
DB_NAME=[Database Name]
DB_USER=[Database Username]
DB_PASSWORD=[Database Password]
SECRET=[Secret Phrase for Sessions]
  ```
  
   NPM dependecies will have to be installed for the app to run. To do this, run ```npm i ``` in the console from the app directory. Once these steps are complete, you can start the application by running ```npm start```
  

  ## Usage
  
  Posts and comments can only be created when logged in to a valid account. To interact with the database behind the scenes, a CRUD client like Insomnia can be created to interact with API routes and delete/update content. 
  
  ## Deployed Application
  
  A link to a live, deployed instance of this application can be found [HERE](https://ak-tech-blog.herokuapp.com/)
  

  ## Questions
  
  Contact me at my [Github Profile](https://github.com/AnthonyKrueger)
  or my email address: anthonykrueger0@gmail.com
