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



// ========> END POINTS Article
app.post("/Articles", async(req, res)=> {  // Async function to use await
    const newArticle = new Article()
    const titleData = req.body.titleName
    const bodyData = req.body.bodyName

    newArticle.title = titleData
    newArticle.body = bodyData
    newArticle.NumberOfLikes = 0
    await newArticle.save() // if need to use make ASYNC Function

    res.send("We Are in Articles")
})


// app.get("/Articles",async(req, res)=> {
//     const Articles = await Article.find();
//     res.json(`${Articles}`)
// })

app.get("/articles", async (req, res) => {
	const articles = await Article.find();
	console.log("the articles are", articles);

	res.json(articles);
});

// app.get("/articles/:Artid",async(req, res)=> {
//     const id = req.params.Artid
//     try{
//         const Articles = await Article.find(id);
//         res.json(`${Articles}`)
//         return;
//     }catch(error){
//         console.log(`Erorr to find this Article by this id ${id}`)
//         res.send(`Erorr to find this Article by this id ${id}`)
//         return;
//     }
// })

app.get("/articles/:articleId", async (req, res) => {
	const id = req.params.articleId;

	try {
		const article = await Article.findById(id);
		res.json(article);
		return;
	} catch (error) {
		console.log("error while reading article of id ", id);
		return res.send("error");
	}
});

app.delete("/articles/:articleId", async (req, res) => {
	const id = req.params.articleId;

	try {
		const article = await Article.findByIdAndDelete(id);
		res.json(article);
		return;
	} catch (error) {
		console.log("error while reading article of id ", id);
		return res.json(error);
	}
});


app.get("/showArticles", async (req, res) => {
	const articles = await Article.find();

	res.render("articles.ejs", {
		allArticles: articles,
	});
});


app.listen(3030, () => {
    console.log("We are working")
})