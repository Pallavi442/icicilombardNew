import React from 'react';
import "./Reason.css";
import img1 from '../../assests/01.png';
import img2 from '../../assests/02.png';
import img3 from '../../assests/03.png';
import img4 from '../../assests/04.png';
import img5 from '../../assests/05.png';
import bike_img from '../../assests/man_with_bike.png';
import arrow from '../../assests/btn-icn.png';

function Reason() {
    return (
        <div className='reason-container'>
            <div className='reason-main'>
                <div className='img-container'>
                    <img className="reason-img" src={bike_img}/>
                </div>
                <div className='reason-main1'><h3>Reason to buy bike insurance Online</h3>
                <div className='reason-main-div'>
                    <div className='reason-sub-div'>
                      <img src={img1}/> 
                      <h3>Convenience</h3>   
                      <p>Compare different plans and purchase insurance at your comfort</p>  
                    </div>
                    <div className='reason-sub-div'>
                    <img src={img2}/>  
                    <h3>24X7 availability</h3>   
                    <p>Buy anytime, any day from anywhere</p>  
                    </div>
                    <div className='reason-sub-div'>
                    <img src={img3}/>  
                    <h3>Quick process</h3>   
                    <p>Usually faster than traditional methods, where you can complete the process in just a few clicks</p>  
                    </div>
                    <div className='reason-sub-div'>
                    <img src={img4}/>
                    <h3>User-friendly tools</h3>   
                    <p>Get calculators and tools to understand the coverage needed and the costs</p>    
                    </div>
                    <div className='reason-sub-div'>
                    <img src={img5}/>  
                    <h3>Instant policy issuance</h3>   
                    <p>Get policy documents immediately upon premium payment</p>  
                    </div>
                </div>
                <div className='btn-div'>
                <button className='apply-btn'>Apply Now <img src={arrow}/></button>
                </div>
              
                </div>
            </div>

        </div>
    )
}

export default Reason