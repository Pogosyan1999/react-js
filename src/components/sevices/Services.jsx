import React from "react";
import './services.css';
import '../button.css';
import ServicesItems from "./ServicesItems";
import Models from "../models/Models";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Services = () =>{
    return(
        <Container fluid className="mt-5 px-lg-5" id = 'services'>
         <Models 
           lg = '4'
           heading = 'Our Services'
           obj = {ServicesItems}
         />
          <div className="container_btn">
             <Link to = {'#'}>Learn More</Link>
         </div>
         </Container>
   )
}

export default Services;
