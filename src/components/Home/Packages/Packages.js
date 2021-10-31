import { CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCol, CRow } from '@coreui/react';
import { Link } from 'react-router-dom';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const Packages = () =>
{
    const [packages, setPackages] = useState([]);
    useEffect(() =>
    {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    return (
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
            {
                packages.map(service => (
                    <CCol key={service._id} xs>
                        <CCard>
                            <CCardImage orientation="top" src={service.img} />
                            <CCardBody>
                                <CCardTitle>{service.name}</CCardTitle>
                                <CCardText>
                                    {service.description}
                                </CCardText>
                                <div className="row d-flex align-items-center justify-content-center">
                                    <div className="col-md-7">
                                        <h5>{service.price}</h5>
                                    </div>
                                    <div className="col-md-5">
                                        <h6>{service.time}</h6>
                                    </div>
                                </div>
                                <div className="row mt-3 d-flex align-items-center justify-content-center">
                                    <p><StarRoundedIcon /> {service.rating} Rating</p>
                                </div>
                                <div className="row">
                                    <Link to={`/book/${ service._id }`}><Button>Book Now</Button></Link>
                                </div>
                            </CCardBody>
                        </CCard>
                    </CCol>
                ))
            }
        </CRow>
    );
};

export default Packages;