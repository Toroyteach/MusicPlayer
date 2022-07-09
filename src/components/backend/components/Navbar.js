import React from 'react'

import { Link, useMatch, useResolvedPath } from 'react-router-dom'

//sunsset image profile background
import image from "../../../assets/backend/img/logo-ct.png";

export default function Navbar() {
  return (
    <>
<aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
    <div className="sidenav-header">
      <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <Link className="navbar-brand m-0" to="/" target="_blank">
        <img src={ image } className="navbar-brand-img h-100" alt="main_logo"/>
        <span className="ms-1 font-weight-bold text-white">Toroyteach Exp</span>
      </Link>
    </div>
    <hr className="horizontal light mt-0 mb-2"/>
    <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul className="navbar-nav">
        <li className="nav-item">
            <CustomLink to="/" >
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">dashboard</i>
                </div>
              <span className="nav-link-text ms-1">Dashboard</span>
            </CustomLink>
        </li>
        <li className="nav-item">
          <CustomLink to="/music" >
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">library_music</i>
              </div>
              <span className="nav-link-text ms-1">Music</span>
            </CustomLink>
        </li>
        <li className="nav-item">
            <CustomLink to="/messages" >
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">receipt_long</i>
                </div>
              <span className="nav-link-text ms-1">Messages</span>
            </CustomLink>
        </li>
        <li className="nav-item">
            <CustomLink to="/notifications" >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">notifications</i>
                </div>
              <span className="nav-link-text ms-1">Notifications</span>
            </CustomLink>
        </li>
        {/* <li className="nav-item mt-3">
          <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Admin Pages</h6>
        </li>
        <li className="nav-item">
            <CustomLink to="/users" >
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">people</i>
                </div>
              <span className="nav-link-text ms-1">Users</span>
            </CustomLink>
        </li>
        <li className="nav-item">
            <CustomLink to="/add-quiz" >
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">add</i>
              </div>
              <span className="nav-link-text ms-1">Add Quiz</span>
            </CustomLink>
        </li>
        <li className="nav-item">
            <CustomLink to="/add-mix" >
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">add</i>
                </div>
              <span className="nav-link-text ms-1">Add Mix</span>
            </CustomLink>
        </li>
        <li className="nav-item">
          <CustomLink to="/comments" >
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">assignment</i>
            </div>
            <span className="nav-link-text ms-1">Comments</span>
          </CustomLink>
        </li>
        <li className="nav-item">
          <CustomLink to="/map" >
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">people</i>
              </div>
            <span className="nav-link-text ms-1">FanBase</span>
            </CustomLink>
        </li> */}
        <li className="nav-item mt-3">
          <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Account pages</h6>
        </li>
        <li className="nav-item">
          <CustomLink to="/profile" >
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">person</i>
              </div>
              <span className="nav-link-text ms-1">Profile</span>
            </CustomLink>
        </li>
        {/* <li className="nav-item">
            <CustomLink to="signin" >
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">login</i>
                </div>
                <span className="nav-link-text ms-1">Sign In</span>
              </CustomLink>
        </li>
        <li className="nav-item">
          <CustomLink to="/signup" >
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"/></svg></i>
              </div>
              <span className="nav-link-text ms-1">Sign Up</span>
          </CustomLink>
        </li> */}
        <li className="nav-item">
            <CustomLink to="/logout" >
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/></svg></i>
                </div>
              <span className="nav-link-text ms-1">Log Out</span>
            </CustomLink>
        </li>
      </ul>
    </div>
  </aside>
    </>
  )
}

function CustomLink({ to, children, ...props}){

  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})

   return ( 
      <Link className={isActive ? 'active bg-gradient-primary nav-link text-white' : 'nav-link text-white '} to={to} {...props}>
          { children }
      </Link>
    )

}
