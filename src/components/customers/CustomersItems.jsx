import React from "react";
import {Link} from "react-router-dom";
import Col from "react-bootstrap/Col";
import img from '../../images/chagert.png'

const CustomersItems = (props) =>{
   return(
     <Col lg = {4} >
        <div className="customers_column p-3">
          <img src={img} alt="" />
          <p className="customers_content text-center " >{props.text}</p>
          <div className="customer_name text-center">
            <Link to={props.url} > {props.name}</Link>
          </div>
         </div>
     </Col>
   )
}

export default CustomersItems;