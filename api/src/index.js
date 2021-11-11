const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

module.exports = app;
/**
 * [GET] Test endpoint
 * @returns returns (string) "Hello World" if server is active
 */

app.get('/', function (req, res) {
    res.send('Let us get started');
    const myName = new Name('Sophie');
    const myAge = new Age(21);

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