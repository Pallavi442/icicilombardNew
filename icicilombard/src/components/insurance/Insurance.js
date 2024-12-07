import React from 'react';
import "./Insurance.css";
import img from '../../assests/image.png';
import img2 from '../../assests/pepicons-print_handshake.png';
import img3 from '../../assests/3.png';
import img4 from '../../assests/ri_motorbike-fill.png';


function Insurance() {
  return (
    <div className="insurance-container">
      <div className='img-container'>
      <img src={img}/>
      </div>
      <div className='insurance-main-container'>
        <h3>
          What is Two Wheeler Insurance?
        </h3>
        <p>Two-wheeler insurance is a type of motor vehicle insurance designed specifically for motorcycles, scooters, and other two-wheelers. It provides financial protection against potential risks such as accidents, theft, natural disasters, and third-party liabilities. In India, having at least a basic Third-Party Liability insurance policy is legally mandatory under the Motor Vehicles Act, 1988.</p>
        <div className='insurance-main-div'>
          <img src={img2}/>
          <div className='insurance-sub-div'>
          <h3>Third-Party Insurance</h3>
          <ul>
            <li>Covers damages caused to another person’s property, vehicle, or injuries to a third party.
           </li>
            <li>
              Mandatory by law but does not cover damage to your own vehicle.
            </li>
          </ul>
          </div>
        </div>
        <div className='insurance-main-div'>
          <img src={img3}/>
          <div className='insurance-sub-div'>
          <h3>Comprehensive Insurance</h3>
          <ul>
            <li>Covers both third-party liabilities and damages to your own two-wheeler due to accidents, theft, fire, or natural calamities.
          </li>
            <li>Offers optional add-ons for enhanced protection.</li>
          </ul>
          </div>
        </div>
      
       <div className='insurance-main-div'>
          <img src={img4}/>
          <div className='insurance-sub-div'>
          <h3>Standalone Own Damage Cover</h3>
          <ul>
            <li>Covers only the damages to your own vehicle, without third-party coverage.
          </li>
            <li>Ideal for those who already have a valid third-party policy.</li>
          </ul>
          </div>
        </div>
      </div>
       
    </div>
  )
}

export default Insurance