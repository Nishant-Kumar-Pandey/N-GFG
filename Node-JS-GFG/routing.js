//REST
//layered system
//stateless
//cacheable
//code on demand
//client-server architecture 

import express from 'express';
import fs from 'fs';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).json({ name: 'Nishant', age: 21 });
    // res.send('Hello from Express server');
});

app.get("/home", (req, res) => {
    res.status(200).send('Welcome to the home page');
});


app.get("/product", (req, res) => {
    fs.readFile("./product.json", (err, data) => {
        if(err){
            res.status(400).send({error: "something went wrong"})
        }
        res.status(200).send(data);
    });
});
app.post("/login", (req, res) => {
      const username = req.body.username;
    const password = req.body.password;
    // const { username, password } = req.body;
    res.status(200).json({ username, password });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});