const express = require("express");
const app = express();

const path = require("path");
app.use(express.static('public'));


const port = 8080;
app.listen(port, ()=>{
    console.log("App is listening at port 8080...");
})


app.get("/", (req, res)=>{
    res.send("Welcome to oue website");
})

app.get("/home", (req, res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

app.get("/register", (req, res)=>{
    res.sendFile(path.join(__dirname, "/public/register.html"))
    
})



