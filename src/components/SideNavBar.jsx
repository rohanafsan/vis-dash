import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaHome
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

// Side Navigation Bar that can be updated to contain links to different pages
const SideNavBar = ({children}) =>  {

    var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

  const menuItem=[
      {
          path:"/",
          name:"Dashboard",
          icon:<FaTh/>
      }
  ]
  return (
      <div className="container">
         <div style={{width: "3em", position: "relative", height: height}} className="sidebar">
             <div className="top_section">
                 <h1 style={{display: "none"}} className="logo">Data Dashboard</h1>
                 <div data-testid = "home-icon" style={{marginLeft: "0px"}} className="bars">
                     <FaHome/>
                 </div>
             </div>
             {
                 menuItem.map((item, index)=>(
                     <NavLink to={item.path} key={index} className="link" activeclassname="active">
                         <div data-testid = "dashboard-icon" className="icon">{item.icon}</div>
                         <div style={{display: "none"}} className="link_text">{item.name}</div>
                     </NavLink>
                 ))
             }
         </div>
         <main>{children}</main>
      </div>
  );
};

export default SideNavBar;