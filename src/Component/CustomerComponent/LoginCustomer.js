import React, { Component } from 'react'
import { Button, Grid, Paper } from '@material-ui/core'
import { IconButton, InputAdornment, TextField } from '@material-ui/core'
import { CustomerService } from '../../Services/CustomerService'
import { Customer } from '../../Model/Customer'
import { Link } from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default class LoginCustomer extends Component {
    customerService = new CustomerService()
    state = {
        logincustomer: new Customer(),
        showPassword: false,
        error: {
            userNameError: "",
            passwordError: "",
            invalidCredentials: ""
        }
    }

    handleClickShowPassword = () => {
        this.setState({ ...this.state, showPassword: !this.state.showPassword });
    };

    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    validate = () => {
        let flag = true;
        let error = {};
        if (!this.state.logincustomer.userName) {
            flag = false;
            error.userNameError = "Username Is Required";
        }
        if (!this.state.logincustomer.password) {
            flag = false;
            error.passwordError = "Password Is Required";
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

        let service = new CustomerService();
        service.customerLogin2(this.state.logincustomer.userName, this.state.logincustomer.password)
            .then((result) => {
                if (result.data != null) {
                    sessionStorage.setItem("username", this.state.logincustomer.userName)
                    sessionStorage.setItem("password", this.state.logincustomer.password)
                    this.props.history.push("/placeorder");
                } else {
                    this.setState({ error: { invalidCredentials: "Invalid Credentials" } })
                }
            })
            .catch((error) => {
                this.setState({ error: { invalidCredentials: "Invalid Credentials" } })
            });
    };

    render() {
        // return <SecondApp testProp={this.state.todo}/>
        const paperStyle = { padding: 20, height: '70vh', width: 330, margin: "25px auto" }
        return (
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <div className="container">
                        <form className="login" onSubmit={this.handleSubmit}>
                            <h2 className="text-center">Sign In</h2>
                            <div className="mt-5">
                                <TextField id="username" label="Enter Username" variant="outlined" fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    value={this.state.logincustomer.userName}
                                    onChange={(e) =>
                                        this.setState({ logincustomer: { ...this.state.logincustomer, userName: e.target.value } })
                                    }
                                />
                                <div style={{ color: "red" }}>{this.state.error.userNameError}</div>
                            </div>

                            <div className="mt-5">
                                <TextField id="password" label="Enter Password" variant="outlined" fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockIcon />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={this.handleClickShowPassword}
                                                    onMouseDown={this.handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    type={this.state.showPassword ? "text" : "password"}
                                    value={this.state.logincustomer.password}
                                    onChange={(e) =>
                                        this.setState({ logincustomer: { ...this.state.logincustomer, password: e.target.value } })
                                    }
                                />
                                <div style={{ color: "red" }}>{this.state.error.passwordError}</div>
                            </div>
                            <div style={{ color: "red" }}>{this.state.error.invalidCredentials}</div>
                            <div className="mt-4 text-center">
                                <Button variant="contained" color="primary" type="submit">
                                    LOGIN
                                </Button>
                                <br />
                                <div className="mt-3 text-center">
                                    <Link to="/register">Not a User?</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </Paper>
            </Grid >
        )
    }
}