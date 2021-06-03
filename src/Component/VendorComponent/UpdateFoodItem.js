import React, { Component } from 'react'
import { VendorService } from '../../Services/VendorService'
import { FoodItem } from '../../Model/FoodItem'
import { TextField } from '@material-ui/core'
import { Button, Grid, Paper } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default class UpdateFoodItem extends Component {
    service = new VendorService();
    state = {
        foodItem: new FoodItem(),
        error: {
            foodNameError: "",
            foodPriceError: ""
        }
    };
    componentDidMount() {
        this.service.getFoodById(this.props.match.params.id) //calling getFoodById from service
            .then((result) => {
                this.setState({
                    foodItem: result.data, //storing in foodItem state
                });
            })
            .catch((error) => {
                alert(JSON.stringify("error: " + error));
            });
    }
    validate = () => { //Checking for validations
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

    handleSubmit = async (event) => { //creating method for submit event
        event.preventDefault();

        let isValid = this.validate();
        if (!isValid) {
            return false;
        }

        let venId = parseInt(localStorage.getItem('venId'));
        this.service.modifyFood(this.state.foodItem, venId) //calling modifyFood from service 
            .then((data) => {
                alert("Food Modified Successful");
                this.props.history.push("/viewallfooditems"); //pushing to viewallFooditems
            })
            .catch((error) => {
                alert(JSON.stringify(error))
                // alert(error.response.data.message);
                // redirect you to Home component after adding user
                this.props.history.push("/viewallfooditems"); //pushing to viewallFooditems
            });
    };

    render() {
        const bgStyle = { zIndex: -1, position: "absolute", height: "90vh", width: "98.5vw", backgroundImage: "linear-gradient(65deg, #fea82f, #fcecdd)" }
        const paperStyle = { padding: 20, height: 'auto', width: 330, margin: "25px auto" }
        return (
            <>
                <div style={bgStyle} className="style">
                </div>
                <Grid>
                    <Paper elevation={10} style={paperStyle}>
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <h2 className="text-center">Update Food Item</h2>

                                <div className="mt-4">
                                    <TextField id="foodName" label="Enter Food Name" variant="outlined" fullWidth
                                        value={this.state.foodItem.foodName} //getting value from state
                                        onChange={(e) =>
                                            //setting state
                                            this.setState({ foodItem: { ...this.state.foodItem, foodName: e.target.value } })
                                        }
                                    />
                                    <div style={{ color: "red" }} >{this.state.error.foodNameError}</div>
                                </div>

                                <div className="mt-4">
                                    <TextField id="foodPrice" label="Enter Food Price" variant="outlined" fullWidth
                                        value={this.state.foodItem.foodPrice} //getting value from state
                                        onChange={(e) =>
                                            //setting state
                                            this.setState({ foodItem: { ...this.state.foodItem, foodPrice: e.target.value } })
                                        }
                                    />
                                    <div style={{ color: "red" }}>{this.state.error.foodPriceError}</div>
                                </div>

                                <div className="mt-4 text-center">
                                    <Button type="submit" variant="contained" color="primary">UPDATE FOODITEM</Button>
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