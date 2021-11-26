import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload , faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <div>
            <div className="footer--part">
                <input className="input-text" type="text" placeholder="Enter your E-mail Address" />
                <Button className="btn-subscribe">Subscribe Us</Button>
                <div className="footer-detail">
                    <div className="footer-intro">
                        <h2 className="footer-title">Tast-E ride</h2>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM0LRnzpkHAHJwJ2P1L0J99b7JrvBLaqkRmw&usqp=CAU"
                        />
                    </div>





                    <div className="about-app">
                        <h2> <FontAwesomeIcon icon={faDownload} />  Download the App</h2>
                       <div className="download-btn">
                       <button style={{marginBottom: "10px"}}><FontAwesomeIcon icon={faArrowAltCircleRight} />   Available on the App Store</button>
                       <button><FontAwesomeIcon icon={faArrowAltCircleRight} />   Android available on Google Play</button>
                       </div>
                      


                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;