import React from 'react';
import './Footer.css';
import logo from '../../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import  facebook from '../../images/facebook.png';
import  instagram from '../../images/instagram.png';
import  twitter from '../../images/twitter.png';
import  linkedin from '../../images/linkedin.png';
import  youtube from '../../images/youtube.png';

const Footer = () => {
    return (
        <div className='footer container-fluid'>
         <div className="row d-flex pt-5">
            <div className="col-md-4">
                <img src={logo} alt="logo image"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis dolore, inventore distinctio sequi ex veniam eaque blanditiis veritatis nulla culpa molestias neque sapiente quaerat sint voluptatum harum porro voluptatibus! Facilis.</p>
            </div>
            <div className="col-md-4 best-selling">
                <h4 className='ml-4 pb-2'>Best Selling courses</h4>
                <p>Artificial Intelligence</p>
                <p>Monetization Strategy</p>
                <p>Marketing Analytics</p>
                <p>Business Analytics</p>
                <p>Data Scientist</p>
            </div>
            <div className="col-md-4">
                <h4 className='pb-3'>Contact Details</h4>
                <p><FontAwesomeIcon icon={faPhone} /><strong> Phone : </strong>088-0195863</p>
                <p><FontAwesomeIcon icon={faEnvelope} /><strong> Email : </strong><em>onlinecourse@gmail.com</em></p>

                {/* social icons */}

                <ul className='social-icon'>
                    <li>
                        <a href="#"><img src={facebook} alt=""/></a>
                        <a href="#"><img src={instagram} alt=""/></a>
                        <a href="#"><img src={twitter} alt=""/></a>
                        <a href="#"><img src={linkedin} alt=""/></a>
                        <a href="#"><img src={youtube} alt=""/></a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="copyright">
            <p>All rights reserved by C&N online course || &copy; 2020</p>
        </div>
    </div>
    );
};

export default Footer;