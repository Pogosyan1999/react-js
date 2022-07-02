import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import './header.css';

const Header = () =>{
  return(
         <Navbar fixed="top"  expand="md" className='header_navbar' >
           <Container fluid className='px-md-5'  >
               <h1>
                 <Nav.Link as = {Link} to =  {"/"} >Bayside fine jewelry</Nav.Link>
               </h1>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse className="justify-content-end text-center  menu_items" >
                  <Nav.Link as = {Link} to =  {"#home"} >Home</Nav.Link>
                  <Nav.Link as = {Link} to =  {"#shop"}>Shop</Nav.Link>
                  <Nav.Link as = {Link} to =  {"#services"}>Services</Nav.Link>
                  <Nav.Link as = {Link} to =  {"#about"}>About</Nav.Link>
                  <Nav.Link as = {Link} to =  {"#contact"}>Contact</Nav.Link>
               </Navbar.Collapse>
            </Container>
         </Navbar>
  )
}

export default Header;