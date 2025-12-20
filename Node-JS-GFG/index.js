// // console.log("Hello world")
// // function test(){
// //     var a = 20;
// //     console.log(a);
// // }
// // console.log(a)

// // export default function fetchData(url){
// //     fetch(url)
// //     .then((res) => res.json())
// //     .then((data) => console.log(data))
// //     .catch((err) => {
// //         console.log(err)
// //     })
// //     .finally(() => {
// //         console.log("api called")
// //     });
// // }

// import http from 'http'; // importing http
// import fs from 'fs';
// // import { error } from 'console';
// const PORT = 3000;
// const server = http.createServer((req, res) => {
//     // console.log(req.url);
//     // console.log(req.method);
//     // console.log(res.headers);
//         // console.log(res);
//     //     console.log(req.body);
//     //     res.setHeader("author", "nishant");
//     //     res.statusCode = 200;
//     // res.end("Hello from the server");
//     if(req.url == "/home"){
//         fs.readFile("./Home.html", (err, data) => {
//             if(err){
//                 res.end("Error loading page");
//             }
//             res.statusCode = 200;
//             res.setHeader("Content-Type", "application/html");
//             res.end(data);
           
//         });
//     }
//     if(req.url == "/about"){
//         res.end("Welcome to about page");
//     }
    
// });

// server.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
// });

import express from 'express';
import ejs from 'ejs';
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const server = express();
// console.log(server);
const PORT = 3000;
server.set('view engine', 'ejs');
server.set('views', __dirname + '/views')

server.get("/", (req, res) => {
    res.end("Hi from home page");
}); 

server.get("/contact", (req, res) => {
    // res.end('hi from about us page');
    res.render("contact");
});

server.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);

})