import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Home from "./components/Home";
import Message from "./components/Message";
import User_list from "./components/User_list";
import New_user from "./components/New_user";
function App() {
    return(
      <>
      <h1>welcome to our react navigation</h1>
      <Link to="/">HOME</Link>
      <Link to="/Message">Message</Link>
      <Link to="/User_list">UserList</Link>
      <Link to="/New_user">New User</Link>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Message" element={<Message/>} />
        <Route path="/User_list" element={<User_list/>} />
        <Route path="/New_user" element={<New_user/>} />
      </Routes>
      </>
)
}

export default App;