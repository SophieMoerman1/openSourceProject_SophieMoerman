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

server.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});