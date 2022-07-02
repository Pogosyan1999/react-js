import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";
import image from '../../images/rectangle.png';
import './footerContainer.css';
import FooterList from "./FooterList";
import { Link } from "react-router-dom";
import Company from "./Company";
import FooterIcons from "./FooterIcons";

const FooterContainer = ()=>{
  return(
    <>
    <Container fluid className="footerContainer">
       <Container className="footerMinContainer col-lg-9">
        <Row>
            <Col lg = {6} className = "p-0">
              <img src = {image} alt = "dsds" className="w-100"/>
            </Col>
            <Col lg = {6} className = "bg_white p-0">
              <h2 className="footerContainer_title">
                Stay in Touch?
              </h2>
              <p className = "footer_text mt-3">
                Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
              </p>
              <div className="container_btn mt-lg-4">
                <Link to = {'#'} role = 'button'>Subscribe</Link>
              </div>
            </Col>
        </Row>
    </Container>
      <FooterList/>
      <div className="footer_div px-5">
        <Company />
        <FooterIcons />
      </div>
  </Container>

    </>
  )
}

export default FooterContainer;