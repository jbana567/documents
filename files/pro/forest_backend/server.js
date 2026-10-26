
const express=require("express");
const mysql=require("mysql");
const cors=require("cors")
const app=express();

const PORT=5000;

app.use(express.json());
 app.use(cors());

const con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"forest"

})

con.connect(()=>{
  console.log("database connected")
})


app.post("/insert",(req,res)=>{
 const {treename,treecolor}=req.body;
 const sql="INSERT INTO tree(treename,treecolor) VALUES(?,?)";
  con.query(sql,[treename,treecolor],()=>{

    res.send("tree has been inserted")
  })
})

 app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING ON ${PORT}`)
 })

