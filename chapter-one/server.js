// The address of the server is: 
// URL -> http://localhost:3000
// IP ->  127.0.0.1:3000
const express = require('express');
const app = express();
const port = 3000;


let data = [
    {
        id: 1,
        name: 'John Doe',
        age: 30,
    }
]

// Set the Website endpoints here
app.get('/', (req, res) => {
    res.send('Hello World from the Get!!!');
})
app.get('/admin', (req, res) => {
    res.send('Hello World from the Admin!!!');
})

// Set the API endpoints here
app.get('/api/data', (req, res) => {
    res.send(data);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})