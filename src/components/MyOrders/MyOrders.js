import { CCard, CCardBody, CCardFooter, CCardGroup, CCardImage, CCardText, CCardTitle } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrders = () =>
{
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() =>
    {
        fetch(`http://localhost:5000/orders/${ user.email }`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user.email]);

    const handleDelete = (id) =>
    {
        const confirm = window.confirm("Are you sure, you wanna delete this?");
        if (confirm)
        {
            const url = `http://localhost:5000/orders/${ id }`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) =>
                {
                    console.log(data);
                    if (data.deletedCount)
                    {
                        const remaining = orders.filter((order) => order._id !== id);
                        setOrders(remaining);
                    }
                });
        }
    };
    return (
        <Container className="py-5">
            <h2 className="text-center">My Orders</h2>
            <CCardGroup>
                {
                    orders.map(order => (
                        <CCard key={order._id}>
                            <CCardImage orientation="top" src={order?.img} />
                            <CCardBody>
                                <CCardTitle>Name: {order?.name}</CCardTitle>
                                <CCardTitle>Price: {order?.price}</CCardTitle>
                                <CCardText>
                                    {order?.desc}
                                </CCardText>
                            </CCardBody>
                            <CCardFooter>
                                <Button onClick={handleDelete}>Delete</Button>
                            </CCardFooter>
                        </CCard>
                    ))
                }
            </CCardGroup>
        </Container>
    );
};

export default MyOrders;