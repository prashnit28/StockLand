import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import image from "../Images/logo_brand.png";
import img from "../Images/avtar.png";
import { users } from "../App";
import "../Styles/Navbar.css";
function Navbar() {

  const { state, dispatch } = useContext(users)

  const RenderMenu = () => {
    if (!state) {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/" data-toggle="collapse" data-target=".navbar-collapse.show"><span className="fa fa-home fa-lg"></span> Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Aboutus" data-toggle="collapse" data-target=".navbar-collapse.show"><span className="fa fa-info fa-lg"></span> Aboutus</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Login" data-toggle="collapse" data-target=".navbar-collapse.show"><span className="fa fa-sign-in fa-lg"></span> Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Registration" data-toggle="collapse" data-target=".navbar-collapse.show"><span className="fa fa-user-plus fa-lg"></span> Register</NavLink>
          </li>
        </>
      )
    }
    else {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/" data-toggle="collapse" data-target=".navbar-collapse.show"><span className="fa fa-home fa-lg"></span> Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Aboutus" data-toggle="collapse" data-target=".navbar-collapse.show"><span className="fa fa-info fa-lg"></span> Aboutus</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Work" data-toggle="collapse" data-target=".navbar-collapse.show"><span className="fa fa-briefcase fa-lg"></span> Work</NavLink>
          </li>
          <li className="nav-item">
            <div className="dropdown  mt-2">
              <a className="" id="dropdownMenuOffse" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                <div className="">
                  <img src={img} alt="avtar" className="rounded-circle avtar " loading="lazy" />
                </div>
              </a>
              <div className="dropdown-menu text-center dropdown-menu-right" aria-labelledby="dropdownMenuOffse">
                <NavLink className="nav-link" to="/Profile"  data-toggle="collapse" data-target=".navbar-collapse.show"><span className="fa fa-user fa-lg">  </span>  Profile</NavLink>
                <NavLink className="nav-link" to="/MyStock" data-toggle="collapse" data-target=".navbar-collapse.show"> <span className="fa fa-book fa-lg"></span>  MyStocks</NavLink>
                <hr />
                <NavLink className="nav-link logout_link" to="/Logout"  data-toggle="collapse" data-target=".navbar-collapse.show" ><span className="fa fa-sign-out fa-lg"></span>  Logout</NavLink>
              </div>
            </div>
          </li>

        </>
      )
    }
  }

  return (
    <>
      <nav className="navbar  navbar-expand-lg  fixed-top">

        <NavLink className="navbar-brand" to="#"><img src={image} alt="" className="nav-logo" /></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            <i className="fa fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <RenderMenu />
          </ul>

        </div>
      </nav>

    </>
  )
}

export default Navbar
