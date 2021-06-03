import axios from 'axios';
// import React because the render() method is used to convert JSX to dom elements
import React, { Component } from 'react'
import { AdminService } from '../../Services/AdminService'
import { VendorService } from '../../Services/VendorService'
import { FoodItem } from '../../Model/FoodItem'
import { Customer } from '../../Model/Customer'
import NumericInput from 'react-numeric-input'
import { Link } from 'react-router-dom'

// Extending a Component allows us to pass props to a user defined class 
// when a constructor is not present like it is in the App class.
export default class PlaceOrder extends Component {

    constructor(props) {
        super(props)
        this.venID = 0;
        this.custId = 0;
        this.foodQty = 0;

        this.state = {
            // The state object is where you store property
            // values that belongs to the component
            foodItem: new FoodItem(),
            customer: new Customer(),
            vendors: [],
            foodItems: [],
            selectedItems: [],
        }
        this.findVendorMenu = this.findVendorMenu.bind(this)
        this.findfoodItemById = this.findfoodItemById.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.placeOrder = this.placeOrder.bind(this)
    }

    vendorService = new VendorService();
    //  The componentDidMount() method is called
    //  after the component is rendered
    componentDidMount() {
        let service = new AdminService();
        service.findAllVendors()
            .then((result) => {

                this.setState({ vendors: result.data })
            })
            .catch((error) =>
                alert(error));

    }
    //Used to find particular menu from vendor id
    findVendorMenu(vendorId) {

        console.log("vendorId" + vendorId)
        this.venID = vendorId;

        axios.get(`http://localhost:9090/GharKaKhana-api/vendors/findFoodItemByVendorId/${vendorId}`)
            .then((result) => {

                this.setState({ foodItems: result.data })
            })
            .catch((error) => {
                alert(error);
            });
    }
    //Used to find food itme by foodid
    findfoodItemById(foodId) {
        console.log("foodId" + foodId)
        axios.get(`http://localhost:9090/GharKaKhana-api/vendors/findFoodId/${foodId}`)
            .then((result) => {
                this.state.selectedItems.push(result.data);
                result.data.foodQuantity = this.foodQty;

                // alert(JSON.stringify(this.state.selectedItems))
                alert("FoodItem Added Successfully");
                this.setState({ selectedItems: this.state.selectedItems })
            })
            .catch((error) => {
                alert(error);
            });
    }

    handleChange(e, foodId) {
        console.log(e)
        console.log("foodId" + foodId)
        this.foodQty = e;

    }

    placeOrder() {
        this.custId = parseInt(localStorage.getItem("custID"))
        console.log(this.custId, this.venID)
        axios.post(`http://localhost:9090/GharKaKhana-api/customers/placeOrder/${this.custId}/${this.venID}`, this.state.selectedItems)
            .then((result) => {
                console.log(result)

            }).catch((error) => {
                alert("Cannot Place a Order");
            });
        this.props.history.push("/viewcustomerorders");
    }
// the component is able to render whatever is returned from the render prop
    render() {
        return (
            <div className="container">
                <div className="d-flex justify-content-between">
                    <h2>View All vendors</h2>
                    <Link className="btn btn-danger mt-2" to="/logout"
                        onClick={() => sessionStorage.removeItem("customer")}
                    >Logout</Link>
                </div>
                <br />
                <div>
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
                                                <td className="d-flex justify-content-center">
                                                    <div>
                                                        <Link className="btn btn-primary" type="button"
                                                            onClick={() => this.findVendorMenu(v.vendorId)}>
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
                        ) : <div>No Vendors Present</div>
                    }
                </div>
                <br />
                <br />
                <div>
                    <div>
                        {
                            this.state.foodItems.length > 0 ? (
                                <table className="table  table-striped">
                                    <thead >
                                        <tr>
                                            <th>
                                                <div className="text-center">
                                                    Food Name
                                                </div>
                                            </th>
                                            <th>
                                                <div className="text-center">
                                                    Food Price
                                                </div>
                                            </th>
                                            <th>
                                                <div className="text-center">
                                                    Food Quantity
                                                </div>
                                            </th>
                                            <th>
                                                <div className="text-center">
                                                    Add Item
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.foodItems && this.state.foodItems.length > 0 &&
                                            this.state.foodItems.map((f, index) =>
                                            (

                                                <tr>
                                                    <td>
                                                        <div className="text-center">
                                                            {f.foodName}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="text-center">
                                                            {f.foodPrice}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="text-center">
                                                            <NumericInput
                                                            // This component offers more flexible options 
                                                            // and can be used for any values
                                                                mobile={true}
                                                                min={0}
                                                                size={1}
                                                                value={0}

                                                                onChange={e => {

                                                                    this.handleChange(e, f.foodId)

                                                                }}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td className="d-flex justify-content-center">
                                                        <button className="btn-primary" onClick={
                                                            () => this.findfoodItemById(f.foodId)
                                                        }
                                                        > Add Item </button>
                                                    </td>

                                                </tr>
                                            )
                                            )
                                        }
                                    </tbody>
                                </table>


                            ) : <div className="jumbotron"><h3 align="center">Select Menu</h3></div>
                        }
                    </div>
                </div>
                <div align="center">
                    <button className="btn btn-primary" onClick={this.placeOrder}>Place Order</button>
                </div>
                <br />
            </div>
        );
    }
}