import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import useFirebase from '../../../../hooks/useFirebase';

import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth();
    
    
    const activeStyle = {
        fontWeight: "bold",


    }
    return (
        <Navbar className="navbar">
        <Container>
            <Navbar.Brand href="#home">

                <div>
                    <h2 className="header-title">Tast-E ride </h2>
                    <p></p>


                    <img alt=""
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0dkGdWrUhNjrVDI0BS3MfveWX0o_fY7qOA&usqp=CAU"
                        width="120"
                        height="80"


                        className="d-inline-block align-top"
                    />
                </div>

            </Navbar.Brand>
            <nav className="header-part" >
                    <div className="links">
                        <NavLink className="link" activeStyle={activeStyle} to="/home">Home</NavLink>
                        
                        <br/>
                      
                        {user.email && 
                        <span
                           className="user-name">Welcome !
                            {user.displayName}
                        </span>}
                        <br/>
                       { 
                       user.email ?
                       <div>
                           <NavLink className="link" activeStyle={activeStyle} to="/myallorders">My Orders</NavLink> 
                           <NavLink className="link" activeStyle={activeStyle} to="/managingAllOrders">Manage All Orders</NavLink> 
                           <NavLink className="link" activeStyle={activeStyle} to="/addservice">Add a New Service</NavLink> 
                       <button className="logout-btn" onClick={logOut}>Log Out </button>
                       </div>
                       :

                       <NavLink className="link" activeStyle={activeStyle} to="/login">Login</NavLink>}
                    </div>
                    <br />
                   
                    </nav>
            

            </Container>
            </Navbar>
    );
};

export default Header;