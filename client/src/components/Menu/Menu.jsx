import React, { useState, useEffect } from 'react'
import './Menu.css'
import {NavLink} from "react-router-dom";

const Menu =()=> {	
	const [menu, setMenu] = useState([])
 
useEffect(() => {    
     fetch('/menu')
      .then(res => res.json())
      .then((menu) => setMenu(menu))      
  }, [])   
 
  return (
    <div>
      <div className="clear"></div>
      <center>
        <div className="menu">Откроем миру Витебск!!!
          <hr />
        </div>
        <menu className="menuHrefs">
          {menu.map(a =>
          <NavLink to={a.link}>{a.name}</NavLink>
          )}
        </menu>
      </center>
    </div>
  );  
}

export default Menu;


		  
