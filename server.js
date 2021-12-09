
//express variable gives access to express library
const express = require('express');
//variable app is the declared instance as the constructor 
const app = express();


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

app.listen(8000,function(){
    console.log("server is running")
})




