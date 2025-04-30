// The address of the server is: 
// URL -> http://localhost:3000
// IP ->  127.0.0.1:3000
const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

const data = ['james']

// Set the Website endpoints here
app.get('/', (req, res) => {
    res.send(`
            <body style="color:blue;background:pink;">
                <h1>Hello World</h1>
                <p>Welcome to my website the data is ${JSON.stringify(data)}</p>
            </body>
        `);
})
app.get('/admin', (req, res) => {
    res.send('Hello World from the Admin!!!');
})

// Set the API endpoints here
// (Crud-method) -> Create=post && Read=get && Update=put && Delete=delete
app.get('/api/data', (req, res) => {
    res.send(data);
})

app.post('/api/data', (req, res) => {
    const Funny = req.body;
    console.log(Funny);
    data.push(Funny.name);
    res.sendStatus(201);
    console.log("Hello From the Post");
})

app.delete('/api/data', (req, res) => {
    data.pop();
    console.log("We Have Delete item");
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})