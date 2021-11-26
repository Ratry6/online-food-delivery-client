import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Services.css'

const Services = ({service}) => {
    const {_id, name, description,img} = service;
    const history = useHistory();
    const handleOrderBtn = (key)=>{
        history.push(`/placeOrder/${key}`);
        // console.log(key)
    }
    return (
        <div>
            <Col>
      <Card className="card">
        <Card.Img className="card-img" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="card-title">{name}</Card.Title>
          <Card.Text className="card-text">
            
            <p> {description}</p>
            <Button className="order-btn"
            onClick={()=>handleOrderBtn(_id)}
            >Order Now</Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Services;