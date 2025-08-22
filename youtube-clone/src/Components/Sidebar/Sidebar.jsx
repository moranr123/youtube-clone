import React from "react";
import "./Sidebar.css"; // Assuming you have a CSS file for styling
import home from "../../assets/home.png"; // Adjust the path as necessary
import game_icon from "../../assets/game_icon.png"; // Adjust the path as necessary
import automobiles from "../../assets/automobiles.png"; // Adjust the path as necessary
import sports from "../../assets/sports.png"; // Adjust the path as necessary
import entertainment from "../../assets/entertainment.png"; // Adjust the path as necessary
import tech from "../../assets/tech.png"; // Adjust the path as necessary
import music from "../../assets/music.png"; // Adjust the path as necessary
import blogs from "../../assets/blogs.png"; // Adjust the path as necessary
import news from "../../assets/news.png"; // Adjust the path as necessary
import jack from "../../assets/jack.png"; // Adjust the path as necessary
import simon from "../../assets/simon.png"; // Adjust the path as necessary
import tom from "../../assets/tom.png"; // Adjust the path as necessary
import megan from "../../assets/megan.png"; // Adjust the path as necessary
import cameron from "../../assets/cameron.png"; // Adjust the path as necessary

const Sidebar = ({sidebar}) => {
  return (
   <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
     <div className="shortcut-links">
        <div className="side-link">
            <img src={home} alt="" /><p>Home</p>
        </div>
        <div className="side-link">
            <img src={game_icon} alt="" /><p>Gaming</p>
        </div>
        <div className="side-link">
            <img src={automobiles} alt="" /><p>Automobiles</p>
        </div>
        <div className="side-link">
            <img src={sports} alt="" /><p>Sports</p>
        </div>
        <div className="side-link">
            <img src={entertainment} alt="" /><p>Entertainment</p>
        </div>
        <div className="side-link">
            <img src={tech} alt="" /><p>Technology</p>
        </div>
        <div className="side-link">
            <img src={music} alt="" /><p>Music</p>
        </div>
        <div className="side-link">
            <img src={blogs} alt="" /><p>Blogs</p>
        </div>
        <div className="side-link">
            <img src={news} alt="" /><p>News</p>
        </div>
        <hr />
        <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div className="side-link">
                <img src={jack} alt="" /><p>Pewdiepie</p>
            </div>
            <div className="side-link">
                <img src={simon} alt="" /><p>Mr.Beast</p>
            </div>
            <div className="side-link">
                <img src={tom} alt="" /><p>Justin Bieber</p>
            </div>
            <div className="side-link">
                <img src={megan} alt="" /><p>5 Minutes Craft</p>
            </div>
            <div className="side-link">
                <img src={cameron} alt="" /><p>Nas Daily</p>
            </div>

        </div>
     </div>
   </div>
  );
}

export default Sidebar;