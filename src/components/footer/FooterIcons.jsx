import React from "react";
import { FaInstagram,FaFacebookF,FaYelp, FaTwitter} from "react-icons/fa";
import { Link } from "react-router-dom";
import './footerContainer.css';


const FooterIcons = () =>{
   return (
    <div className="icon_container">
        <div>
            <Link to = {'#'}>
                <FaFacebookF />
            </Link>
        </div>
        <div>
            <Link to = {'#'}>
              <FaInstagram />
            </Link>
        </div>
        <div>
            <Link to = {'#'}>
                <FaTwitter />
            </Link>
        </div>
        <div>
            <Link to = {'#'}>
                <FaYelp />
            </Link>
        </div>
    </div>
   )
}

export  default FooterIcons;