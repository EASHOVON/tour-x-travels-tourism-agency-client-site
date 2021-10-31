import { Link } from 'react-router-dom';
import React from 'react';
import { Button } from 'react-bootstrap';
import './NotFound.css'

const NotFound = () =>
{
    return (
        <div>
            <div className="notFound-img text-center">
                <img className="img-fluid" src="https://i.ibb.co/HB4RG51/2459468-ai.png" alt="" />
                <div className="notfound-btn"><Link to="/home"><Button>Back To Home</Button></Link></div>

            </div>
        </div>
    );
};

export default NotFound;