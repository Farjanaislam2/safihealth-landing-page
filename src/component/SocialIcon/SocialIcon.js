import React from 'react';
import {Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons';

const SocialIcon = () => {
    return (
        <div className='d-flex gap-4 justify-content-center align-items-center mt-5 mb-2'>
           <Facebook/>
           <Twitter/> 
           <Youtube/>
           <Instagram/>
           
        </div>
    );
};

export default SocialIcon;