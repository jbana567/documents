import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import "../index.css"
import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/feature">Feature</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/help">Help</NavLink>
        </nav>
    )
}

export default Navbar