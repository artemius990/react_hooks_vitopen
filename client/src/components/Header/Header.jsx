import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";


class Header extends React.Component {

	render(){
        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth();
        let year = today.getFullYear();
      
        let hours = today.getHours();
        let min = today.getMinutes();
        
  return (
    <div>
        <header>

            <span className="right">
                <span className="contact">
                    <NavLink to="/Contacts" title="Наши контакты"> Контакты</NavLink>
                </span>                

                <p className="date">&nbsp;
                    {day}-{month+1}-{year}, {hours}ч.&nbsp;{min}мин.
                </p>
            </span>
            <br />

            <br />

            <span className="left">
                <NavLink to="index.html" title="На главную" className="logo">VitOpen</NavLink>
            </span>
            
        </header>
    </div>
  );
    }
}

export default Header;


