import { useState } from "react";
import Axios from "axios";
function New_user() {
    const [name,setname]=useState('')
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const [confirm_password,setconfirm_password]=useState("")

    const insertData=(e)=>{
        e.preventDefault()
        Axios.post("http://localhost:5000/",{
    name:name,
    username:username,
    password:password,
   })
     .then((response)=>{
        console.log("success")
     })
     .catch((error)=>{
        console.log("failed",error)
     })
      }
    
    return(
      <>
       <h1>new_user page</h1>
       <form action="form" method="post">
        <ul type="none">
            <li><label >name</label></li>
            <li><input type="text" name="" id="" onChange={(e)=>setname(e.target.value)}/></li>
            <li><label >username</label></li>
            <li><input type="text" name="" id=""onChange={(e)=>setusername(e.target.value)} /></li>
            <li><label >password</label></li>
            <li><input type="password" name="" id=""onChange={(e)=>setpassword(e.target.value)} /></li>
            <li><label>confirm_password</label></li>
            <li><input type="password" name="" id="" onChange={(e)=>setconfirm_password(e.target.value)} /></li>
            <li><input type="submit" value="submit" onClick={insertData}/></li>
        </ul>
       </form>
       name:{name}<br/>
       username:{username}<br/>
       password:{password}<br/>
       confirm_password:{confirm_password}<br/>

      </>
    )
}

export default New_user;
