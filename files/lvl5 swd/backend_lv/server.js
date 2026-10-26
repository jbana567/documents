const express=require("express");
const mysql=require("mysql");
const cors=require("cors");
const app=express();

app.use(express.json());
app.use(cors());

const PORT=5000;

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"users"
});

con.connect((err)=>{
    if(err) throw err;
    console.log("server is well connected to the database");
});

app.post("/",(req,res)=>{
    const {name,username,password}=req.body;
    const sql="INSERT INTO student(name,username,password) values(?,?,?)";
    con.query(sql,[name,username,password],(err,result)=>{
         if(err) throw err,
        res.send("data has been inserted")
    })
})


app.listen(PORT,()=>{
    console.log(`SERVER IS CONNECTED ON PORT ${PORT}`)
})