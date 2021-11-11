const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;


/**
 * [GET] Test endpoint
 * @returns returns (string) "Hello World" if server is active
 */

app.get('/owner', async (req, res) => {
    res.json({
        name: 'Sophie'
    });

});

app.post('/', async (req, res) => {
    res.json({
        message: 'the text has been posted'
    });
});

app.put('/', async (req, res) => {
    res.json({
        message: 'The text has been updated'
    });
});

app.delete('/', async (req, res) => {
    res.json({
        message: 'deleting complete'
    });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

module.exports = app;