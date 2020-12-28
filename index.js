    const express=require("express");
    const app=express();
    let port=process.env.PORT||4000;
    const importData=require("./data.json");



    app.get("/",(req,res)=>{
        res.send("Hello World");
    });

    app.get("/skills",(req,res)=>{
        res.send(importData);
    })

    app.listen(port, ()=>{
        console.log('Example app is listening on port http://localhost:4000');
    });