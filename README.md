# Summer Geeks Submission 
This web application was formulated as a part of SDE internship Assignment at Innnovaccer, using NodeJS, Mongodb, NodeMailer for emails and Nexmo for Mobile Messages, according to the [question](https://summergeeks.in/static/assignments/summergeeks%202020%20-%20SDE%20Assignment.pdf).  

## Preview

### Checkin Form
![Display GIF](ss/display.gif)

### Checkout Email
![Email Shot](https://i.imgur.com/plMaKGM.png)

## Techologies Used
### Backend
* [Nexmo](https://www.nexmo.com/) - SMS sending API

* [Nodemailer](https://nodemailer.com/) - SMTP protocol client used to send emails from computer.

*  [Express](https://expressjs.com/) - Web Application Framework.

* [Nodejs](https://nodejs.org/en/) - Version 10.10 

* [MongoDB](https://www.mongodb.com/) -Relational Database Management System.

### Frontend
* [Bootstrap](https://getbootstrap.com/) - Front-end Component Library.

* [CSS](https://www.w3schools.com/css/css_intro.asp) - Provides Styling for HTML.

* [HTML](https://www.w3schools.com/html/) - Standard markup language for Web pages

  
## Description  
The application keeps a record of the visitors coming in and out. It is done in the following way : 
- Every time the visitor enters the office , he/she has to check-in by entering the host`s name, email address, phone number on the front end.  
- Now , we save this info in a database and send the Host an Email about the Visitor, along with a text sms. The Visitor also receives an email which he/she can click when checking out and will receive the details of the visit over Email and Text.
  
## Installation  
- Install Mongodb from this [tutorial](https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514).
- Install NodeJs from this [tutorial](https://www.guru99.com/download-install-node-js.html).
- Start Mongodb and create the table for the project.
- Run ```npm install``` to install the node dependencies.
  
## Usage  
- Start the server by  going to the back-end directory with ```app.js``` and start the server with the command ```node app.js```  
- Server will start on PORT:3000.
