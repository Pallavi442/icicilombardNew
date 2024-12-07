import React from 'react';
import "./Header.css";
import call from '../assests/call.png';
import callBack from '../assests/callBack.png';
import liveChaat from '../assests/liveChaat.png';
import logo from '../assests/logo-new.png';
import hamburger from '../assests/quill_hamburger.png';

function Header() {
  return (
    <header>
        <div className='top-container'>
        <a>
           <img src={call}/>
           1800 266
          </a>
          <a>
           <img src={callBack}/>
           Call Back
          </a>
          <a>
            <img src={liveChaat}/>
          </a>
        </div>
       <nav>
             <img src={logo}/>
             <div className='main-container'>
                <ul>
                    <li>
                        <a>Car Insurance</a>
                
                    </li>
                    <li>
                        <a> Two Wheeler Insurance</a>
                   
                    </li>
                    <li>
                        <a>Health Insurance</a>
             
                    </li>
                    <li>
                        <a>Travel Insurance</a>
                    </li>
                    <li>
                     <a>Other Insurance</a>   
                    </li>
                    <li>
                     <a>Claims
                    </a>   

                    </li>
                    <li>
                        <button className='btn'>login</button>
                    </li>
                    <li>
                        <img src={hamburger}/>
                    </li>
                </ul>
             </div>
       </nav>
    </header>
  )
}

export default Header