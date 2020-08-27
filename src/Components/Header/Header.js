import React from 'react';
import './Header.css';
import logo from '../../logo.png';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


const Header = () => {
    return (
        <div className='logo'>
            <img src={logo} alt=""/>
            <div>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
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