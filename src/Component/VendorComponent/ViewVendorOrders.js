import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import UpdateIcon from '@material-ui/icons/Update';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export default function ViewVendorOrders() {
    const history = useHistory()
    const [data, setData] = useState([])
    //Table columns
    const columns = [
        { field: 'orderId', title: 'ORDER ID' },
        { field: 'orderDate', title: 'ORDER DATE' },
        { field: 'orderTime', title: 'ORDER TIME' },
        { field: 'orderStatus', title: 'ORDER STATUS' },
        { field: 'orderPrice', title: 'ORDER PRICE' },
        { field: 'customer.customerId', title: 'CUSTOMER ID' },
        { field: 'customer.firstName', title: 'CUSTOMER FIRST NAME' },
        { field: 'customer.lastName', title: 'CUSTOMER LAST NAME' },
        { field: 'vendor.vendorName', title: 'VENDOR NAME' },
        { field: 'vendor.vendorContact', title: 'VENDOR CONTACT' },
    ]
    useEffect(() => {
        let venId = parseInt(localStorage.getItem('venId'));
        fetch(`http://localhost:9090/GharKaKhana-api/vendors/viewAllOrder/${venId}`) //getting oredr using respectie URL
            .then(resp => resp.json())
            .then(resp => {
                setData(resp)
                console.log(resp)
            })

    }, [])

    const tablestyle = {
        color: "#000",
        backgroundColor: "#e1e5ea",
        border: "2px"
    }
    return (
        <div className="container">
            <h4> VENDOR ORDERS</h4>
            <Link className="btn btn-info btn-lg mb-3" to="/vendordashboard">Back</Link>
            <MaterialTable
                title="Vendor Orders"
                data={data}
                columns={columns}
                options={{
                    search: false,
                    paging: true,
                    filtering: false,
                    sorting: true,
                    actionsColumnIndex: -1
                }}
                actions={
                    [
                        {
                            icon: UpdateIcon,
                            tooltip: 'Set Order Status',
                            onClick: (event, rowData) => history.push({pathname: '/setorderstatus',
                            state: rowData.orderId})
                        }
                    ]}
            />
        </div>
    );
}