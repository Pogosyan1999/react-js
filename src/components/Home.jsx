import React from "react";
import BgImg from "./BgImage/BgImg";
import ShopType from "./shopType/ShopType";
import HandCrafted from "./handCrafted/HandCrafted";
import Gallery from "./gallary/Gallery";
import image from '.././images/Image.png';
import Customers from "./customers/Customers";
import Services from "./sevices/Services";
import FooterContainer from "./footer/FooterContainer";

const Home = () =>{
    return(
        <>
         <BgImg/>
         <ShopType />
         <HandCrafted 
           title = "Hand Crafted  fine pieces."
           text = "We also firmly believed that our customers deserved more choices, straightforward information and legendary service."
           src = {image}
         />
        <Gallery/>
        <Customers />
        <Services/>
        <FooterContainer/>
        </>
    )
}

export default Home