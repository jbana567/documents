import { useState } from "react";
import axios from "axios";
function TreeCreation() {
    const [treename,settreename] = useState("");
    const [treecolor,settreecolor] = useState("");
    const insert_tree=(e)=>{
    e.preventDefault();
   axios.post("http://localhost:5000/insert",{
     treename:treename,
        treecolor:treecolor
        })

        .then((response)=>{
        console.log(response.data);
   })

   .catch((error)=>{
    console.log("failed to insert your tree",error);
   })
   

    }
    return(
        <>
        <h1>create youur tree here</h1>
           <form action="" method="post">
               <ul type="none">
                <li><label htmlFor="">tree_name</label></li>
                <li><input type="text" name="" id="" onChange={(e)=>settreename(e.target.value)}/></li>
                <li><label htmlFor="">tree_color</label></li>
                <li><input type="text" name="" id="" onChange={(e)=>settreecolor(e.target.value)}/></li>
                <li><input type="submit" value="submit" onClick={insert_tree}/></li>
               </ul>
           </form>
           Treename:{treename}<br/>
           Treecolor:{treecolor}<br/>
        </>
    )
}

export default TreeCreation;