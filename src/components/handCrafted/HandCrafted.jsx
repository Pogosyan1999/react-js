import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './handCrafted.css';
import { Link } from "react-router-dom";



const HandCrafted = (props) =>{
    return(
        <>
          <Container fluid className="handCrafted ">
             <Row className=" m-0">
                <Col lg = {6} md ={12} className = "bg_blue px-lg-5 ">
                   <h2 className="handCrafted_heading">
                     {props.title}
                   </h2>
                   <p className="handCrafted_text">
                     {props.text}
                   </p>
                  <div className="btn_container">
                    <Link to = {'#'} className="handCrefted_btn">Learn More</Link>
                  </div>
                </Col>
                <Col lg = {6} md = {12} className = "px-0" >
                  <img src={props.src} alt="dadad" />
                </Col>
             </Row>
          </Container>
        </>
    )
}

export default HandCrafted;