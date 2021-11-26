import React, { useEffect, useState } from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import './ManageAllOrders.css'

const ManageAllOrders = () => {
    const [manageAllOrders, setManageAllOrders] = useState([]);
    const [update,setUpdate] = useState(false);

    const handleDeleteBtn = (id) => {
        console.log(id);
        fetch(`https://secret-taiga-95902.herokuapp.com/deleteOrder/${id}`, {
            method: 'DELETE'
        }
        )
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    alert('deleted successfullly');
                    const remainingOrder = manageAllOrders.filter(ele => ele._id !== id);
                    setManageAllOrders(remainingOrder);
                }
            })
    }
    useEffect(() => {
        fetch('https://secret-taiga-95902.herokuapp.com/managingAllOrders')
            .then(res => res.json())
            .then(data => setManageAllOrders(data))
    }, [update]);

    
    const handleUpdate = id =>{
        console.log(id);
        const userId = {idName : id};
        console.log(userId)
        fetch(`https://secret-taiga-95902.herokuapp.com/managingAllOrders`,{
                    method : 'PUT',
                    headers:{
                        'content-type' : 'application/json'
                    },
                    body : JSON.stringify(userId)
                })
                .then(res => res.json())
                .then(data=>{
                    console.log(data);
                    if(data.acknowledged){
                        alert('your status has been updated');
                        setUpdate(true);
                    }
                })

        

    }
    
    return (
        <div>
            <h1 className="manage-orders">Here, you can manage all your orders</h1>

            <div className="managing-part">
                <img style={{ margin: '10px 200px 60px 100px', height: '300px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWrZ5uzRP_PDdtZDHrTKps2RX9i85LELndfA&usqp=CAU" />
                <div>
                    {
                        manageAllOrders.map(manageOrder => <div>
                            <Card style={{ width: '18rem' , height: '300px', marginBottom : '100px' }}>
                                <Card.Header>Manage your order</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Service Name : {manageOrder.serviceName}</ListGroup.Item>
                                    <ListGroup.Item>User Email : {manageOrder.userEmail}</ListGroup.Item>
                                    <ListGroup.Item><button 
                                    className="remove-order"
                                    onClick={() => handleDeleteBtn(manageOrder._id)}>Remove an Order</button> </ListGroup.Item>
                                      <ListGroup.Item><button 
                                    className="remove-order"
                                    onClick={ ()=>handleUpdate(manageOrder._id)}

                                    >update</button> </ListGroup.Item>
                                    <ListGroup.Item >Status : {manageOrder.status}</ListGroup.Item>
                                </ListGroup>
                                
                            </Card>
                           
                            

                        </div>)
                    }


                </div>
              
            </div>
        </div>
    );
};

export default ManageAllOrders;