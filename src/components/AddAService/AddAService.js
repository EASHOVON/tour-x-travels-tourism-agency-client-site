import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import './AddAService.css'

const AddAService = () =>
{
    const nameRef = useRef();
    const moneyRef = useRef();
    const timeRef = useRef();
    const rattingRef = useRef();
    const descRef = useRef();
    const imgRef = useRef();
    const handleSubmit = (e) =>
    {
        const name = nameRef.current.value;
        const price = moneyRef.current.value;
        const time = timeRef.current.value;
        const rating = rattingRef.current.value;
        const description
            = descRef.current.value;
        const img = imgRef.current.value;
        const newService = {
            name, price, time, rating, description
            , img
        }
        fetch('https://wicked-mummy-37996.herokuapp.com/packages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data =>
            {
                if (data.insertedId)
                {
                    alert('User Addeded Successfully')
                    e.target.reset();
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <Container className="py-5">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-center">Add A Travells Information</h3>
                    </div>
                </div>
                <div className="row ">
                    <form className="col-md-5 mx-auto" onSubmit={handleSubmit}>
                        <input type="text" ref={nameRef} placeholder="Name of a Place" />
                        <input type="text" ref={moneyRef} placeholder="Add a Compareable Money" />
                        <input type="text" ref={timeRef} placeholder="Time" />
                        <input type="text" ref={rattingRef} placeholder="Ratting" />
                        <textarea placeholder="Add description" ref={descRef} cols="30" rows="10"></textarea>
                        <input type="text" ref={imgRef} placeholder="place an image link of your places" />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default AddAService;