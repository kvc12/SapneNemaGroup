import React, { Component } from 'react'
import { AdminService } from '../../Services/AdminService';
import Table from "material-table";
import { Link } from 'react-router-dom';
import { Admin } from '../../Model/Admin';

export default class ViewAllOrders extends Component {
    constructor(props) {
        super(props);

        this.state = {
            admin: new Admin(),
            admins: []
        }
    }
    componentDidMount() {
        let service = new AdminService();
        service.findAllOrder()
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
        };
        return (
            <div className="container">
                <h2 className="text-center">All Order Details</h2>
                <Link className="btn btn-info btn-lg mb-3" to="/admindashboard">Back</Link>
                <Table style={tablestyle} title="View All Orders"
                    columns={[
                        { field: 'orderId', title: 'ORDER ID' },
                        { title: 'ORDER DATE & TIME', render: (data) => data.orderDate + ", " + data.orderTime },
                        { field: 'orderStatus', title: 'ORDER STATUS' },
                        { title: 'ORDER PRICE', render: (data) => data.orderPrice + "₹" },
                        { title: 'CUSTOMER FULL NAME', render: (data) => data.customer.firstName + ", " + data.customer.lastName },
                        { field: 'vendor.vendorName', title: 'VENDOR NAME' },
                        { field: 'vendor.vendorContact', title: 'VENDOR CONTACT' }
                    ]}
                    data={
                        this.state.admins
                    }
                    options={{
                        paging: true,
                        actionsColumnIndex: -1,
                        sorting: true
                    }}

                    actions={
                        [
                            {
                                icon: 'description',
                                tooltip: 'View User',
                                onClick: (event, rowData) => this.props.history.push(`/order/view/${rowData.orderId}`)

                            },
                            {
                                icon: 'delete',
                                tooltip: 'Delete Vendor',
                                onClick: (event, rowData) => this.props.history.push(`/order/delete/${rowData.orderId}`)
                            }
                        ]}
                ></Table>
            </div>
        )
    }
}