import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css';
import scrumPoker from './scrumpoker.png';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ScrumPoker() {
    return (
        <> <div className={"image"}>
            <img className={"scrumPoker-image"} src={scrumPoker}/>
        </div>
        </>

        // <Navbar id={"navbar"}>
        //         <Navbar.Brand href="#home"><img className={"scrumPoker-image"} src={scrumPoker}/></Navbar.Brand>
        // </Navbar>
    );
}

export default ScrumPoker;