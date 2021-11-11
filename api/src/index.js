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

app.post('/', function (req, res) {
    res.send('the text has been posted');
});

app.put('/', function (req, res) {
    res.send('The text has been updated');
});

app.delete('/', function (req, res) {
    res.send('deleting complete');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

module.exports = app;