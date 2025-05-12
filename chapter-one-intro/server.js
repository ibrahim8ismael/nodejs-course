const expres = require("express");
const mongoose = require("mongoose");

const app = expres();
app.use(expres.json());

const Article = require("./models/Art");

mongoose.connect("mongodb+srv://ibrahimismael204:02230223@myfirstdb.iwp9yst.mongodb.net/?retryWrites=true&w=majority&appName=MyFirstDB")
.then(()=>{
    console.log("Connecting Done!!!")
}).catch((error)=>{
    console.log("Erorr With Connection with DB" , error)
})

app.get("/hello", (req,res) => {
    res.json(
        {
            name: req.body.name,
            age:req.body.name
        }
    )
})

app.get("/text", (req, res)=>{
    res.send("Hello test")
})

app.get("/html", (req,res) => {
    res.render("index.ejs", {
        name: "ibrahim"
    })
})

app.listen(3030, () => {
    console.log("We are working")
})