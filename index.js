    const express=require("express");
    const cors = require('cors');
    const app=express();
    let port=process.env.PORT||4000;
    const importData=require("./data.json");
 
    app.use(cors())


    app.get("/",(req,res)=>{
        res.send("Hello World");
    });

    app.get("/skills",(req,res)=>{
        res.send(importData);
    })

    app.listen(port, ()=>{
        console.log('Example app is listening on port http://localhost:4000');
    });