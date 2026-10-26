import { BrowserRouter,Routes,Route,Link } from "react-router-dom";

function Slide_bar(params) {
    return(
        <>
           <nav>
            <input type="text" className="inp_1" />

              <Link to="/Newchart"><img src="../plus.png" alt="" width={5}className="image_1" />New chart</Link>
              <Link to="/In">insert</Link>
              <Link to="/con">content</Link>
              <Link to="/Setting">setting</Link>

              <p className="history">chat history</p>
           </nav>
        </>
    )
}

export default Slide_bar;