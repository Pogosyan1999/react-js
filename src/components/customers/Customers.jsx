import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import CustomersItems from "./CustomersItems";
import './customers.css';

const Customers = () =>{
    return(
       <>
         <Container fluid className="customers_container  mt-5 px-5" >
             <h2>Customer reviews</h2>
             <Row className="mt-5">
                <CustomersItems 
                 text = 'Great variety of cuts and amazing customer service. Helped to find the perfect ring and helped me to personalize it a little more.'
                 name = '- Nico Jones'
                 url = '#'
                />
                 <CustomersItems 
                 text = "What an amazing shopping experience! I tried other jewelers and didn't find anything I liked. Thank you so much."
                 name = '- Tracy Willis'
                 url = '#'
                />
                 <CustomersItems 
                 text = 'Great quality, and showed they can work through a problem and maintain excellent customer service!!'
                 name = '- Susana Santos'
                 url = '#'
                />
             </Row>
         </Container>
       </> 
    )
}

export default Customers

