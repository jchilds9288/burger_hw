const express = require("express");
const burgerJs = require("../models/burger.js");
const router = express.Router();


    router.get("/",(req, res)=>{
        burgerJs.all(data =>{ 
            // var burgerData = burgers.map(item =>({
            //     id: item.id,
            //     name: item.name,
            //     devoured: item.devoured
            // }))
            const hbsObject = {
                burgers: data
              };
            console.log(hbsObject)
            res.render("index", hbsObject)}) 
    });

    router.post("/burgers",(req, res)=>{
        burgerJs.insertOne([
            "name"
            ], [
            req.body.name  
            ], data => {
                res.redirect("/");
            });
    });

    router.post("/burgers/:id", (req, res)=>{
        var condition = "id = " + req.params.id;
        console.log("condition", condition);

        burgerJs.updateOne(
         condition, (data) => {
            res.redirect("/");
    })
    });

    module.exports = router