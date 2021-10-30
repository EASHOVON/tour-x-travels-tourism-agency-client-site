import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import Header from './Header/Header';
import './Home.css'

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
        </div>
    );
};

export default Home;

