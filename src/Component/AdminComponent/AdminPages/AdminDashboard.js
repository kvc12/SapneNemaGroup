import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import DashboardIcon from '@material-ui/icons/Dashboard'
import { Admin } from '../../../Model/Admin'
import Adminimage from '../../../Images/Admin.jpeg'
import Customerimage from '../../../Images/Customer.jpeg'
import Vendorimage from '../../../Images/Vendor.jpeg'
import Orderimage from '../../../Images/Order.jpeg'
import { Link } from 'react-router-dom'

export default class AdminDashboard extends React.Component {
    admin = new Admin();
    render() {
        let admin = sessionStorage.getItem("admin")
        return (
            <div className="container">
                <section id="header">
                    <ReactBootStrap.Navbar bg="light" expand="lg">
                        <div className="container-fluid mt-3">
                            <ReactBootStrap.Navbar.Brand ><DashboardIcon />Admin Dashboard</ReactBootStrap.Navbar.Brand>
                            <Link className="btn btn-danger" to="/logout"
                                onClick={sessionStorage.removeItem("admin")}
                            >Logout</Link>
                        </div>
                    </ReactBootStrap.Navbar>
                </section>

                <section id="food-list">
                    <div>
                        <h1 className="text-center">Welcome to Admin Dashboard {Admin && admin}</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <img src={Adminimage} alt="View All Admins" className="card-img-top" />
                                <div className="card-body text-center">
                                    <Link className="card-title btn btn-info" to="/viewalladmins">
                                        View All Admins
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <img src={Customerimage} alt="View All Customers" className="card-img-top" />
                                <div className="card-body text-center">
                                    <Link className="card-title btn btn-info" to="/viewallcustomers">
                                        View All Customers
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <img src={Vendorimage} alt="View All Vendors" className="card-img-top" />
                                <div className="card-body text-center">
                                    <Link className="card-title btn btn-info" to="/viewallvendors">
                                        View All Vendors
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <img src={Vendorimage} alt="Register Vendor" className="card-img-top" />
                                <div className="card-body text-center">
                                    <Link className="card-title btn btn-info" to="registervendor">
                                        Register Vendor
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <img src={Orderimage} alt="View All Orders" className="card-img-top" />
                                <div className="card-body text-center">
                                    <Link className="card-title btn btn-info" to="/viewallorders">
                                        View All Orders
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <img src={Adminimage} alt="Admin Redux" className="card-img-top" />
                                <div className="card-body text-center">
                                    <Link className="card-title btn btn-info" to="/reduxadmin">
                                        Admin Redux
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}