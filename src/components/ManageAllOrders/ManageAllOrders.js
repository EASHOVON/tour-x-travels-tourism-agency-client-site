import { CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCol, CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const ManageAllOrders = () =>
{
    const [orders, setOrders] = useState([]);
    useEffect(() =>
    {
        fetch(`https://wicked-mummy-37996.herokuapp.com/allorders`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [orders]);
    return (
        <Container className="py-5">
            <h2 className="text-center">Manage All Orders</h2>
            <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
                {
                    orders.map(order => (
                        <CCol key={order._id} xs>
                            <CCard>
                                <CCardImage orientation="top" src={order?.img} />
                                <CCardBody>
                                    <CCardTitle>{order?.name}</CCardTitle>
                                    <CCardTitle>Price: {order?.price}</CCardTitle>
                                    <CCardText>
                                        {order?.description}
                                    </CCardText>
                                </CCardBody>
                            </CCard>
                        </CCol>
                    ))
                }
            </CRow>
        </Container>
    );
};

export default ManageAllOrders;