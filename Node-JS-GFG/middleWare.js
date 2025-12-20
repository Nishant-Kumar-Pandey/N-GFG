import express from 'express';
const PORT = 3000;


const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) =>{
    console.log("Middleware called");   
    if(req.body.username == "" || req.body.password == "" || req.body.email == ""){
        console.log("middleware called");
        req.body.age = 21;
        return res.status(401).send("its not allowed");
    }
    else {
next();
};
})

app.use((req, res, next) => {
    if(req.body.username !== "nishant" || req.body.password !== "12345" || req.body.email !== "n@n.com"){
        console.log("second middleware called");
        req.user = { name: "nishant", age: 21, email: "n@n.com", role: "admin" };
        res.status(401).send("invalid credentials");
         
    }
    next();
    
})

app.use((req, res, next) => {
    if(req.body.role != "admin"){
        return res.status(403).send("access denied");
    }
    console.log("middleware called");
    req.user = { name: "nishant", age: 21 };
    next();
});

app.get("/", (req, res) => {
    res.send("welcome to home page");
    // req.send(req.user)
    console.log(req.user);  
   
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const role = req.body.role;
    // const age = req.body.age;
    // console.log(age);
    res.send(req.user);
    // res.status(200).json({username, password})
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})