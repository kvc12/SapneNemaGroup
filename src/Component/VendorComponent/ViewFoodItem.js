import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FoodItem } from "../../Model/FoodItem";
import { VendorService } from "../../Services/VendorService";

export default class ViewFoodItem extends Component {
    constructor(props) {
        super(props);
    this.state = {
        foodItem: new FoodItem()
    }
}
    componentDidMount() {
        let vendorservice = new VendorService();
        vendorservice.getFoodById(this.props.match.params.id) //calling getFoodById from service
            .then((result) => {
                this.setState({
                    foodItem: result.data, // settting result in state
                });
            });
    }
    homePage = (event) => {
        // event.preventDefault();
        // alert("send to home page");
        this.props.history.push("/viewallfooditems"); //pushing to viewallfooditems
    };
    render() {
        return (
            <div className="container">
                <h1>
                    <span className="badge badge-dark">View FoodItem</span>
                </h1>
                <table className="table table-bordered">
                    <tr>
                        <td>Food Id</td>
                        <th>{this.state.foodItem.foodId}</th> //getting value from state
                    </tr>
                    <tr>
                        <td>Food Name</td>
                        <th>{this.state.foodItem.foodName}</th> //getting value from state
                    </tr>
                    <tr>
                        <td>Food Price</td>
                        <th>{this.state.foodItem.foodPrice}</th> //getting value from state
                    </tr>
                    <tr>
                        <td>Food Quantity</td>
                        <th>{this.state.foodItem.foodQuantity}</th> //getting value from state
                    </tr>
                </table>
                <div className="form-group">
                    <Link className="btn btn-primary" onClick={this.homePage}>
                        Back
                    </Link>
                </div>
            </div>
        );
    }
}