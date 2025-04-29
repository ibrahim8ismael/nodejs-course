const express = require('express');
const app = express();
const port = 3000;


console.log('This the test line');

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})