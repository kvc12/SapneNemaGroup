import React, { Component } from "react";
import { AdminService } from '../../Services/AdminService';
import { Customer } from '../../Model/Customer'
import { CustomerAddress } from "../../Model/CustomerAddress";
import { Link } from "react-router-dom";

export default class ViewCustomer extends Component {
    service = new AdminService();
    state = {
        customer: new Customer(),
        customerAddress: new CustomerAddress()
    };
    componentDidMount() {
        this.service.findCustomerById(this.props.match.params.id)
            .then((result) => {
                this.setState({
                    customer: result.data,
                });
            });
    }

    homePage = () => {
        this.props.history.push("/viewallcustomers");
    };
    render() {
        return (
            <div className="container">
                <h1>
                    <span className="badge badge-dark">View Customer Details</span>
                </h1>
                <table className="table table-bordered">
                    <tr>
                        <td>Customer Id</td>
                        <th>{this.state.customer.customerId}</th>
                    </tr>
                    <tr>
                        <td>Customer Name</td>
                        <th>{this.state.customer.firstName}</th>
                    </tr>
                    <tr>
                        <td>Customer Contact</td>
                        <th>{this.state.customer.contactNo}</th>
                    </tr>
                    <tr>
                        <td>Customer Username</td>
                        <th>{this.state.customer.userName}</th>
                    </tr>
                    <tr>
                        <td>Customer Email</td>
                        <th>{this.state.customer.emailId}</th>
                    </tr>
                    <tr>
                        <td>Customer City</td>
                        <th>{this.state.customer.customerAddress.city}</th>
                    </tr>
                    <tr>
                        <td>Customer Area</td>
                        <th>{this.state.customer.customerAddress.area}</th>
                    </tr>
                    <tr>
                        <td>Customer State</td>
                        <th>{this.state.customer.customerAddress.state}</th>
                    </tr>
                    <tr>
                        <td>Customer Pincode</td>
                        <th>{this.state.customer.customerAddress.pincode}</th>
                    </tr>
                </table>

                <div className="form-group">
                    <Link className="btn btn-primary btn-lg" onClick={this.homePage}>
                        Back
                    </Link>
                </div>
            </div>
        );
    }
}