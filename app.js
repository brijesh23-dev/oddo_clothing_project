const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

main()
.then(()=>{
    console.log("connected to DB")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust')
};

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,'/public')));


app.listen(8080,(req,res)=>{
    console.log(" app is listening on port 8080");
})

app.get("/listings",async(req,res)=>{
    const allListings = await Listing.find({});
    console.log(allListings);
     res.render("listings/index.ejs",{allListings});
})
