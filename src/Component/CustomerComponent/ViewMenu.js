import React, { Component } from 'react'
// import React because the render() method is used to convert JSX to dom elements
import { Link } from 'react-router-dom';
import Chef from "../../Images/chef.png"
import { Customer } from '../../Model/Customer';
import { FoodItem } from '../../Model/FoodItem';
import { AdminService } from '../../Services/AdminService';

// Extending a Component allows us to pass props to a user defined class 
// when a constructor is not present like it is in the App class.
export default class ViewMenu extends Component {
    state = {
        foodItem: new FoodItem(),
        customer: new Customer(),
        vendors: []
    }
    componentDidMount() {
        //  The componentDidMount() method is called
        //  after the component is rendered
        let service = new AdminService();
        service.findAllVendors()
            .then((result) => {
                // alert(JSON.stringify(result));
                this.setState({ vendors: result.data })
            })
            .catch((error) =>
                alert(error));
    }
    // the component is able to render whatever is returned from the render prop
    render() {
        const imgstyle = { width: 100, height: 100 }
        return (
            <div className="container-fluid">
                {
                    this.state.vendors.length > 0 ? (
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        <div className="text-center">
                                            Vendor Name
                                        </div>
                                    </th>
                                    <th>
                                        <div className="text-center">
                                            Vendor Profile
                                        </div>
                                    </th>
                                    <th>
                                        <div className="text-center">
                                            Vendor's Menu
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.vendors && this.state.vendors.length > 0 &&
                                    this.state.vendors.map((v, index) =>
                                    (
                                        <tr>
                                            <td>
                                                <div className="text-center">
                                                    <b>{v.vendorName}</b>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="text-center">
                                                    <img src={Chef} alt="Chef" style={imgstyle} />
                                                </div>
                                            </td>
                                            <td className="d-flex justify-content-center">
                                                <div>
                                                    <Link className="btn btn-primary" type="button">
                                                        View Menu
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                    )
                                }
                            </tbody>
                        </table>
                    ) : <div>No Vendor Present</div>
                }
            </div>
        )
    }
}