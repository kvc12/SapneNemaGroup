import React, { Component } from "react"
import { AdminService } from '../../Services/AdminService'
import { Vendor } from '../../Model/Vendor'
import { VendorAddress } from "../../Model/VendorAddress"
import { Link } from "react-router-dom"

export default class ViewVendor extends Component {
    service = new AdminService();
    state = {
        vendor: new Vendor(),
        vendorAddress: new VendorAddress()
    };
    componentDidMount() {
        this.service.findVendorById(this.props.match.params.id)
            .then((result) => {
                this.setState({
                    vendor: result.data,
                });
            });
    }

    homePage = () => {
        this.props.history.push("/viewallvendors");
    };
    render() {
        return (
            <div className = "container">
                <h1>
                    <span className="badge badge-dark">View Vendor</span>
                </h1>
                <table className="table table-bordered">
                    <tr>
                        <td>Vendor Id</td>
                        <th>{this.state.vendor.vendorId}</th>
                    </tr>
                    <tr>
                        <td>Vendor Name</td>
                        <th>{this.state.vendor.vendorName}</th>
                    </tr>
                    <tr>
                        <td>Vendor Contact</td>
                        <th>{this.state.vendor.vendorContact}</th>
                    </tr>
                    <tr>
                        <td>Vendor Username</td>
                        <th>{this.state.vendor.vendorUsername}</th>
                    </tr>
                    <tr>
                        <td>Vendor Address</td>
                        <th>{this.state.vendor.vendorAddress.vendorAddressId}</th>
                    </tr>
                    <tr>
                        <td>Vendor City</td>
                        <th>{this.state.vendor.vendorAddress.vendorCity}</th>
                    </tr>
                    <tr>
                        <td>Vendor Area</td>
                        <th>{this.state.vendor.vendorAddress.area}</th>
                    </tr>
                    <tr>
                        <td>Vendor State</td>
                        <th>{this.state.vendor.vendorAddress.vendorState}</th>
                    </tr>
                    <tr>
                        <td>Vendor Pincode</td>
                        <th>{this.state.vendor.vendorAddress.vendorPincode}</th>
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