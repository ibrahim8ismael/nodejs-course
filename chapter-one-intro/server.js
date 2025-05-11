const expres = require("express");
const app = expres();
app.use(expres.json())


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