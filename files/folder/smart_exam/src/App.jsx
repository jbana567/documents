import Navbar from "./component/Navbar"
import Logo from "./component/Logo"
import Nav_button from "./Nav_button"
import Body from "./Body"
import "../public/smartexam_logo.png"

function App() {
    return(
        <>
        <Logo/>
        <Nav_button/>
        <Navbar/>
        <Body/>
        </>
    )
}

export default App