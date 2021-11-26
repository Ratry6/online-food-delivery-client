import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown} from '@fortawesome/free-solid-svg-icons';
import './MyOrder.css'
import { Card } from 'react-bootstrap';


const MyOrders = () => {
    const {user} = useAuth();
    const email = user?.email;
    
    const [myOrders, setMyOrders] = useState([]);
const handleDeleteBtn =  (id) =>{
    console.log(id);
    fetch(`https://secret-taiga-95902.herokuapp.com/deleteOrder/${id}`,{
        method :'DELETE'
    }
    )
    .then(res=> res.json())
    .then(data =>{
        if(data.deletedCount===1){
                alert('deleted successfullly');
               const remainingOrder = myOrders.filter(ele => ele._id !== id);
               setMyOrders(remainingOrder);
        }
    })
}

    useEffect(()=>{
        fetch(`https://secret-taiga-95902.herokuapp.com/myAllOrders/${user.email}` )
        .then(res=> res.json())
        .then(data=> setMyOrders(data))
    },[user.email]);
    return (
        <div>
            <h1 className="order-number">you have ordered <span
            style = {{color: 'orange' , fontSize :'30px'}}
            > {myOrders?.length}
            </span> items</h1>
            
            {
                myOrders.map(order =><div>
          
                 <Card className="order-info" style={{ width: '18rem', height:'300px' }}>
  <Card.Body>
    <Card.Title className="info-title">Order Information</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">user email : {order.userEmail}</Card.Subtitle>
    
    <Card.Text className="service-name">
    The service you've selected is : <span style={{color:'crimson', fontSize:'22px'}}> {order.serviceName}</span>
    </Card.Text>
    <Card.Text>
    <p>Do you want to delete any order? Click Below  <FontAwesomeIcon icon={faArrowDown} /> </p>
                 <button className="delete-btn" onClick={()=> handleDeleteBtn(order._id)}>Cancel Order</button> 
    </Card.Text>
   
  </Card.Body>
</Card>
                
                </div>)
            }

        </div>
    );
};

export default MyOrders;