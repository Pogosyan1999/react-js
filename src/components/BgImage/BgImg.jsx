import React from "react";
import Container from "react-bootstrap/Container";
import bgImg from "../../images/bg.png"

const BgImg = () =>{
    return(
        <Container fluid className="px-4 ">
            <img src={bgImg} alt="bg_img" className="w-100"/>
        </Container>
    )
}

export default BgImg;