import { CCard, CCardBody, CCardImage, CCardText, CCardTitle, CListGroup, CListGroupItem } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () =>
{
    const { bookingId } = useParams();

    const { user } = useAuth();
    const [details, setDetails] = useState([]);
    const [detail, setDetail] = useState({});

    useEffect(() =>
    {
        fetch('https://wicked-mummy-37996.herokuapp.com/packages')
            .then(res => res.json())
            .then(data =>
            {

                setDetails(data)
            })
    }, [])


    useEffect(() =>
    {
        const foundDetails = details.find(detail => detail._id === bookingId)
        setDetail(foundDetails)
    }, [bookingId, details])


    const handleOrderSubmit = (e) =>
    {
        e.preventDefault();
        const email = user.email;
        const tourId = bookingId;
        const name = detail.name;
        const img = detail.img;
        const description = detail.description;
        const price = detail.price;
        const time = detail.time;
        const rating = detail.rating
        const ordersInfo = { email, tourId, name, time, rating, description, img, price };
        fetch("https://wicked-mummy-37996.herokuapp.com/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(ordersInfo),
        });
        alert("Order has beed placed");
        e.target.reset();
    };

    return (
        <div className="py-5">
            <Container className="d-flex justify-content-center align-items-center">
                <CCard style={{ width: '18rem' }}>
                    <CCardImage orientation="top" src={detail?.img} />
                    <CCardBody>
                        <CCardTitle>{detail?.name}</CCardTitle>
                        <CCardText>
                            {detail?.description}
                        </CCardText>
                    </CCardBody>
                    <CListGroup flush>
                        <CListGroupItem>Package: {detail?.time}</CListGroupItem>
                        <CListGroupItem>Price: {detail?.price}</CListGroupItem>
                        <CListGroupItem>Rating: {detail?.rating}</CListGroupItem>
                    </CListGroup>
                </CCard>
            </Container>
            <Container>
                <form onSubmit={handleOrderSubmit}>
                    <input
                        type="text"
                        className="w-50 my-2 p-1"
                        name=""
                        id=""
                        value={user.displayName || ""}
                    />
                    <input
                        type="email"
                        className="w-50 my-2 p-1"
                        name=""
                        id=""
                        value={user.email || ""}
                    />
                    <textarea
                        name=""
                        placeholder="Address"
                        id=""
                        className="w-50"
                        required
                    ></textarea>
                    <input
                        type="text"
                        className="w-50 my-2 p-1"
                        name=""
                        id=""
                        required
                        placeholder="City, Country"
                    />
                    <input className="w-50 bg-warning" type="submit" value="Place Order" />
                </form>
            </Container>
        </div>
    );
};

export default PlaceOrder;