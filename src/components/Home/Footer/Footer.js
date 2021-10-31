import React from 'react';
import { Container } from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DraftsIcon from '@mui/icons-material/Drafts';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import './Footer.css';

const Footer = () =>
{
    return (
        <div className="footer-main">
            <Container className="pt-5">
                <div className="row footer-details">
                    <div className="col-md-4">
                        <div>
                            <img src="https://i.ibb.co/PcvzLCV/logo.png" alt="" />
                        </div>
                        <p>
                            Trusted results for Your Search Query. Check Visymo Search for the best results! Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. The Best Resources. Results & Answers. Types: Best Results, Explore Now, New Sources, Best in Search.
                        </p>
                        <h4>Follow Us:</h4>
                        <div>
                            <FacebookIcon /> <InstagramIcon /> <TwitterIcon /> <LinkedInIcon />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h3>Contact Us</h3>
                        <div className="phone d-flex align-items-center">
                            <div className="me-2">
                                <LocalPhoneIcon />
                            </div>
                            <div className="number">
                                <span>+8801515226983</span><br />
                                <span>+8801833921579</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="me-2">
                                <DraftsIcon />
                            </div>
                            <div className="number">
                                <span>info@example.com</span><br />
                                <span>support@example.com</span>
                            </div>
                        </div>
                        <div className="phone d-flex align-items-center">
                            <div className="me-2">
                                <AddLocationIcon />
                            </div>
                            <div className="number">
                                <span>2753 Willison Street</span><br />
                                <span>Eagan, United State</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h3>Support</h3>
                        <p>Contact Us</p>
                        <p>About Us</p>
                        <p>Destination</p>
                        <p>Our Blogs</p>
                        <p>Package</p>
                    </div>
                    <div className="col-md-3">
                        <h3>We Accepts:</h3>
                        <div>
                            <img src="https://i.ibb.co/SvXbhhW/download.png" alt="" />
                            <img src="https://i.ibb.co/grwfJ8J/download-1.png" alt="" />
                            <img src="https://i.ibb.co/L0yDDTN/download-2.png" alt="" />
                            <img src="https://i.ibb.co/t2GhpYq/download-3.png" alt="" />
                            <img src="https://i.ibb.co/wcWgw4j/download-4.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="row py-3">
                    <p className="text-center">Copyright 2021 <span className="text-warning">TourX</span> | Design By Programming Hero Team</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;