import React from 'react';
import "./Online.css";
import img1 from '../../assests/two_wheeeler_img.png'

function Online() {
  return (
    <div className='online-container'>
        <h2>Why You Should Buy Two Wheeler  Insurance Online </h2>
        <div className='online-main-container'>
        <div className='online-img-container'>
            <img src={img1}/>
        </div>
        <div className='online-list-container'>
            <ul>
                 <li>
                    <p><strong>Instant online policy on email</strong></p>
                    <p>Get the convenience of receiving your policy instantly via email. This seamless process ensures immediate access to your coverage without any delays. Just fill in details about yourself and your bike, make the payment, and you are done.</p>
                </li>
                <li>
                    <p><strong>No paperwork</strong></p>
                    <p>Get comprehensive coverage for your bike in just a few clicks without cumbersome paperwork. Check premiums online for the right coverage and customise your policy on the go.</p>
                </li>
                <li>
                    <p><strong>Allows smooth renewal online</strong></p>
                    <p>You can renew your policy online with a few clicks from anywhere, anytime. Just enter the policy details and renew your plan instantly.</p>
                </li>
                <li>
                    <p><strong>Digital claims process</strong></p>
                    <p>Say goodbye to endless physical visits to the office. Simply log in to our IL Take Care app, file your claim digitally, and receive instant repair approval through InstaSpect.</p>
                </li>
                <li>
                    <p><strong>Round the clock claims assistance</strong></p>
                    <p>Our 24/7 claim assistance makes the claim process hassle-free. Contact us anytime at 1800 2666 for prompt support.</p>
                </li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Online