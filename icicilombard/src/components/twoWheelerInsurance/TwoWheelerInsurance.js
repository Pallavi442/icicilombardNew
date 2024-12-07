import React from 'react';
import "./TwoWheelerInsurance.css";
import img1 from "../../assests/key/1.png";
import img2 from "../../assests/key/2.png";
import img3 from "../../assests/key/3.png";
import img4 from "../../assests/key/4.png";

function TwoWheelerInsurance() {
  return (
    <div className='two-wheeler-container'>
        <h2>Key Feature Of Two Wheeler Insurance</h2>
        <div className='two-wheeler-main'>
            <div className='two-wheeler-main-div'>
            <div className='two-wheeler-sub-div'>
                <img src={img1}/>
              
                  <h3>Financial Security</h3> 
                  </div>
                  <p>Reduces out-of-pocket expenses during unforeseen events.</p>     
              
            </div>
            <div className='two-wheeler-main-div'>
            <div className='two-wheeler-sub-div'>
            <img src={img2}/>
              
                <h3>Covarange Options</h3> 
                </div>
                <p>Flexible plans to suit different budgets and needs.</p>    
             
            </div>
            <div className='two-wheeler-main-div'>
            <div className='two-wheeler-sub-div'>
            <img src={img3}/>
           
                <h3>Legal Compliance</h3> 
                </div>
                <p>Ensures you meet the legal requirements for riding on the road.</p>    
          
            </div>
            <div className='two-wheeler-main-div'>
            <div className='two-wheeler-sub-div'>
            <img src={img4}/>
            
                <h3>Add-Ons</h3> 
                </div>
                <p>Includes options like zero depreciation, roadside assistance</p>    
            
            </div>
        </div>

    </div>
  )
}

export default TwoWheelerInsurance