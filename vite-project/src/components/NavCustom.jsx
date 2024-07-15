import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
function NavCustom(){
  const navigate = useNavigate()
  const { token, logout } = useContext(AuthContext); // Usa il contesto


    return(
        <>
         <Navbar expand="lg" className="bg-info ">
      <Container>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="/" className='text-white'>Home</Nav.Link>
            <Nav.Link href="/users">Utenti</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {!token &&
            <Nav.Link  className='ms-auto text-white' onClick={()=>{navigate("/login")}}>Login</Nav.Link>
          }
          {token &&
          <Nav.Link  className='ms-auto text-white' onClick={()=>{logout(); navigate("/registrazione") }}>Logout</Nav.Link>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default NavCustom