
import React, { useEffect, useState } from 'react';
import { ButtonGroup, Card, Carousel, Dropdown, DropdownButton, FormControl, InputGroup, Row, SplitButton } from 'react-bootstrap';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation, faSearchPlus, faMoneyBill  }from '@fortawesome/free-solid-svg-icons'
import Services from './Services/Services';


const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://secret-taiga-95902.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <div>
                <Carousel className="banner">
                    <Carousel.Item className="carousel-description">
                        <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVkCO7Tk352a4s9JQq9SmNuDsLpD0QNqKTvw&usqp=CAU"
                            alt="First slide"

                        />

                    </Carousel.Item>
                    <Carousel.Item className="carousel-description">
                        <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT9kfWVt1vTnlHYGGF6GdJpMhpBnzYvb4vGQ&usqp=CAU"
                            alt="Second slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item className="carousel-description">
                        <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhYtjU8eN0RXJ4VRZoKrgzbGBmNvLZF3BExA&usqp=CAU"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <div className="all-services">Services you can have</div>
                <div>
                    <Row xs={1} md={3} className="g-4">
                        {
                            //    all  services and details
                            services.map(service => <Services
                                key={service._id}
                                service={service}></Services>)
                        }
                    </Row>
                </div>
            </div>
            <div className="area-part">
                <div>
                    <h2 className="areaSection-title">Food Delivery Areas we currently serve <FontAwesomeIcon icon={faSearchLocation} /></h2>
                    <div className="areas-details">
                        <>
                            <div className="areas-name">
                                <div className="mb-5">
                                    {['Banani', 'Gulshan', 'Dhanmondi', 'Uttara'].map((direction) => (
                                        <DropdownButton
                                            as={ButtonGroup}
                                            key={direction}
                                            id={`dropdown-button-drop-${direction}`}
                                            drop={direction}
                                            variant="secondary"
                                            title={` ${direction} `}
                                        >
                                            <Dropdown.Item eventKey="1">{direction}-1</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">{direction}-2</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">{direction}-3</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4">choose your area</Dropdown.Item>
                                        </DropdownButton>
                                    ))}
                                </div>

                                <div className="mb-5">
                                    {['Khilgaon', 'Azimpur', 'Chashara', 'Mirpur'].map((direction) => (
                                        <SplitButton
                                            key={direction}
                                            id={`dropdown-button-drop-${direction}`}
                                            drop={direction}
                                            variant="secondary"
                                            title={`${direction}`}
                                        >
                                            <Dropdown.Item eventKey="1">{direction}-1</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">{direction}-2</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">{direction}-3</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4">choose your area</Dropdown.Item>
                                        </SplitButton>
                                    ))}
                                </div>
                            </div>
                        </>
                    </div>
                </div>
                <div>
                    <h2 className="input-address">your Favorite food is on the way. . . </h2>
                    <InputGroup className="mb-3">
                        <FormControl className="input-area"
                            placeholder="enter your delivery address"
                            aria-label="enter your delivery address"
                            aria-describedby="basic-addon2"
                        />


                        <button className="address-btn">Go</button>
                    </InputGroup>
                </div>
            </div>
            <div>
                <div>
                    <h3 className="order-methods">How it works?</h3>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_1E4DMQqreMuwY1yL9YmjmhkrGt5hEw4Ybg&usqp=CAU" roundedCircle />
                </div>

                <div className="how-to-order">
                    <div className="offers">
                        <div>
                            <Card border="info" style={{ width: '300px', height:'400px' }}>
                                <Card.Header
                                style={{fontWeight : '700', color:'rgb(182, 150, 8)'}}
                                >search by address</Card.Header>
                                <Card.Body>
                                    <Card.Title><FontAwesomeIcon icon={faSearchLocation} /></Card.Title>
                                    
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZv4v6db4pBqCllzTvm4mgqHKg-fU1LLaqHw&usqp=CAU" />
                                    <Card.Text
                                     style={{marginTop : '20px', color:'rgb(158, 106, 27)'}}>
                                       Find all restaurants available in your zone
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </div>

                        <div>
                        <Card border="info" style={{ width: '300px', height:'400px' }}>
                                <Card.Header
                                style={{fontWeight : '700', color:'rgb(182, 150, 8)'}}
                                >choose a restaurant</Card.Header>
                                <Card.Body>
                                    <Card.Title><FontAwesomeIcon icon={faSearchPlus} /></Card.Title>
                                    
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaLYTCePeOqO3gKH36H5kL3oVl8nKXt7mDMA&usqp=CAU" />
                                    <Card.Text
                                     style={{marginTop : '20px', color:'rgb(158, 106, 27)'}}>
                                     we have more than 1100's menus in online
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </div>
                        <div>
                        <Card border="info" style={{ width: '300px', height:'400px' }}>
                                <Card.Header
                                style={{fontWeight : '700', color:'rgb(182, 150, 8)'}}
                                >pay by card or cash</Card.Header>
                                <Card.Body>
                                    <Card.Title><FontAwesomeIcon icon={faMoneyBill} /></Card.Title>
                                    
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulTsSx4ldjH--RWklN1fzh8jNlHCH-IF7HA&usqp=CAU" />
                                    <Card.Text
                                     style={{marginTop : '20px', color:'rgb(158, 106, 27)'}}>
                                       it's quick, easy and totally secure
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </div>
                        <div>
                        <Card border="info" style={{ width: '300px', height:'400px' }}>
                                <Card.Header
                                style={{fontWeight : '700', color:'rgb(182, 150, 8)'}}
                                >delivery or takeaway</Card.Header>
                                <Card.Body>
                                    <Card.Title><FontAwesomeIcon icon={faSearchLocation} /></Card.Title>
                                    
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2aLaacrlfNvot9GyXhupoIXlrGOteQad0A&usqp=CAU" />
                                    <Card.Text
                                     style={{marginTop : '20px', color:'rgb(158, 106, 27)'}}>
                                      you are lazy? Are you backing home?
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;