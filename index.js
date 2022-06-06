const express = require("express");

const app = express();

app.get("/",(res)=>{
    res.send("Hello Wrold!")
})

app.listen(8080,()=>{
    console.log("Server is started successfully")
})