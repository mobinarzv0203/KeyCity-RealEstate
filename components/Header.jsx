import { useState } from "react";

const Header = () => {

  const [isActive, setIsActive] = useState(true);


  const handleMouseOver = () =>{
    setIsActive(false);
  };

  const handleMouseLeave = () => {
    setIsActive(true);
  }
  return (
    <div id="header">

        <div className="navbar">
          <h1>KeyCity</h1>

          <ul>
            <li><a href="#">Rent</a></li>
            <li><a href="#">Buy</a></li>
            <li><a href="#">Sell</a></li>
            <li>Manage Property
              <i className="fa fa-angle-down"></i>
              <ul>
                <li><a href="#">Properties List</a></li>
                <li><a href="#">Insert New Property</a></li>
                <li><a href="#">Edit/Remove Property</a></li>
                <li><a href="#">Show Property Status</a></li>
              </ul>
            </li>
            <li>Resources
              <i className="fa fa-angle-down"></i>
              <ul>
                <li><a href="#">Blog and Articles</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Guides</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </li>
          </ul>

          <ul>
            <li><a href="#" className="border btn-light">Login</a></li>
            <li>
              <a 
                  href="#" 
                  className={isActive ? "btn-primary border" : "border" }  onMouseOver={handleMouseOver}
                  onMouseLeave={handleMouseLeave}
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
} 

export default Header;


