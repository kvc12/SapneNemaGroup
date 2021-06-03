import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
import { VendorService } from '../../Services/VendorService'
import { FoodItem } from '../../Model/FoodItem'
import { Button, Grid, Paper } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default class AddFoodItems extends Component {
    vendorService = new VendorService()
    state = {               //defining state
        foodItem: new FoodItem(),
        error: {
            foodNameError: "",
            foodPriceError: "",
        }
    }

    validate = () => { //checking validation for every input field
        let flag = true;
        let error = {};
        if (!this.state.foodItem.foodName) {
            flag = false;
            error.foodNameError = "Food Name Is Required";
        }

        if (!this.state.foodItem.foodPrice) {
            flag = false;
            error.foodPriceError = "Food Price Is Required";
        }


        this.setState({ error: error })
        return flag;
    };

    handleSubmit = async (event) => {  //creating method for onsubmit event
        event.preventDefault();

        let isValid = this.validate(); 
        if (!isValid) { //checking for the validations
            return false;
        }

        // alert(JSON.stringify(this.state.foodItem))
        let venId = parseInt(localStorage.getItem('venId'));
        this.vendorService.addFoodItem(this.state.foodItem, venId) //calling addFoodItem method from service 
            .then((data) => {
                this.props.history.push("/viewallfooditems"); //pushing page to viewallFoodItems
            })
            .catch((error) => { //catching error if found any
                alert(error);
            });
    };
    render() {
        const bgStyle = { zIndex: -1, position: "absolute", height: "90vh", width: "98.5vw", backgroundImage: "linear-gradient(65deg, #fea82f, #fcecdd)" }
        const paperStyle = { padding: 20, height: 'auto', width: 300, margin: "25px auto" }
        return (
            <>
                <div style={bgStyle} className="style">
                </div>
                <Grid>
                    <Paper elevation={10} style={paperStyle}>
                        <div className="container">
                            <form onSubmit={this.handleSubmit}>
                                <h2 className="mb-3 text-center">Add FoodItem</h2>
                                <div className="mt-4">
                                    <TextField id="foodName" label="Enter Food Name" variant="outlined" fullWidth
                                        value={this.state.foodItem.foodName} //getting value from state
                                        onChange={(e) =>
                                            this.setState({ foodItem: { ...this.state.foodItem, foodName: e.target.value } }) //setting states
                                        }
                                    />
                                    <div style={{ color: "red" }} >{this.state.error.foodNameError}</div>
                                </div>

                                <div className="mt-4">
                                    <TextField id="foodPrice" label="Enter Food Price" variant="outlined" fullWidth
                                        value={this.state.foodItem.foodPrice} //getting value from state
                                        onChange={(e) =>
                                            this.setState({ foodItem: { ...this.state.foodItem, foodPrice: e.target.value } }) //setting states
                                        }
                                    />
                                    <div style={{ color: "red" }}>{this.state.error.foodPriceError}</div>
                                </div>
                                <div className="text-center">
                                    <Button className="mt-4" type="submit" variant="contained" color="primary">ADD FOODITEM</Button>
                                </div>
                                <div className="text-center">
                                    <Link className="mt-4 btn btn-primary" to="/vendordashboard">Back</Link>
                                </div>
                            </form>
                        </div>
                    </Paper>
                </Grid>
            </>
        )
    }
}