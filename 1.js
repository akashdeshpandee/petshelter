import express from 'express';
const app =express();

app.use(express.json());

import mysql from 'mysql2';

// connecting Database
const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodejs",
  });


app.get('/',(req,res)=>{
    res.send("Hi");
})

app.listen(5000,()=>{
console.log("Server listening in http://localhost:5000")
})