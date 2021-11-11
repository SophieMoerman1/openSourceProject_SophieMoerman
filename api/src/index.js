const express = require('express');
const server = express();
const PORT = 3000;


/**
 * [GET] Test endpoint
 * @returns returns (string) "Hello World" if server is active
 */

server.get('/', function (req, res) {
    res.send('Hello World!');
});

server.put('/', function (req, res) {
    return res.send('Received a PUT HTTP method');
});

server.delete('/', function (req, res) {
    res.send('Received a DELETE HTTP method');
});

server.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});