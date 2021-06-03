import React, { Component } from 'react'
import { Vendor } from '../../Model/Vendor';
import { AdminService } from '../../Services/AdminService';
import { IconButton, InputAdornment, TextField } from '@material-ui/core'
import { Button, Grid, Paper } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock'
import PhoneIcon from '@material-ui/icons/Phone';
import FiberPinIcon from '@material-ui/icons/FiberPin';
import RoomIcon from '@material-ui/icons/Room';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import HomeIcon from '@material-ui/icons/Home';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default class UpdateVendor extends Component {
    service = new AdminService()
    // constructor(props, params) {
    //     super(props, params);
    state = {
        vendor: new Vendor(),
        error: {
            nameError: "",
            contactNoError: "",
            passwordError: "",
            userNameError: "",
            areaError: "",
            cityError: "",
            pincodeError: "",
            stateError: ""
        }
    };
    // }
    componentDidMount() {
        //      if (sessionStorage.getItem("vendorUsername") === null) {
        //        alert('Unauthorized Access');
        //        this.props.history.push("/");
        //      }
        // alert(this.props.match.params.id)
        this.service.findVendorById(this.props.match.params.id)
            .then((result) => {
                this.setState({
                    vendor: result.data,
                });
            })
            .catch((error) => {
                alert(JSON.stringify("error: " + error));
            });
    }
    validate = () => {
        let flag = true;
        let error = {};
        if (!this.state.vendor.vendorName) {
            flag = false;
            error.nameError = "Vendor Name Is Required";
        }

        if (!this.state.vendor.vendorUsername) {
            flag = false;
            error.userNameError = "User name Is Required";
        }

        if (!this.state.vendor.vendorPassword) {
            flag = false;
            error.passwordError = "password Is Required";
        }

        if (!this.state.vendor.vendorContact) {
            flag = false;
            error.contactNoError = "Contact no  Is Required";
        }

        if (!this.state.vendor.vendorAddress.area) {
            flag = false;
            error.areaError = "Area Is Required";
        }
        if (!this.state.vendor.vendorAddress.vendorCity) {
            flag = false;
            error.cityError = "City Is Required";
        }

        if (!this.state.vendor.vendorAddress.vendorPincode) {
            flag = false;
            error.pincodeError = "Pincode Is Required";
        }
        if (!this.state.vendor.vendorAddress.vendorState) {
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

        // alert(JSON.stringify(this.state.vendor));
        this.service.updateVendor(this.state.vendor)
            .then((data) => {
                alert("Vendor Information Updated Successfully");
                // redirect you to viewallvendor page after updating
                this.props.history.push("/viewallvendors");
            })
            .catch((error) => {
                alert(JSON.stringify(error))
                this.props.history.push("/viewallvendors");
                // alert(error.response.data.message);
            });
    };

    render() {
        const paperStyle = { padding: 20, height: 'auto', width: 330, margin: "25px auto" }

        return (
            <>
                <Grid>
                    <Paper elevation={10} style={paperStyle}>
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <h2 className="text-center">Vendor Register</h2>
                                <div className="mt-5">
                                    <TextField id="vendorname" data-testid="vendorName" label="Enter Vendor Name" variant="outlined" fullWidth
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PersonIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        value={this.state.vendor.vendorName}
                                        onChange={(e) =>
                                            this.setState({ vendor: { ...this.state.vendor, vendorName: e.target.value } })
                                        }
                                    />
                                    <div style={{ color: "red" }}>{this.state.error.nameError}</div>
                                </div>

                                <div className="mt-4">
                                    <TextField id="username" data-testid="userName" label="Enter User Name" variant="outlined" fullWidth
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountBoxIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        value={this.state.vendor.vendorUsername}
                                        onChange={(e) =>
                                            this.setState({ vendor: { ...this.state.vendor, vendorUsername: e.target.value } })
                                        }
                                    />
                                    <div style={{ color: "red" }}>{this.state.error.userNameError}</div>
                                </div>

                                <div className="mt-4">
                                    <TextField id="password" label="Enter Password" data-testid="password" variant="outlined" fullWidth
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
                                        value={this.state.vendor.vendorPassword}
                                        onChange={(e) =>
                                            this.setState({ vendor: { ...this.state.vendor, vendorPassword: e.target.value } })
                                        }
                                    />
                                    <div style={{ color: "red" }}>{this.state.error.passwordError}</div>
                                </div>

                                <div className="mt-4">
                                    <TextField id="contact" label="Enter Contact" data-testid="contact" variant="outlined" fullWidth
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PhoneIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        value={this.state.vendor.vendorContact}
                                        onChange={(e) =>
                                            this.setState({ vendor: { ...this.state.vendor, vendorContact: e.target.value } })
                                        }
                                    />
                                    <div style={{ color: "red" }}>{this.state.error.contactNoError}</div>

                                </div>

                                <div className="mt-4">
                                    <TextField id="area" label="Enter Area " data-testid="area" variant="outlined" fullWidth
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <HomeIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        value={this.state.vendor.vendorAddress.area}
                                        onChange={(e) =>
                                            this.setState({ vendor: { ...this.state.vendor, vendorAddress: { ...this.state.vendor.vendorAddress, area: e.target.value } } })
                                        }
                                    />
                                    <div style={{ color: "red" }} >{this.state.error.areaError}</div>

                                </div>

                                <div className="mt-4">
                                    <TextField id="city" label="Enter City" data-testid="city" variant="outlined" fullWidth
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LocationCityIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        value={this.state.vendor.vendorAddress.vendorCity}
                                        onChange={(e) =>
                                            this.setState({ vendor: { ...this.state.vendor, vendorAddress: { ...this.state.vendor.vendorAddress, vendorCity: e.target.value } } })
                                        }
                                    />
                                    <div style={{ color: "red" }}>{this.state.error.cityError}</div>

                                </div>

                                <div className="mt-4">
                                    <TextField id="pincode" label="Enter pincode" data-testid="pincode" variant="outlined" fullWidth
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <FiberPinIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        value={this.state.vendor.vendorAddress.vendorPincode}
                                        onChange={(e) =>
                                            this.setState({ vendor: { ...this.state.vendor, vendorAddress: { ...this.state.vendor.vendorAddress, vendorPincode: e.target.value } } })
                                        }
                                    />
                                    <div style={{ color: "red" }}>{this.state.error.pincodeError}</div>
                                </div>

                                <div className="mt-4">
                                    <TextField id="state" label="Enter State" data-testid="state" variant="outlined" fullWidth
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <RoomIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        value={this.state.vendor.vendorAddress.vendorState}
                                        onChange={(e) =>
                                            this.setState({ vendor: { ...this.state.vendor, vendorAddress: { ...this.state.vendor.vendorAddress, vendorState: e.target.value } } })
                                        }
                                    />
                                    <div style={{ color: "red" }}>{this.state.error.stateError}</div>
                                </div>

                                <div className="mt-4 text-center">
                                    <Button type="submit" variant="contained" color="primary">UPDATE VENDOR</Button>
                                </div>
                            </form>
                        </div>
                    </Paper>
                </Grid>
            </>
        )
    }
}