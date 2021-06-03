import React, { Component } from 'react'
import { Button, Grid, Paper } from '@material-ui/core'
import { Customer } from '../../Model/Customer';
import { CustomerService } from '../../Services/CustomerService'
import { TextField } from '@material-ui/core'

export default class RegisterCustomer extends Component {
    service = new CustomerService();
    state = {
        customer: new Customer(),
        error: {
            idError: "",
            firstnameError: "",
            lastnameError: "",
            contactNoError: "",
            emailidError: "",
            passwordError: "",
            userNameError: "",
            areaError: "",
            cityError: "",
            pincodeError: "",
            stateError: ""
        }
    }
    // componentDidMount() {
    //     if (sessionStorage.getItem("userName") === null) {
    //       alert('Unauthorized Access');
    //       this.props.history.push("/");
    //     }
    // }
    validate = () => {
        let flag = true;
        let error = {};
        if (!this.state.customer.firstName) {
            flag = false;
            error.firstnameError = "first Name Is Required";
        }
        if (!this.state.customer.lastName) {
            flag = false;
            error.lastnameError = "last Name Is Required";
        }

        if (!this.state.customer.contactNo) {
            flag = false;
            error.contactNoError = "Contact no Is Required";
        }

        if (!this.state.customer.userName) {
            flag = false;
            error.userNameError = "User name Is Required";
        }

        if (!this.state.customer.password) {
            flag = false;
            error.passwordError = "password Is Required";
        }
        if (!this.state.customer.emailId) {
            flag = false;
            error.emailidError = "email Is Required";
        }

        if (!this.state.customer.customerAddress.city) {
            flag = false;
            error.cityError = "City Is Required";
        }

        if (!this.state.customer.customerAddress.area) {
            flag = false;
            error.areaError = "Area Is Required";
        }

        if (!this.state.customer.customerAddress.pincode) {
            flag = false;
            error.pincodeError = "Pincode Is Required";
        }
        if (!this.state.customer.customerAddress.state) {
            flag = false;
            error.stateError = "State Is Required";
        }

        this.setState({ error: error })
        return flag;
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        let isValid = this.validate();
        if (!isValid) {
            return false;
        }
        alert(JSON.stringify(this.state.customer))

        this.service.registerCustomer(this.state.customer)
            .then((data) => {
                this.props.history.push("/login");
            })
            .catch((error) => {
                this.props.history.push("/");
            });
    };

    render() {
        const paperStyle = { padding: 20, height: 'auto', width: 400, margin: "25px auto" }
        return (
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <div className="container">

                        <form onSubmit={this.handleSubmit}>
                            <h2 className="text-center">Registeration</h2>
                            <div className="mt-5">
                                <TextField id="fname" label="Enter First Name" data-testid="firstName" variant="outlined" fullWidth
                                    value={this.state.customer.firstName}
                                    onChange={(e) =>
                                        this.setState({ customer: { ...this.state.customer, firstName: e.target.value } })
                                    } />
                                <div className="alert-danger">{this.state.error.firstnameError}</div>
                            </div>


                            <div className="mt-4">
                                <div className="alert-danger">{this.state.error.lastnameError}</div>
                                <TextField id="lname" label="Enter Last Name" data-testid="lastName" variant="outlined" fullWidth
                                    value={this.state.customer.lastName}
                                    onChange={(e) =>
                                        this.setState({ customer: { ...this.state.customer, lastName: e.target.value } })
                                    }
                                />
                            </div>


                            <div className="mt-4">
                                <div className="alert-danger">{this.state.error.contactNoError}</div>
                                <TextField id="contact" label="Enter Contact" data-testid="contact" variant="outlined" fullWidth
                                    value={this.state.customer.contactNo}
                                    onChange={(e) =>
                                        this.setState({ customer: { ...this.state.customer, contactNo: e.target.value } })
                                    }
                                />
                            </div>

                            <div className="mt-4">
                                <div className="alert-danger">{this.state.error.emailidError}</div>
                                <TextField id="email" label="Enter Email" data-testid="email" variant="outlined" fullWidth
                                    value={this.state.customer.emailId}
                                    onChange={(e) =>
                                        this.setState({ customer: { ...this.state.customer, emailId: e.target.value } })
                                    }
                                />
                            </div>

                            <div className="mt-4">
                                <div className="alert-danger">{this.state.error.passwordError}</div>
                                <TextField id="password" label="Enter Password" data-testid="password" variant="outlined" fullWidth
                                    value={this.state.customer.password}
                                    onChange={(e) =>
                                        this.setState({ customer: { ...this.state.customer, password: e.target.value } })
                                    }
                                />
                            </div>

                            <div className="mt-4">
                                <div className="alert-danger">{this.state.error.userNameError}</div>
                                <TextField id="username" label="Enter Username" data-testid="userName" variant="outlined" fullWidth
                                    value={this.state.customer.userName}
                                    onChange={(e) =>
                                        this.setState({ customer: { ...this.state.customer, userName: e.target.value } })
                                    }
                                />
                            </div>

                            <div className="mt-4">
                                <div className="alert-danger">{this.state.error.areaError}</div>
                                <TextField id="area" label="Enter Area" data-testid="area" variant="outlined" fullWidth
                                    value={this.state.customer.customerAddress.area}
                                    onChange={(e) =>
                                        this.setState({ customer: { ...this.state.customer, customerAddress: { ...this.state.customer.customerAddress, area: e.target.value } } })
                                    }
                                />
                            </div>

                            <div className="mt-4">
                                <div className="alert-danger">{this.state.error.cityError}</div>
                                <TextField id="city" label="Enter City" data-testid="city" variant="outlined" fullWidth
                                    value={this.state.customer.customerAddress.city}
                                    onChange={(e) =>
                                        this.setState({ customer: { ...this.state.customer, customerAddress: { ...this.state.customer.customerAddress, city: e.target.value } } })
                                    }
                                />
                            </div>

                            <div className="mt-4">
                                <div className="alert-danger">{this.state.error.pincodeError}</div>
                                <TextField id="pincode" label="Enter Pincode" data-testid="pincode" variant="outlined" fullWidth pattern="[0-9]{6}" type="number" maxlength="6"
                                    value={this.state.customer.customerAddress.pincode}
                                    onChange={(e) =>
                                        this.setState({ customer: { ...this.state.customer, customerAddress: { ...this.state.customer.customerAddress, pincode: e.target.value } } })
                                    }
                                />
                            </div>
                            <div className="mt-4">
                                <div className="alert-danger">{this.state.error.stateError}</div>
                                <TextField id="state" label="Enter State" data-testid="state" variant="outlined" fullWidth
                                    value={this.state.customer.customerAddress.state}
                                    onChange={(e) =>
                                        this.setState({ customer: { ...this.state.customer, customerAddress: { ...this.state.customer.customerAddress, state: e.target.value } } })
                                    }
                                />
                            </div>

                            <div className="mt-4 text-center">
                                <Button variant="contained" color="primary" type="submit">
                                    REGISTER
                                </Button>
                            </div>
                        </form>
                    </div >
                </Paper>
            </Grid>
        )
    }
}
