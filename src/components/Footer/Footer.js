import React from 'react';
import logo from '../../assets/logo.png';
import FbIcon from '../../assets/fb-icon.png';
import TwitterIcon from '../../assets/twitter-icon.png';
import LinkedInIcon from '../../assets/linkedin-icon.png';
import DribbleIcon from '../../assets/dribble-icon.png';


const Footer = () => {
    return (
        <div className="footer__area">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 text-sm-center text-md-left">
                        <img src={logo} height="100" alt="" />
                        <div className="footer__social">
                            <a href="#">
                                <img src={FbIcon} alt="" />
                            </a>
                            <a href="#">
                                <img src={TwitterIcon} alt="" />
                            </a>
                            <a href="#">
                                <img src={LinkedInIcon} alt="" />
                            </a>
                            <a href="#">
                                <img src={DribbleIcon} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-2 mt-4 col-sm-4">
                        <div className="footer__links">
                            <ul>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Enterprise</a></li>
                                <li><a href="#">Pricing</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 mt-4 col-sm-4">
                        <div className="footer__links">
                            <ul>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Status</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 mt-4 col-sm-4">
                        <div className="footer__links">
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Security</a></li>
                                <li><a href="#">Login</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;