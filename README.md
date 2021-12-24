# openSourceProject_SophieMoerman
How to start this application
First create a .env file Then copy the .env example and paste to the .env file

To run this app run "docker-compose up --build -d"

OR locally use the command "npm start"

Endpoints
GET
"/students" 
List all the students with their information

"/students/:studentId" 
List students with their information based on studentId

Params structure
studentId: integer

POST
"/students" 
post a new student to the database

Request body schema: application/json

Body structure:
firstname: string lastname: string birthday: string studentnr: integer

PUT
"/students" 
update a student


DELETE
"/students/:studentId" 
delete a student based on id

Params structure
studentId: integer