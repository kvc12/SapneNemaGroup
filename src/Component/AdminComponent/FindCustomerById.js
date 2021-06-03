import React from 'react'
import { CustomerAddress } from '../../Model/CustomerAddress';
import { Customer } from '../../Model/Customer';
import { AdminService } from '../../Services/AdminService';

// render prop is used by a component to know what to render

import { Link } from 'react-router-dom';

export class FindCustomerById extends React.Component {
    service = new AdminService();
    state = {
        customer: new Customer(),
        customerAddress: new CustomerAddress(),
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
                    <span className="badge badge-dark">View Customer</span>
                </h1>
                <table className="table table-bordered">
                    <tr>
                        <th>
                            Customer Id
                        </th>
                        <td>{this.state.customer.customerId}</td>
                    </tr>
                    <tr>
                        <th>First Name</th>
                        <td>{this.state.customer.firstName}</td>
                    </tr>
                    <tr>
                        <th>Last Name</th>
                        <td>{this.state.customer.lastName}</td>
                    </tr>
                    <tr>
                        <th> Username</th>
                        <td>{this.state.customer.userName}</td>
                    </tr>
                    <tr>
                        <th> City</th>
                        <td>{this.state.customer.customerAddress !== null ? this.state.customer.customerAddress.city : null}</td>
                    </tr>
                    <tr>
                        <th>Area</th>
                        <td>{this.state.customer.customerAddress !== null ? this.state.customer.customerAddress.area : null}</td>
                    </tr>
                    <tr>
                        <th> State</th>
                        <td>{this.state.customer.customerAddress !== null ? this.state.customer.customerAddress.state : null}</td>
                    </tr>
                    <tr>
                        <th>Pincode</th>
                        <td>{this.state.customer.customerAddress !== null ? this.state.customer.customerAddress.pincode : null}</td>
                    </tr>
                </table>
                <div className="form-group">
                    <Link className="btn btn-info btn-lg" onClick={this.homePage}>
                        Back
                    </Link>
                </div>
            </div>
        )
    }
}