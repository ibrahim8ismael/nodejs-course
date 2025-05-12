const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ArtSchema = new Schema({
    title: String,
    bodyy: String,
    NumberOfLikes: Number
})


const Article = mongoose.model("Article", ArtSchema) //Name of the schema and the 
module.exports = Article