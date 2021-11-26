
import React, { useEffect, useState } from 'react';
import { Card, Col, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import './PlaceOrder.css';
import { useForm } from "react-hook-form";
import useAuth from '../../../../../hooks/useAuth';
import axios from 'axios';


const PlaceOrder = () => {
  const { _id } = useParams();
  const [details, setDetails] = useState({});

  const { user } = useAuth();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    data.serviceName = details.name;


    console.log(data);

    axios.post('https://secret-taiga-95902.herokuapp.com/myOrders', data)
      .then(res => {
        if (res.data.insertedId) {
          alert('wanna confirm your order?');
          reset();
        }
      })


  }

  useEffect(() => {

    fetch(`https://secret-taiga-95902.herokuapp.com/showDetails/${_id}`)
      .then(res => res.json())
      .then(data => setDetails(data))
  }, [_id]);


  return (
    <div>
      <h2 className="selected-service">Thanks for choosing the service </h2>
      <div className="individual-service">
        <Card style={{ width: '500px', height: '700px' }}>
          <Card.Img variant="top" src={details.img} />
          <Card.Body>
            <Card.Title>Service you get : {details.name}</Card.Title>
            <Card.Text>
              {details.description}
            </Card.Text>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Choose your Menu</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Cake Special</option>
                <option>Peetha</option>
                <option>Sweet</option>
                <option>Icecream</option>
              </Form.Select>
            </Form.Group>
          </Card.Body>


        </Card>
      </div>

      <div>
        <div >
          <h1 className="get-food">One more step to get the <span style={{ color: ' rgb(196, 88, 169)' }}>Delicious</span> food</h1>
        </div>
        <div>
          <form className="order-place" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" {...register("status")} defaultValue="pending" />
            <input type="text" {...register("userName")} defaultValue={user.displayName} placeholder="your name" required />
            <input type="email" {...register("userEmail", { required: true, maxLength: 20 })} defaultValue={user.email} placeholder="email" />
            <input type="number" {...register("userPhoneNumber", { required: true, maxLength: 20 })} placeholder="your phone number" />

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;