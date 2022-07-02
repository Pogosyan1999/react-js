import React from "react";
import './gallery.css';
import '../button.css';
import GalleryItems from "./GalleryItems";
import { Link } from "react-router-dom";
import Models from "../models/Models";
import Container from "react-bootstrap/Container";
const Gallery = () =>{
   return(
    <Container fluid className="mt-5 px-lg-5 gallery" >
       <Models
         lg = '4'
         heading = 'OUR LATEST JEWELRY'
         obj = {GalleryItems}
         /> 
         <div className="container_btn">
             <Link to = {'#'}>View Gallery</Link>
         </div>
    </Container>
   )
}

export default Gallery;