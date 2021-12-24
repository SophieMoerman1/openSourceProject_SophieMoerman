"use strict";

let db, collection;

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 2000;

const bodyparser = require('body-parser');
const cors = require('cors');
const {
    ObjectId
} = require('mongodb');
const {
    query
} = require('express');

//Mongodb config
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@cluster0.ytppd.mongodb.net/studentsdb?retryWrites=true&w=majority";
const dbName = "studentsdb";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.use(cors());


/**
 * [GET] Test endpoint
 * @returns returns (string) "firstname", (string) "lastname", (string) "birthday" and (int) "studentnr" if server is active
 */

app.get('/students', async (req, res) => {

    const query = {};
    if (req.query.firstname) {
        query.firstname = req.query.firstname;
    }
    if (req.query.lastname) {
        query.lastname = req.query.lastname;
    }
    if (req.query.birthday) {
        query.birthday = req.query.birthday;
    }
    if (req.query.studentnr) {
        query.studentnr = req.query.studentnr;
    }
    collection = db.collection("students");
    collection.find(query).toArray((err, results) => {
        if (err) {
            return res.send(err);
        }
        res.json(results);
    });

});

/**
 * [POST] Test endpoint
 * @returns returns (string) "the text has been posted" if server is active
 */

app.post('/students', async (req, res) => {
    try {
        collection = db.collection("students");
        const result = await collection.insertOne(req.body);
        res.json(result);
    } catch (err) {
        return res.send(err);
    }

});

app.get('/students/:studentId', async (req, res) => {
    try {
        collection = db.collection("students");
        let studentId = new ObjectId(req.params.studentId);
        const result = await collection.findOne({
            _id: studentId
        });
        res.json(result);
        console.log(result);
    } catch (err) {
        return res.send(err);
    }
});

/**
 * [PUT] Test endpoint
 * @returns returns (string) "the text has been posted" if server is active
 */

app.put('/students/:studentId', async (req, res) => {
    try {
        collection = db.collection("students");
        let studentId = new ObjectId(req.params.studentId);
        const result = await collection.findOne({
            _id: studentId
        });
        res.json(result);
    } catch (err) {
        return err;
    }

});

/**
 * [DELETE] Test endpoint
 * @returns returns (string) "the text has been posted" if server is active
 */

app.delete('/students/:studentId', async (req, res) => {
    try {
        collection = db.collection("students");
        let studentId = new ObjectId(req.params.studentId);
        const result = await collection.deleteOne({
            _id: studentId
        });
        res.send('data has been removed');

    } catch (err) {
        return res.send(err);
    }
});

/**
 * [LISTEN] Test endpoint
 * @returns returns (string) "the text has been posted" if server is active
 */

app.listen(port, () => {
    console.log(`Webproject exercise running at http://localhost:${port}`);
    client.connect(err => {
        if (err) {
            throw err;
        }
        db = client.db(dbName);
        //listDatabases(client);
        console.log(`connected to database: ${dbName}`);
    });
});

module.exports = app;