import React, { Component } from 'react'
import { AdminService } from '../../../Services/AdminService';
import Table from "material-table";
import Edit from '@material-ui/icons/Edit'
import { Admin } from '../../../Model/Admin';
import { Link } from 'react-router-dom';

export default class ViewAllVendors extends Component {
    constructor(props) {
        super(props);

        this.state = {
            admin: new Admin(),
            admins: []
        }
    }
    componentDidMount() {
        let service = new AdminService();
        service.findAllVendors()
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
            <div className="col-md-12 mt-4">
                <div className="mb-3">
                    <Link className="btn btn-info btn-lg" to="/admindashboard2">Back</Link>
                </div>
                <Table style={tablestyle} title="View All Vendors"
                    columns={[
                        { field: 'vendorName', title: 'Vendor Name' },
                        { field: 'vendorContact', title: 'Contact Number' },
                        { title: 'ADDRESS', render: (data) => data.vendorAddress.area + ", " + data.vendorAddress.vendorCity },
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
                                tooltip: 'View User',
                                onClick : (event , rowData)=>this.props.history.push(`/vendor/view/${rowData.vendorId}`)

                            },
                            
                            {
                                icon: Edit,
                                tooltip: 'Update Vendor',
                                onClick : (event , rowData)=>this.props.history.push(`/vendor/update/${rowData.vendorId}`)

                            },

                            {
                                icon: 'delete',
                                tooltip: 'Delete Vendor',
                                onClick : (event , rowData)=>this.props.history.push(`/vendor/delete/${rowData.vendorId}`)

                            }
                        ]}
                ></Table>
            </div>
        )
    }
}