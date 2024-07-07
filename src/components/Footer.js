import React from 'react';
import { Instagram } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';
import '../styles/Footer.css';
function Footer(){
    return(
     <div className='footer'>
        <div className='socialMedia'>
            {""}
            <Instagram />{""}
            <Twitter/>{""}
            <Facebook />{""}
        </div>
        <p>&copy; 2024 Goldenfalcons.com</p>


    </div>
    );
}

export default Footer;