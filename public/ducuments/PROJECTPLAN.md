## W05D05 - Mid-term Project Kickoff

### Group 5: Layla Duale, Abyan Mohamed. Leshan Patterson

## Pick a Project
•	Wiki Map
•	Quiz App  <-------
•	Story Creator
•	Decision Maker
•	PasswordKeepR
•	Smart TODO List
•	Resource Wall
•	Buy/Sell Listing Website
•	Schoodle
•	Food Pick-up Ordering

## User Stories For Quiz App
A user story describes how users will interact with your application
They have the form: As a ______, I want to ______, because ______.
•	As a user, I can create a quiz from any page I am on. (nav)
•	As a user, I can make my quiz unlisted (make them private and not available on the home page, but if someone knows the quiz URL they can visit and take the quiz). Only the owner of quiz can edit the quiz.
•	As a user, I can share a link to a single quiz (like tiny app).
•	As user I can see a list of public quiz. Other than the home page, possible on a second page.
•	As a user, I want to be able to access the quiz database from the main page. (main page quiz list like tinyapp, code from tinyapp)
•	As a user, I can attempt a quiz.
•	As a user, I can see the results of a recent quiz attempt.
•	As a user, I can share a link to the result of my attempt.

## User Scenarios
A user scenario is a syntactic alternative to user stories
They have the form: Given _____, when ______, then ______.
eg. Given that I am logged in, when I click favourite on a post, then it is added to my favourites.
You can also chain on an and to user stories/scenarios
eg. Given that I am logged in, when I click favourite on a post, then it is added to my favourites and the save icon will change to indicate success. 

## ERD
The user stories provide you with nouns (eg. user, posts, favourites)
Use these nouns/entities to build out your database (ie. tables are the nouns from the stories)
•	users
•	quizzes
•	quiz_results
•	questions (ref. quiz id and answer: id, quiz_id, context)
Routes
(Completed)
•	Once you know the resources that you'll have, write out the routes that you'll need to perform BREAD operations on those resources
•	Remember RESTful conventions (they make it much easier)
Server ← Routes ← Queries 
app.use(“/”, “../quiz” )  | routes.GET/routes.POST  |         pool.query(`SELECT`
B (GET)                      
R (GET)
E (PATCH/PASTE)
A (PUT)
D (PUT)
Quiz App Routes

## Quiz App Routes
•	Homepage- ‘/’ 
•	Quiz- ‘/quiz’
•	Create Quiz- ‘/create/quiz’ 
•	My Quiz- ‘/myresults’ 
•	Quiz Results- ‘/quizresults’ 

## MVP vs MVD
•	There is a concept in development of an MVP, the Minimum Viable Product
•	An MVP has just enough features to be useful to a user
•	This concept helps streamline the development process and help keep the team on target
•	For mid-terms, we want to focus on the MVD, the Minimum Viable Demo
•	If you aren't going to demo it, don't build it

## Wireframes
•	Draw out the structure of your web pages
•	This will make it much easier to build out these pages later
•	This is also a great opportunity to get input from all of the team members
•	Design matters... however you are a developer, not a designer
•	Get inspiration from websites you visit

## User Login
•	Don't do it
•	Seriously, don't do it
•	We know that you know how to register and login users
// do this instead app.get('/login/:id', (req, res) => {   // cookie-session middleware   req.session.user_id = req.params.id;    // cookie-parser middleware   res.cookie('user_id', req.params.id);    // send the user somewhere   res.redirect('/'); });

## Tech Choices
•	We have made all the tech choices for you
•	Back End: Node and Express
•	Front End: HTML, CSS, JS, jQuery, Bootstrap

## The Mid-term Skeleton
•	Use the provided node-skeleton as a template for your project
•	This will get you up and running quickly

## SPA vs Multi-page App
•	These concepts are not mutually exclusive
•	You can choose one or the other or both

## Git
•	Use Git best practices (ask a mentor for clarification if you need it)
•	Use branches

## DO NOT CODE ON MASTER
•	I repeat, do not code on master

## Splitting up the Work
•	Horizontally - whole team working on front-end or back-end at the same time
•	Vertically - divide the work between front-end and back-end
•	Pair Programming - working together on the same tasks

## Communication
•	Make sure to communicate with your team members
•	Use Slack, iMessage, Google Hangouts, whatever... just make sure that everyone is on the same page

## Github Projects
•	Github has a built-in project board (similar to a kanban board)

## Deployment
•	Decide if you want/need to deploy your application to the cloud
•	Ask a mentor for assistance/advice if your team decides to deploy
