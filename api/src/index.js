const express = require('express');
//const bodyParser = require("body-parser");
const app = express();
const PORT = 4000;

const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
        host: proces.env.POSTGRES_HOST,
        port: 5432,
        user: proces.env.POSTGRES_USER,
        password: proces.env.POSTGRES_PASSWORD,
        database: proces.env.POSTGRES_DATABASE
    }
});

/**
 * [GET] Test endpoint
 * @returns returns (string) "Sophie" if server is active
 */

app.get('/owner', async (req, res) => {
    res.json({
        name: 'Sophie'
    });

});

/**
 * [POST] Test endpoint
 * @returns returns (string) "the text has been posted" if server is active
 */

app.post('/', async (req, res) => {
    res.json({
        message: 'the text has been posted'
    });
});

/**
 * [PUT] Test endpoint
 * @returns returns (string) "the text has been posted" if server is active
 */

app.put('/', async (req, res) => {
    res.json({
        message: 'The text has been updated'
    });
});

/**
 * [DELETE] Test endpoint
 * @returns returns (string) "the text has been posted" if server is active
 */

app.delete('/', async (req, res) => {
    res.json({
        message: 'deleting complete'
    });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

module.exports = app;