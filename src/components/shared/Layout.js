import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import "./Layout.css"

function Layout(props) {

  return (
    <>

        <div className='navbar-css'>
          <img src="/img/ridebuddylogo.png" height="160px" width="300px"></img>

        </div>


      <div className='container-css'>
        <Container bg="#fff">
          {props.children}
        </Container>
      </div>

    </>

  )
}
export default Layout;