import React from 'react'
import "./Customer.css";
import img1 from '../../assests/img1.png';
import img2 from '../../assests/img2.png';
import img3 from '../../assests/img3.png';
import img4 from '../../assests/img4.png';
import img5 from '../../assests/img5.png'

function Customer() {
    return (
        <div className='customer-container'>
            <h3>Why our customers love us?</h3>
            <p>And, we think you will too.</p>
            <div className='customer-main'>
                <div className='customer-child'>
                    <img src={img1} />
                    <h3>Extensive Coverage Options</h3>
                    <p>Choose from Third Party (TP) or Comprehensive plans tailored to your needs.</p>
                </div>
                <div className='customer-child'>
                    <img src={img2} />
                    <h3>Instant Policy Issuance</h3>
                    <p>Buy or renew your policy online in minutes—no paperwork needed!</p>
                </div>
                <div className='customer-child'>
                    <img src={img3} />
                    <h3>Wide Network of Garages</h3>
                    <p>Access cashless repairs at an extensive network of trusted service centers.</p>
                </div>
                <div className='customer-child'>
                    <img src={img4} />
                    <h3>Hassle-Free Claims</h3>
                    <p>Quick and smooth claim settlement to get you back on the road without delays.</p>
                </div>
                <div className='customer-child'>
                    <img src={img5} />
                    <h3>Dedicated Support</h3>
                    <p>Our expert team is always ready to assist you at every step.</p>
                </div>
            </div>

        </div>
    )
}

export default Customer