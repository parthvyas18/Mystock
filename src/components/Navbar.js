import React from 'react';
import { NavLink } from "react-router-dom";
import image from "../images/logo_brand.png";
function Navbar() {
    return (
        <>
            <nav className="navbar  navbar-expand-lg  fixed-top">

                <NavLink className="navbar-brand" to="#"><img src={image} alt="" className="nav-logo" /></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <i className="fa fa-bars "></i>
                    </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" style={{ color: 'black' }} to="/Home"><span className="fa fa-home fa-lg" ></span> Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link e" to="/Work"><span className="fa fa-user-plus" style={{ color: 'black' }}></span><span className="LinkColor"> Work</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/MyStocks"><span className="fa fa-sign-in" style={{ color: 'black' }}></span><span className="LinkColor">MyStocks</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" style={{ color: 'black' }} to="/AboutUs"><span className="fa fa-info fa-lg"></span> Aboutus</NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink className="nav-link " style={{ color: 'black' }} data-toggle="modal" data-target="#Register" to="/Register"><span className="fa fa-user-plus"></span>  Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" style={{ color: 'black' }} data-toggle="modal" data-target="#Login" to="/Login"><span className="fa fa-sign-in"></span>Login</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" style={{ color: 'black' }} to="/Login"><span className="fa fa-sign-in fa-lg"></span> Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" style={{ color: 'black' }} to="/Register"><span className="fa fa-user-plus fa-lg"></span> Register</NavLink>
                        </li> */}

                    </ul>

                </div>
            </nav>

        </>
    )
}

export default Navbar
