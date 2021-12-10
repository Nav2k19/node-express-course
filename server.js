
//express variable gives access to express library
const express = require('express');
//variable app is the declared instance as the constructor 
const app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.json());

//Create a POST request from login endpoint, when a user logs in, the server will send a response back to the client

app.post('/login',function(req,res){
    const username= req.body.username;
    const password= req.body.password;
    
    const exampleUsername="Kishinator42069";
    const examplePassword="Lakshmanan3455121372425!";

    if(username===exampleUsername && password===examplePassword){
        res.json({
            success:true,
            message:'You have successfully logged in',
            token: 'encrypted token'
        })
    }
    else{
        res.json({
            success:false,
            message:'You have unsuccessfully logged in'

        })
    }
})


const mockUsers = [
    {name: "OG"},
    {name: "Bam"}
]

app.get('/users', function(req,res){
    res.json({
        success: true,
        message: 'successsfully retrieved users',
        users: mockUsers

    })
})

app.get('/user:id', function(req,res){
    console.log(req.params.id)
    res.json({
        success:true,
        message: 'successfully retrieved user',
        user:req.params.id
    })
})

app.listen(8000,function(){
    console.log("server is listening")
})





