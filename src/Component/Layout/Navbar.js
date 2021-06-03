import React from 'react';
import '../Pages/Home.css';
import logo from '../../Images/logo.png';
import * as ReactBootStrap from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

export default class Navbar extends React.Component {
    state = {
        hideMenu: false
    }
    handleClick = () => {
        this.setState({ hideMenu: true })
    }
    componentDidUpdate() {
        if (window.location.pathname === '/logout') {
            this.setState({ hideMenu: false });
        }
    }
    render() {
        let customer = sessionStorage.getItem("customer");
        let admin = sessionStorage.getItem("admin");
        let vendor = sessionStorage.getItem("vendor");
        return (
            <>
                <ReactBootStrap.Navbar bg="light" expand="lg" sticky="top" >
                    <div className="container-fluid">
                        <ReactBootStrap.Navbar.Brand href="/"><img className="logo" src={logo} alt="Gharkakhana" /> Ghar Ka Khana</ReactBootStrap.Navbar.Brand>
                        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                            <ul className="navbar-nav ml-auto">
                                <ReactBootStrap.Nav className="nav-item">
                                    <NavLink className="nav-link" exact to="/">
                                        Home
                                    </NavLink>
                                </ReactBootStrap.Nav>
                                <ReactBootStrap.Nav className="nav-item">
                                    <NavLink className="nav-link" exact to="/about">
                                        About
                                </NavLink>
                                </ReactBootStrap.Nav>
                                <ReactBootStrap.Nav className="nav-item dropdown">
                                    {
                                        this.state.hideMenu ?
                                            null :
                                            <ReactBootStrap.NavDropdown title="Login As" id="basic-nav-dropdown">
                                                <NavLink onClick={this.handleClick} className="dropdown-item" exact to="/customerlogin">Customer</NavLink>
                                                <NavLink onClick={this.handleClick} className="dropdown-item" exact to="/vendorlogin">Vendor</NavLink>
                                                <NavLink onClick={this.handleClick} className="dropdown-item" exact to="/adminlogin">Admin</NavLink>
                                            </ReactBootStrap.NavDropdown>
                                    }
                                </ReactBootStrap.Nav>
                                <ReactBootStrap.Nav className="nav-item">
                                    <NavLink className="nav-link" exact to="/contact">
                                        Contact
                                    </NavLink>
                                </ReactBootStrap.Nav>

                                <ReactBootStrap.Nav className="nav-item">
                                    <Link className="nav-link">
                                        <PersonOutlineIcon /> <b>{customer || admin || vendor}</b>
                                    </Link>
                                </ReactBootStrap.Nav>
                            </ul>
                        </ReactBootStrap.Navbar.Collapse>
                    </div>
                </ReactBootStrap.Navbar>
            </>
        )
    }
}