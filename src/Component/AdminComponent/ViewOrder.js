import React, { Component } from "react"
import { AdminService } from '../../Services/AdminService'
import { Order } from '../../Model/Order'
import { Customer } from '../../Model/Customer'
import { Vendor } from '../../Model/Vendor'
import { Link } from "react-router-dom"

export default class ViewOrder extends Component {
    service = new AdminService();
    state = {
        order: new Order(),
        customer: new Customer(),
        vendor: new Vendor()
    };
    componentDidMount() {
        this.service.findOrderById(this.props.match.params.id)
            .then((result) => {
                this.setState({
                    order: result.data,
                });
            });
    }

    homePage = () => {
        this.props.history.push("/viewallorders");
    };
    render() {
        return (
            <div className="container">
                <h1>
                    <span className="badge badge-dark">View Order Details</span>
                </h1>
                <table className="table table-bordered">
                    <tr>
                        <td>Order Id</td>
                        <th>{this.state.order.orderId}</th>
                    </tr>
                    <tr>
                        <td>Order Date</td>
                        <th>{this.state.order.orderDate}</th>
                    </tr>
                    <tr>
                        <td>Order Time</td>
                        <th>{this.state.order.orderTime}</th>
                    </tr>
                    <tr>
                        <td>Order Status</td>
                        <th>{this.state.order.orderStatus}</th>
                    </tr>
                    <tr>
                        <td>Order Price</td>
                        <th>{this.state.order.orderPrice}</th>
                    </tr>
                    <tr>
                        <td>Customer First Name</td>
                        <th>{this.state.order.customer.firstName}</th>
                    </tr>
                    <tr>
                        <td>Customer Last Name</td>
                        <th>{this.state.order.customer.lastName}</th>
                    </tr>
                    <tr>
                        <td>Vendor Name</td>
                        <th>{this.state.order.vendor.vendorName}</th>
                    </tr>
                    <tr>
                        <td>Vendor Contact No</td>
                        <th>{this.state.order.vendor.vendorContact}</th>
                    </tr>
                </table>

                <div className="form-group">
                    <Link className="btn btn-info btn-lg" onClick={this.homePage}>
                        Back
                    </Link>
                </div>
            </div>
        );
    }
}