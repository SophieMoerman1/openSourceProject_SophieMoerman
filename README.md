
# openSourceProject_SophieMoerman
<p >Open Source Project for Development 5 course. <br>
</p>

# How to start this application
<p >First create a .env file Then copy the .env example and paste to the .env file <br>
To run this app run "docker-compose up --build -d" <br>
OR locally use the command "npm start"
</p>

# Endpoints

## **GET**
```bash
"/students" 
```
List all the students with their information

```bash
"/students/:studentId" 
```
List students with their information based on studentId

### **Params structure**

studentId: integer


## **POST**
```bash
"/students" 
```

post a new student to the database

Request body schema: application/json

### **Body structure:**

firstname: string lastname: string birthday: string studentnr: integer

## **PUT**
```bash
"/students" 
```
update a student


## **DELETE**
```bash
"/students/:studentId" 
```
delete a student based on id

### **Params structure**

studentId: integer

## **TESTS**

put this section in comments to make tests work

```bash
app.listen(port, () => {
    console.log(`Webproject exercise running at http://localhost:${port}`);
    client.connect(err => {
        if (err) {
            throw err;
        }
        db = client.db(dbName);
    });
});
```


