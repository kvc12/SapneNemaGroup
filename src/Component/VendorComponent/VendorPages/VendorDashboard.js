import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import DashboardIcon from '@material-ui/icons/Dashboard';
import paymentstatus from '../../../Images/paymentstatus.jpg';
import fooditem from '../../../Images/addfooditem.jpeg';
import delete1 from '../../../Images/delete.jpg';
import status from '../../../Images/status.jpg';
import update from '../../../Images/update1.jpg';
import viewall from '../../../Images/viewallfooditem.jpg';
import { Vendor } from '../../../Model/Vendor';
import { Link } from 'react-router-dom';

export default class VendorDashboard extends React.Component {
    render() {
        let vendor = sessionStorage.getItem("vendor");
        return (
            <div className="container">

                <section id="header">
                    <ReactBootStrap.Navbar bg="light" expand="lg">
                        <div className="container-fluid">
                            <ReactBootStrap.Navbar.Brand ><DashboardIcon />Vendor Dashboard</ReactBootStrap.Navbar.Brand>
                            <Link className="btn btn-danger" to="/logout"
                                onClick={() => sessionStorage.removeItem("vendor")}>
                                Logout</Link>
                        </div>
                    </ReactBootStrap.Navbar>
                </section>

                <section id="food-list">
                    <div>
                        <h1 className="text-center">Welcome to Vendor Dashboard {Vendor && vendor}</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <img src={fooditem} alt="Add Food Item" className="card-img-top" />
                                <div className="card-body text-center">
                                    <Link className="card-title btn btn-info" to="/addfooditems">
                                        Add Food Item
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <img src={viewall} alt="View All Admins" className="card-img-top" />
                                <div className="card-body text-center">
                                    <Link className="card-title btn btn-info" to="/viewallfooditems">
                                        View All Food Item
                                </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <img src={status} alt="View All Orders" className="card-img-top" />
                                <div className="card-body text-center">
                                    <Link className="card-title btn btn-info" to="/viewvendororders">
                                        View All Orders
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