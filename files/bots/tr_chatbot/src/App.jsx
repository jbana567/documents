import React from "react";
import "./index.css"
import Slide_bar from "./componets/Slide_bar";
import Chat_input from "./componets/Chat_input";
function App() {
  return(
    <div>
      <img src="../Gemini_Generated_Image_jm828yjm828yjm82.jpg" alt=""  width={200}/>  
       <div>

          <Chat_input/>
       </div>

    <Slide_bar/>

    </div>
  
 
  )
}

export default App;