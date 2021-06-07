import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import { NavLink } from "react-router-dom";
import logo from "../images/StocklandLogo.png";
import '../App.css'
const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} alt="logo" className="nav-logo" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto link-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/"><span className="fa fa-home fa-lg" style={{ color: 'black' }}></span>  <span className="LinkColor">Home</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link e" to="/work"><span className="fa fa-user-plus" style={{ color: 'black' }}></span><span className="LinkColor"> Work</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/mystocks"><span className="fa fa-sign-in" style={{ color: 'black' }}></span><span className="LinkColor">MyStocks</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/aboutus"><span className="fa fa-info fa-lg" style={{ color: 'black' }}></span><span className="LinkColor">AboutUs</span></NavLink>
                        </li>

                    </ul>

                </div>
            </nav>
            <hr />
        </>
    );
}
export default NavBar;