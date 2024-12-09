import React, { useState } from 'react';
import "./Header.css";
import call from '../assests/call.png';
import callBack from '../assests/callBack.png';
import liveChaat from '../assests/liveChaat.png';
import logo from '../assests/logo-new.png';
import hamburger from '../assests/quill_hamburger.png';

function Header() {
  const [dropdownMenu, setDropdownMenu] = useState(null);
  const [navOpen, setNavOpen] = useState(false);

  const handleMouseHover = (menu) => {
    setDropdownMenu(menu);
  };

  const handleMouseLeave = () => {
    setDropdownMenu(null);
  };
  
  const toggleNav = () => {
    setNavOpen(!navOpen); 
  };

  return (
    <header>
      <div className='top-container'>
        <a>
          <img src={call} alt="Call" />
          1800 266
        </a>
        <a>
          <img src={callBack} alt="Call Back" />
          Call Back
        </a>
        <a>
          <img src={liveChaat} alt="Live Chat" />
        </a>
      </div>
      <nav>
        <img src={logo}/>
        <div className='hamburger' onClick={toggleNav}>
        <img src={hamburger}/>
        </div>
        <div className={`main-container ${navOpen ?'menu-active' : ''}`}>
          <ul>
            {['Car Insurance', 'Two Wheeler Insurance', 'Health Insurance', 'Travel Insurance', 'Other Insurance', 'Claims'].map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => handleMouseHover(index)}
                onMouseLeave={handleMouseLeave}
                className={dropdownMenu === index ? 'active' : ''}
              >
                <a>{item}</a>
                {dropdownMenu === index && (
                  <div className="dropdown">
                    <ul>
                      <li>Option 1</li>
                      <li>Option 2</li>
                      <li>Option 3</li>
                    </ul>
                  </div>
                )}
              </li>
            ))}
            <li>
              <button className='btn'>Login</button>
            </li>
            {/* <li>
              <img src={hamburger}/>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
