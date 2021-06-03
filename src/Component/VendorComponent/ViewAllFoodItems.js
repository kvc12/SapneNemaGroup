import React, { Component } from 'react'
import Table from "material-table";
import { Vendor } from '../../Model/Vendor';
import { VendorService } from '../../Services/VendorService';
import { Link } from 'react-router-dom';

export default class ViewAllFoodItems extends Component {
    constructor(props) {
        super(props);
        this.venID = 0;
        this.state = { //defining state
            vendor: new Vendor(),
            vendors: []
        }
    }
    componentDidMount() {
        let service = new VendorService();
        let venId = parseInt(localStorage.getItem('venId'));
        service.findFoodItemByVendorId(venId) //calling findFoodItemByVendorId from service 
            .then((result) => {
                this.setState({
                    vendors: result.data, //setting the value of result in state
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
                <h2 className="text-center">View All Food Items</h2>
                <Link className="btn btn-info btn-lg mb-3" to="/vendordashboard">Back</Link>
                <Table
                    style={tablestyle}
                    title="View All Food Items"
                    columns={[
                        { field: 'foodName', title: 'Food Name' },
                        { field: 'foodPrice', title: 'Food Price' },
                    ]}
                    data={
                        this.state.vendors
                    }
                    options={{
                        paging: true,
                        actionsColumnIndex: -1
                    }}

                    actions={
                        [
                            {
                                icon: 'description',
                                tooltip: 'View FoodItem',
                                onClick: (event, rowData) => this.props.history.push(`/fooditem/view/${rowData.foodId}`) //View fooditem

                            },
                            {
                                icon: 'edit',
                                tooltip: 'Edit FoodItem',
                                onClick: (event, rowData) => this.props.history.push(`/fooditem/update/${rowData.foodId}`) //modifying food item

                            },
                            {
                                icon: 'delete',
                                tooltip: 'Delete FoodItem',
                                onClick: (event, rowData) => this.props.history.push(`/fooditem/delete/${rowData.foodId}`) //deleting food item

                            }

                        ]}
                ></Table>
            </div>
        )
    }
}