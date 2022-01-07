const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;
const mongoose = require('mongoose');
const usermodel = require("./model");

app.use(express.json());



const data = "mongodb+srv://mrunal:mrunal@cluster0.un9h5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(data)
    .then(() => console.log("connection started"))
    .catch((err) => console.log(err))



app.get("/register", (req, res) => {
    res.send("register page");
});

app.post("/register",(req,res)=>{
    const {Name,Mobilenumber,Email,Password}=req.body;
    console.log(Name);
    console.log(Email);


    if (!Name|| !Mobilenumber|| !Email|| !Password){
        res.json({error:"plz filled the form properly"});
    }
    usermodel.findOne({Email:Email}).
    then((userexist)=>{
        if(userexist){
            res.status(200).json({message:"user exist"});
        }

        const user=new usermodel({Name,Mobilenumber,Email,Password});
        user.save().then(()=>{
            res.status(200).json({message:"user register succesfully"});
        }).catch(()=>{
            res.status(400).json({message:"registeration failed"});
        })
    }).catch((err)=>{
        res.status(400).send(err);
    })
});


app.get("/login", (req, res) => {
    res.send("login page");
});

app.post("/login", (req, res) => {
    const { Email, Password } = req.body;
    if (!Email || !Password) {
        res.status(400).json({ message: "One of the filled is Empty" });
    }
    const userlogin = usermodel.findOne({ Email: Email })
    if (!userlogin) {
        res.status(400).json({ message: "Email id is invalid,Plz try again" });
    }
    if (userlogin.Password == Password) {
        res.status(200).json({ message: "login sucessfully" })
    }
    else {
        res.status(400).json({ message: "login unsuccessfully" })
    }

});

app.listen(PORT, "127.0.0.1", () => {
    console.log("server started");
});