import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import TreeCreation from "./components/TreeCreation";
import Treecolor from "./components/Treecolor";
import Treehome from "./components/Treehome";
function App() {
    return(
      <>
       <h1>my forest environment</h1>
        <nav>
          <Link to="/Treehome">Home</Link>
          <Link to="/TreeCreation">Treeform</Link>
          <Link to="/Treecolor">Treeview</Link>

              <Routes>
                <Route path="/Treehome" element={<Treehome/>}/>
                <Route path="/TreeCreation" element={<TreeCreation/>}/>
                <Route path="/Treecolor" element={<Treecolor/>}/>
              </Routes>

        </nav>
      </>
    )
}

export default App;
