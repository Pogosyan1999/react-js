import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaRegTimesCircle } from 'react-icons/fa';
import { useState } from "react";
import './models.css';



const Models = (props) =>{
    
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) =>{
      setTempImgSrc(imgSrc);
      setModel(true);
    }
    return(
        <>
         <h2>{props.heading}</h2>
         <div className = {model ? 'model open': 'model'}>
           <Col lg = {5}>
             <img src={tempImgSrc} alt="img"  className="w-100"/>
              <FaRegTimesCircle onClick={()=>setModel(false)}/>
            </Col>
          </div>
         <Row className = "my-5  text-center">
          {props.obj.map((item,index)=>{
              return(
                <Col lg = {props.lg} md = {props.md} sm = {props.sm} className = 'mt-md-3' >   
                   <div className="min_container" key = {index} onClick={()=>getImg(item.imgSrc)}>
                     <figure>
                       <img src={item.imgSrc} alt={props.alt} className="w-100" />
                     </figure>
                    </div>
                    <h3 className="shopType_heading">
                      {item.title}
                     </h3>
                 </Col>
                     )
                })}
            </Row>
            </>
    )
}

export default Models;