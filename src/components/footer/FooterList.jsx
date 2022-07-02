import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import './footerContainer.css';

const FooterList = () => {
    return (        
        <Container fluid  className='footerList_container px-5 mt-5 pb-5'>
            <Row> 
                <Col lg = {2}>
                  <ListGroup as = 'ul'>
                     <h6>Product</h6>
                     <ListGroup.Item as = 'li'>
                        <Link to = {'#'}>Privacy Policy</Link>
                     </ListGroup.Item>
                     <ListGroup.Item as = 'li'>
                        <Link to = {'#'}>Terms of Service</Link>
                     </ListGroup.Item>
                     <ListGroup.Item as = 'li'>
                        <Link to = {'#'}>FAQ</Link>
                     </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col lg = {2}>
                  <ListGroup as = 'ul'>
                     <h6>Resources</h6>
                     <ListGroup.Item as = 'li'>
                        <Link to = {'#'}>Documentation</Link>
                     </ListGroup.Item>
                     <ListGroup.Item as = 'li'>
                        <Link to = {'#'}>Case Studies</Link> 
                     </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col lg = {2}>
                  <ListGroup as = 'ul'>
                     <h6>Company</h6>
                     <ListGroup.Item as = 'li'>
                        <Link to = {'#'}>About Us</Link>
                     </ListGroup.Item>
                     <ListGroup.Item as = 'li'>
                       <Link to = {'#'}>Contact Us</Link>
                     </ListGroup.Item>
                  </ListGroup>
                </Col>
            </Row>
        </Container>
    )
        };
        
  
  
  export default FooterList;