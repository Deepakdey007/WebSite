import React from "react";
// import './Sidebar.css';
import image from './user.png';

export default function Sidebar() {
  return (
  <>
  {/* <link href="sidebars.css" rel="stylesheet"></link> */}
  <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: '180px',height:'100%'}}>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="/" className="nav-link active" aria-current="page">
          {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="/home"></use></svg> */}
          Home
        </a>
      </li>
      <li>
        <a href="/" className="nav-link text-white">
          {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="/speedometer2"></use></svg> */}
          Dashboard
        </a>
      </li>
      <li>
        <a href="/" className="nav-link text-white">
          {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="/table"></use></svg> */}
          Orders
        </a>
      </li>
      <li>
      <div className="dropend">
        <a href="/" className="nav-link d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="/grid"></use></svg> */}
          Products
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a className="dropdown-item" href="/">Shirts</a></li>
        <li><a className="dropdown-item" href="/">T-shirts</a></li>
        <li><a className="dropdown-item" href="/">Jeans</a></li>
        <li><a className="dropdown-item" href="/">Formal Clothes</a></li>
      </ul>
      </div>
      </li>
      <li>
        <a href="/Contact" className="nav-link text-white">
          {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="/people-circle"></use></svg> */}
          Contact
        </a>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
         <img src={image} alt="img" width="32" height="32" className="rounded-circle me-2"/>
        <strong>User</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a className="dropdown-item" href="/">Settings</a></li>
        <li><a className="dropdown-item" href="/">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="/">Sign out</a></li>
      </ul>
    </div>
    </div>
  </>
  );
}
