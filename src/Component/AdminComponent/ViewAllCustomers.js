import React, { Component } from 'react'
import { Admin } from '../../Model/Admin'
import { AdminService } from '../../Services/AdminService';
import Table from "material-table";
import { Link } from 'react-router-dom';

export default class ViewAllCustomers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: new Admin(),
            admins: []
        }
    }
    componentDidMount() {
        let service = new AdminService();
        service.findAllCustomer()
            .then((result) => {
                this.setState({
                    admins: result.data,
                });
            });
    }
    render() {
        const tablestyle = {
            color: "#000",
            backgroundColor: "#e1e5ea",
            border: "2px"
        }
        return (
            <div className="container">
                <h2 className="text-center">Customer Details</h2>
                <Link className="btn btn-info btn-lg mb-3" to="/admindashboard">Back</Link>
                <Table
                    style={tablestyle}
                    title="View All Customers"
                    columns={[
                        { title: 'Full Name', render: (data) => data.firstName + " " + data.lastName },
                        { field: 'emailId', title: 'Email' },
                        { field: 'contactNo', title: 'Contact' },
                        { title: 'Address', render: (data) => data.customerAddress.area + ", " + data.customerAddress.city },
                    ]}
                    data={
                        this.state.admins
                    }
                    options={{
                        paging: true,
                        actionsColumnIndex: -1
                    }}

                    actions={
                        [
                            {
                                icon: 'description',
                                tooltip: 'View Customer',
                                onClick: (event, rowData) => this.props.history.push(`/customer/view/${rowData.customerId}`)
                            }
                        ]}
                ></Table>
            </div>
        )
    }
}