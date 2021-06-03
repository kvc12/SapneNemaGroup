import React, { Component } from 'react'
// import React because the render() method is used to convert JSX to dom elements
import { Link } from 'react-router-dom'
import { Order } from '../../Model/Order'
import { Vendor } from '../../Model/Vendor'
import { CustomerService } from '../../Services/CustomerService'

// Extending a Component allows us to pass props to a user defined class 
// when a constructor is not present like it is in the App class.
export default class Invoice extends Component {
    service = new CustomerService();
    state = {
        order: new Order(),
        vendor: new Vendor()
    };

//  The componentDidMount() method is called
//  after the component is rendered
    componentDidMount() {
        this.service.findOrderById(this.props.match.params.id)
            .then((result) => {
                this.setState({
                    order: result.data,
                });
            });
    }
    homePage = () => {
        this.props.history.push("/viewcustomerorders");
    };
// the component is able to render whatever is returned from the render prop
    render() {
        return (
            <div className="container">
                <h1 className="text-center">
                    <span className="badge badge-dark">INVOICE</span>
                </h1>
                <hr />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>
                                <div className="text-center">
                                    ORDER ID
                                        </div>
                            </th>
                            <th>
                                <div className="text-center">
                                    ORDER DATE
                                    </div>
                            </th>

                            <th>
                                <div className="text-center">
                                    ORDER TIME
                                    </div>
                            </th>
                            <th>
                                <div className="text-center">
                                    VENDOR NAME
                                    </div>
                            </th>
                            <th>
                                <div className="text-center">
                                    VENDOR CONTACT
                                    </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="text-center">
                                    {this.state.order.orderId}
                                </div>
                            </td>
                            <td>
                                <div className="text-center">
                                    {this.state.order.orderDate}
                                </div>
                            </td>
                            <td>
                                <div className="text-center">
                                    {this.state.order.orderTime}
                                </div>
                            </td>
                            <td>
                                <div className="text-center">
                                    {this.state.order.vendor.vendorName}
                                </div>
                            </td>
                            <td>
                                <div className="text-center">
                                    {this.state.order.vendor.vendorContact}
                                </div>
                            </td>
                        </tr>
                        <br />
                        <tr>
                            <td>
                                <b>Total Price:</b>
                            </td>
                            <td>
                                <b>{this.state.order.orderPrice}₹</b>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <div className="form-group">
                    {/* Link tag will render a fully accessible anchor tag with the proper href */}
                    <Link className="btn btn-primary btn-lg" onClick={this.homePage}>
                        Back
                    </Link>
                </div>
            </div>
        )
    }
}