import React from 'react'

import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
      <div className="nav-header">
        <div className="brand-logo">
          <Link to="/">
            <b className="logo-abbr">
              <img src="images/logo.png" alt="" />
            </b>
            <span className="logo-compact">
              <img src="./images/logo-compact.png" alt="" />
            </span>
            <span className="brand-title">
              <img src="images/logo-text.png" alt="" />
            </span>
          </Link>
        </div>
      </div>

      {/* Header Start */}
      <div className="header">
        <div className="header-content clearfix">
          <div className="nav-control">
            <div className="hamburger">
              <span className="toggle-icon">
                <i className="icon-menu" />
              </span>
            </div>
          </div>

          <div className="header-left">
            <div className="input-group icons">
              <div className="input-group-prepend">
                <span className="input-group-text bg-transparent border-0 pr-2 pr-sm-3">
                  <i className="mdi mdi-magnify" />
                </span>
              </div>
              <input
                type="search"
                className="form-control"
                placeholder="Search Dashboard"
              />
            </div>
          </div>

          <div className="header-right">
            <ul className="clearfix">
              <li className="icons dropdown">
                <Link to="#">
                  <i className="mdi mdi-email-outline" />
                  <span className="badge badge-pill gradient-1">3</span>
                </Link>
              </li>
              <li className="icons dropdown">
                <Link to="#">
                  <i className="mdi mdi-bell-outline" />
                  <span className="badge badge-pill gradient-2">3</span>
                </Link>
              </li>


              <li className="icons dropdown d-none d-md-flex"> <a href="javascript:void(0)" className="log-user" data-toggle="dropdown" > <span>English</span>{" "} <i className="fa fa-angle-down f-s-14" aria-hidden="true" /> </a> <div className="drop-down dropdown-language animated fadeIn  dropdown-menu"> <div className="dropdown-content-body"> <ul> <li> <a href="javascript:void()">English</a> </li> <li> <a href="javascript:void()">Dutch</a> </li> </ul> </div> </div> </li> <li className="icons dropdown"> <div className="user-img c-pointer position-relative" data-toggle="dropdown" > <span className="activity active" /> <img src="images/user/1.png" height={40} width={40} alt="" /> </div> <div className="drop-down dropdown-profile animated fadeIn dropdown-menu"> <div className="dropdown-content-body"> <ul> <li> <a href="app-profile.html"> <i className="icon-user" /> <span>Profile</span> </a> </li> <li> <a href="javascript:void()"> <i className="icon-envelope-open" /> <span>Inbox</span>{" "} <div className="badge gradient-3 badge-pill gradient-1"> 3 </div> </a> </li> <hr className="my-2" /> <li> <a href="page-lock.html"> <i className="icon-lock" /> <span>Lock Screen</span> </a> </li> <li> <a href="page-login.html"> <i className="icon-key" /> <span>Logout</span> </a> </li> </ul> </div> </div> </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sidebar Start */}
      <div className="nk-sidebar">
        <div className="nk-nav-scroll">
          <ul className="metismenu" id="menu">
            <li className="nav-label">Dashboard</li>
            <li>
              <Link to="/">
                <i className="icon-speedometer menu-icon" />
                <span className="nav-text">Dashboard</span>
              </Link>
            </li>

            <li className="nav-label">Apps</li>
            <li>
              <Link to="/adduser">
                <i className="icon-user menu-icon" />
                <span className="nav-text">Adduser</span>
              </Link>
            </li>
            <li>
              <Link to="/userlist">
                <i className="icon-envelope menu-icon" />
                <span className="nav-text">User List</span>
              </Link>
            </li> <li>
             
            </li> <li>
              <Link to="/email">
                <i className="icon-envelope menu-icon" />
                <span className="nav-text">Add hotel</span>
              </Link>
            </li> <li>
              <Link to="/email">
                <i className="icon-envelope menu-icon" />
                <span className="nav-text">Add Staff</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      
    </>
  );
};

export default Navbar;