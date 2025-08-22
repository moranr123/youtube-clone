import React from "react";
import "./Navbar.css"; // Assuming you have a CSS file for styling
import menu_icon from "../../assets/menu.png"; // Adjust the path as necessary
import logo from "../../assets/logo.png"; // Adjust the path as necessary
import search_icon from "../../assets/search.png"; // Adjust the path as necessary
import upload_icon from "../../assets/upload.png"; // Adjust the path as necessary
import notification_icon from "../../assets/notification.png"; // Adjust the path as necessary
import more_icon from "../../assets/more.png"; // Adjust the path as necessary
import profile_icon from "../../assets/jack.png"; // Adjust the path as necessary

const Navbar = ({setSidebar}) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img src={menu_icon} onClick={()=> {setSidebar(prev=>prev=== false ? true:false)}} alt="" />
        <img src={logo} alt="" />
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
            <input type="text" placeholder="Search" />
        <img src={search_icon} alt="" />
        </div>
        
      </div>
        <div className="nav-right flex-div">
           <img src={upload_icon} alt="" />
           <img src={more_icon} alt="" />
           <img src={notification_icon} alt="" />
           <img src={profile_icon} className="user-icon" alt="" />
        </div>
    </nav>
  );
}

export default Navbar;
