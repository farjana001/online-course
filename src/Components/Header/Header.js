import React from 'react';
import './Header.css';
import logo from '../../logo.png';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


const Header = () => {
    return (
      // logo image
        <div className='logo'>
          <img src={logo} alt=""/>
        <div>

          {/* navbar */}
          <Navbar className='my-nav' bg="dark" variant="dark">
            <Navbar.Brand href="#home">Home</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#home">Courses</Nav.Link>
                <Nav.Link href="#features">Contact us</Nav.Link>
                <Nav.Link href="#pricing">About Us</Nav.Link>
              </Nav>
              <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
        </div>
      </div>
        
    );
};

export default Header;