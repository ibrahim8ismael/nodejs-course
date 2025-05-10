const express = require("express") // = to import expres
const app = express()
app.use(express.json()) //Use the JSON file



app.get("/" , (req, res)=>{
    res.send("HELLO FROM MAC")
})

app.get("/hello/:num1/:num2" , (req, res)=>{ //Path Prametars (/:Var) -> Can be text or number
    const number1 = req.params.num1
    const number2 = req.params.num2
    res.send(`The first:${number1} and Second:${number2}`)
    res.send("HELLO FROM MAC, HELLO WORLD")
})

app.get("/sayhello" , (req, res)=>{ //Body Prametars (/:Var) -> Can be text or number
    console.log(req.body)
    console.log(req.query)
    res.send(`${req.body.name}`)
})



app.post("/me" , (req, res)=>{
    res.send("We are in the Post hello")
})

app.listen(3000, () => {
    console.log("We Are Working In Backend!!!")
})