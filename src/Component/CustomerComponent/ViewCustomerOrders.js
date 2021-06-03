import React, { Component } from 'react'
// import React because the render() method is used to convert JSX to dom elements
import { Order } from '../../Model/Order'
import Table from "material-table"
import { Link } from 'react-router-dom'
import Receipt from '@material-ui/icons/Receipt'
import axios from 'axios'
import CancelIcon from '@material-ui/icons/Cancel';

// Extending a Component allows us to pass props to a user defined class 
// when a constructor is not present like it is in the App class.
export default class ViewCustomersOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // The state object is where you store property
            // values that belongs to the component
            order: new Order(),
            orders: [],
            final: []
        }
        this.sorted = [];
    }
    //  The componentDidMount() method is called
    //  after the component is rendered
    componentDidMount() {
        let custId = parseInt(localStorage.getItem('custID'))
        axios.get(`http://localhost:9090/GharKaKhana-api/customers/viewAllOrders/${custId}`)
            .then((result) => {
                console.log("actual", result.data)
                this.sorted = result.data
                this.setState({
                    orders: result.data

                });
            });

        console.log('orders', this.sorted)
    }
    cancel(id) {

        console.log("order ID ", id)
        let status = 'cancelled'
        axios.put(`http://localhost:9090/GharKaKhana-api/vendors/setOrderStatus/${id}/${status}`)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                alert(error);
            });

    }
// the component is able to render whatever is returned from the render prop
    render() {
        return (
            <div className="container">
                <Link className="btn btn-info btn-lg mb-3" to="/placeorder">Back</Link>
                <Table title="Your Order"
                    columns={[
                        { field: 'orderDate', title: 'ORDER DATE' },
                        { field: 'orderTime', title: 'ORDER TIME' },
                        { field: 'orderStatus', title: 'ORDER STATUS' },
                        { field: 'orderPrice', title: 'ORDER PRICE', render: (data) => data.orderPrice + "₹" },
                        { field: 'vendor.vendorName', title: 'VENDOR NAME' },
                        { field: 'vendor.vendorContact', title: 'VENDOR CONTACT' }
                    ]}
                    data={
                        this.state.orders
                    }
                    options={{
                        paging: true,
                        sorting: true,
                        actionsColumnIndex: -1
                    }}
                    actions={
                        [
                            {
                                icon: Receipt,
                                tooltip: 'View Invoice',
                                onClick: (event, rowData) => this.props.history.push(`/customerorder/invoice/${rowData.orderId}`)
                            },
                            {
                                icon: CancelIcon,
                                tooltip: 'Cancel order',
                                onClick: (event, rowData) => this.cancel(rowData.orderId)
                            }
                        ]}

                ></Table>
            </div>
        )
    }
}