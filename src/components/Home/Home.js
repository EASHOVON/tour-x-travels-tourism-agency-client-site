import { faHandsHelping, faSmile, faStar, faUsers, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './Home.css'
import Packages from './Packages/Packages';

const Home = () =>
{
    return (
        <div>
            <Header></Header>
            <Carousel className="slider-body">
                <Carousel.Item className="slider-one">
                    <Container>
                        <div className="row">
                            <div className="col-md-7 slider-content">
                                <h1>Amazing Tour <br />
                                    In Hampshire
                                </h1>
                                <h5>7 Days, 8 Night Tour</h5>
                                <button className="book-btn">Book Now</button>
                            </div>
                            <div className="col-md-5"></div>
                        </div>
                    </Container>
                </Carousel.Item>
                <Carousel.Item className="slider-two">
                    <Container>
                        <div className="row">
                            <div className="col-md-7 slider-content">
                                <h1>Amazing Tour <br />
                                    In Indonesia
                                </h1>
                                <h5>7 Days, 8 Night Tour</h5>
                                <button>Book Now</button>
                            </div>
                            <div className="col-md-5"></div>
                        </div>
                    </Container>
                </Carousel.Item>
                <Carousel.Item className="slider-three">
                    <Container>
                        <div className="row">
                            <div className="col-md-7 slider-content">
                                <h1>Amazing Tour <br />
                                    In Madagascar
                                </h1>
                                <h5>7 Days, 8 Night Tour</h5>
                                <button>Book Now</button>
                            </div>
                            <div className="col-md-5"></div>
                        </div>
                    </Container>
                </Carousel.Item>
            </Carousel>
            <Container className="my-5">
                <h5 className="text-center">Choose your package</h5>
                <h1 className="text-center">Select Your Best Package <br />For Your Travel</h1>
                <Packages></Packages>
            </Container>
            <Container className="my-5">
                <h5 className="text-center">Why TourX</h5>
                <h1 className="text-center">Why You Are Travel With <br />Tourx</h1>
                <div className="row">
                    <div className="col-3 card-ex">
                        <div>
                            <img className="img-fluid" src="https://i.ibb.co/ZJt68Bn/tour-guide-1.png" alt="" />
                        </div>
                        <div>
                            <h5>2000+ Our <br />worldwide guide</h5>
                        </div>
                    </div>
                    <div className="col-3 card-ex">
                        <div>
                            <img src="https://i.ibb.co/996YSj7/trust.png" alt="" className="img-fluid" />
                        </div>
                        <div>
                            <h5>100% trusted travel <br />worldwide guide</h5>
                        </div>
                    </div>
                    <div className="col-3 card-ex">
                        <div>
                            <img src="https://i.ibb.co/vcbnyTb/experience.png" alt="" className="img-fluid" />
                        </div>
                        <div>
                            <h5>10+ year of travel <br />experience</h5>
                        </div>
                    </div>
                    <div className="col-3 card-ex">
                        <div>
                            <img src="https://i.ibb.co/98Y7H7X/traveller.png" alt="" className="img-fluid" />
                        </div>
                        <div>
                            <h5>90% of our traveller <br />happy</h5>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="extra-two">
                <Container className="my-5">
                    <h5 className="text-center">Feature Tours</h5>
                    <h1 className="text-center mb-5">See Our Best Popular <br />Destinations</h1>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <img className="img-fluid" src="https://tourx-react.egenslab.com/static/media/f-1.7656771a.png" alt="" />
                                </div>
                                <div className="col-md-8">
                                    <h4>Group Travel Go To Bea <br />Amsterdam</h4>
                                    <small><FontAwesomeIcon className="icon" icon={faStar} /> 7K+Rating</small>
                                    <h4>$190</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <img className="img-fluid" src="https://tourx-react.egenslab.com/static/media/f-1.7656771a.png" alt="" />
                                </div>
                                <div className="col-md-8">
                                    <h4>Group Travel Go To Bea <br />Amsterdam</h4>
                                    <small><FontAwesomeIcon className="icon" icon={faStar} /> 7K+Rating</small>
                                    <h4>$190</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;

