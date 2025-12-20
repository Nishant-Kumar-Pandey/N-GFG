//REST API
import express from "express";
import fs from "fs";


const PORT = 3000;

const api = express(); 

api.get("/", (req, res) => {
    res.status(200).json({message: "Welcome to the home page"});
});

api.get("/product", (req, res) => {
    fs.readFile("./product.json", (err, data) => {
        if(err){
            console.log(err);
        }else{
            res.status(200).json(JSON.parse(data));
        }
    })
})

// api.post("/", (req, res) => {
//     res.status(201).json({message: "new user added successfully"})
// });
api.listen(PORT, () => {
    console.log("server is running");
})