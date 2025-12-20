import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log("SERVER FILE RUNNING");


mongoose
.connect(
    "mongodb+srv://nishantpandey66:*******@cluster0.osfzww1.mongodb.net/nishant"
)
.then(() => {
    console.log("conected to db");
})
.catch((err) => {
    console.log(err);
});

const userSchema = new mongoose.Schema({
    name: String,
    password: String
});

const User = mongoose.model("User", userSchema);

//create operation

app.post("/register", async (req, res) => {
    try{
    const username = req.body.username;
    
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({username, password: hashedPassword});
    const savedUser = await newUser.save();

    if(!savedUser){
        return res.status(404).json({message: "user not created"});   
    }
    res.status(201).json({message: "user created successfully"});


    }catch(err){
        res.status(500).json({message: err.message});
    }
})

//read

app.get("/allusers", async (req, res) => {
    try{
        const users = await User.find();
        if(!users){
            return res.status(400).json({message: "no users found"});
        }
        res.status(200).json(users);
    }catch(err){    
        res.status(500).json({message: err.message});
    }
})

//update

app.put("/update/:id", async (req, res) => {
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);
        if(!updatedUser){
            return res.status(400).json({message: "user not found"});
        }
        res.status(200).json({message: "user updated successfully"});
    }catch(err){
        res.status(500).json({message: err.message});
    }       
})

//delete

app.delete("/delete/:id", async (req, res) => {
    try{
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if(!deletedUser){
            return res.status(400).json({message: "user not found"});
        }
        res.status(200).json({message: "user deleted successfully"});
    }catch(err){
        res.status(500).json({message: err.message}); 
        }
    }
);
app.get("/", (req, res) => {
    res.end("hi from server");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);   

})