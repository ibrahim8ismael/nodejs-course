const express = require("express") // = to import expres
const app = express()

app.get("/" , (req, res)=>{
    res.send("HELLO FROM MAC")
})

app.get("/hello" , (req, res)=>{
    res.send("HELLO FROM MAC, HELLO WORLD")
})

app.post("/me" , (req, res)=>{
    res.send("We are in the Post hello")
})

app.listen(3000, () => {
    console.log("We Are Working In Backend!!!")
})