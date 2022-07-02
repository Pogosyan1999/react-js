import React from "react";
import './shopType.css';
import ShopTypeItems from "./ShopTypeItems";
import Models from "../models/Models";
import Container from "react-bootstrap/Container";



const ShopType = () =>{
    return(
         <Container fluid className="mt-5 px-lg-5 px-md-5" id = 'shop'>
          <Models 
            lg = '3' 
            md = '6'
            heading = 'Shop by Jewelry Type'
            obj = {ShopTypeItems}
          />
          </Container>
    )
}
export default ShopType;