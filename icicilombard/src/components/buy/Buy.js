import React from 'react';
import "./Buy.css";
import img1 from '../../assests/Icons/1.png';
import img2 from '../../assests/Icons/2.png'
import img3 from '../../assests/Icons/3.png'
import img4 from '../../assests/Icons/4.png'
import img5 from '../../assests/Icons/5.png'
import img6 from '../../assests/Icons/6.png'
import img7 from '../../assests/Icons/7.png'
import img8 from '../../assests/Icons/8.png'

function Buy() {
  return (
    <div className='buy-container'>
        <h3>Things to keep in mind while buying a two wheeler insurance policy </h3>
        <div className='buy-main'>
            <div className='buy-main-div'>
                <img src={img1}/>
                <div className='buy-sub-div'>
                    <h4>Coverage Type</h4>
                    <p>Decide between Third-Party Insurance (mandatory by law) or Comprehensive Insurance (for better protection, including own damages).</p>
                </div>
            </div>
            <div className='buy-main-div'>
               <img src={img2}/>
               <div className='buy-sub-div'>
                    <h4>Add-Ons and Riders</h4>
                    <p>Look for useful add-ons like zero depreciation, roadside assistance, engine protection, and personal accident cover.</p>
                </div>

            </div>
            <div className='buy-main-div'>
               <img src={img3}/>
               <div className='buy-sub-div'>
                    <h4>Insured Declared Value (IDV)</h4>
                    <p>Check the IDV, as it determines the maximum claim amount in case of total loss or theft. Choose an appropriate IDV to balance coverage and premiums.</p>
                </div>
            </div>
            <div className='buy-main-div'>
               <img src={img4}/>
               <div className='buy-sub-div'>
                    <h4>Policy Duration</h4>
                    <p>Consider long-term policies (up to 3 years) to avoid annual renewals and enjoy discounts..</p>
                </div>
            </div>
            <div className='buy-main-div'>
               <img src={img5}/>
               <div className='buy-sub-div'>
                    <h4>Premium Amount</h4>
                    <p>Compare premiums from multiple providers. Ensure the premium aligns with the features and benefits offered..</p>
                </div>
            </div>
            <div className='buy-main-div'>
               <img src={img6}/>
               <div className='buy-sub-div'>
                    <h4>Exclusions</h4>
                    <p>Read the policy terms to understand what’s not covered, such as normal wear and tear or illegal usage.</p>
                </div>
            </div>
            <div className='buy-main-div'>
               <img src={img7}/>
               <div className='buy-sub-div'>
                    <h4>Claim Settlement Ratio</h4>
                    <p>Check the insurer's claim settlement ratio to assess their reliability in processing claims quickly and efficiently.</p>
                </div>
            </div>
            <div className='buy-main-div'>
               <img src={img8}/>
               <div className='buy-sub-div'>
                    <h4>Customer Support</h4>
                    <p>Ensure the insurer provides 24/7 customer assistance for queries or emergencies.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Buy