import React from 'react';
import "./Hero.css";
import two_wheerler from '../../assests/two wheeler illustrate.png'

function Hero() {
  return (
    <div className='hero-container'>
        <div className='main-div1'>
        <h1>Two Wheeler Insurance</h1>
        <h2>Prices starting at just ₹2,094/yr</h2>
        <p>This amount refers to the TP rates only</p>
        <form>
        <div className='form-container'>
         <input placeholder='Car Registration No'/>
         <input placeholder='Mobile No'/>
         <input placeholder='Email'/>
         <button>Get quote</button>
         <a href="/">Retrive quote</a>
        
        </div>
        <div className='check-me'>
            <input
              type="checkbox"
              checked={true}
            />
            <label>I agree to the <a>terms and conditions</a></label>
          </div>
        </form>
        </div>
        <div className='main-div2'>
            <img src={two_wheerler}/>
        </div>

    </div>
  )
}

export default Hero