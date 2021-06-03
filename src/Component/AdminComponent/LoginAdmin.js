import React, { Component } from 'react'
import '../../Component/Login.css'
import { Button, Grid, Paper } from '@material-ui/core'
import { TextField, IconButton, InputAdornment } from '@material-ui/core'
import { AdminService } from '../../Services/AdminService'
import { Admin } from '../../Model/Admin'
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default class LoginAdmin extends Component {
    state = {
        loginadmin: new Admin(),
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
        if (!this.state.loginadmin.adminUsername) {
            flag = false;
            error.userNameError = "User Name Is Required";
        }
        if (!this.state.loginadmin.adminPassword) {
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

        let service = new AdminService();
        service.adminLogin2(this.state.loginadmin.adminUsername, this.state.loginadmin.adminPassword)
            .then((result) => {
                if (result.data != null) {
                    sessionStorage.setItem("username", this.state.loginadmin.adminUsername)
                    sessionStorage.setItem("password", this.state.loginadmin.adminPassword)
                    this.props.history.push("/admindashboard");
                } else {
                    this.setState({ error: { invalidCredentials: "Invalid Credentials" } })
                }
            })
            .catch((error) => {
                this.setState({ error: { invalidCredentials: "Invalid Credentials" } })
            });
    };

    render() {
        const paperStyle = { padding: 20, height: '70vh', width: 330, margin: "25px auto" }
        return (
            <>
                <div className="svg">
                    <svg width="100%" height="100%" viewBox="0 0 1440 700" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#fcb90044"></stop><stop offset="95%" stop-color="#f78da744"></stop></linearGradient></defs><path d="M 0,700 C 0,700 0,140 0,140 C 128.64285714285714,123.5 257.2857142857143,107 384,109 C 510.7142857142857,111 635.5,131.5 761,129 C 886.5,126.5 1012.7142857142858,101.00000000000001 1126,99 C 1239.2857142857142,96.99999999999999 1339.642857142857,118.5 1440,140 C 1440,140 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 350)"></path><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#fcb90066"></stop><stop offset="95%" stop-color="#f78da766"></stop></linearGradient></defs><path d="M 0,700 C 0,700 0,280 0,280 C 141.35714285714283,309.3928571428571 282.71428571428567,338.7857142857143 402,328 C 521.2857142857143,317.2142857142857 618.5,266.25 735,267 C 851.5,267.75 987.2857142857142,320.2142857142857 1108,331 C 1228.7142857142858,341.7857142857143 1334.357142857143,310.8928571428571 1440,280 C 1440,280 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 350)"></path><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#fcb90088"></stop><stop offset="95%" stop-color="#f78da788"></stop></linearGradient></defs><path d="M 0,700 C 0,700 0,420 0,420 C 102.64285714285714,392.3571428571429 205.28571428571428,364.7142857142857 333,377 C 460.7142857142857,389.2857142857143 613.4999999999999,441.5 725,458 C 836.5000000000001,474.5 906.7142857142858,455.28571428571433 1019,443 C 1131.2857142857142,430.71428571428567 1285.642857142857,425.35714285714283 1440,420 C 1440,420 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 350)"></path><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#fcb900ff"></stop><stop offset="95%" stop-color="#f78da7ff"></stop></linearGradient></defs><path d="M 0,700 C 0,700 0,560 0,560 C 143.82142857142858,581.9642857142858 287.64285714285717,603.9285714285714 391,612 C 494.35714285714283,620.0714285714286 557.25,614.25 682,601 C 806.75,587.75 993.3571428571429,567.0714285714286 1130,559 C 1266.642857142857,550.9285714285714 1353.3214285714284,555.4642857142858 1440,560 C 1440,560 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 350)"></path></svg>
                </div>
                <Grid>
                    <Paper elevation={10} style={paperStyle}>
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <h2 className="text-center">Sign In</h2>
                                <div className="mt-5">
                                    <TextField id="username" label="Enter Username" data-testid="userName" variant="outlined" fullWidth
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PersonIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        value={this.state.loginadmin.adminUsername}
                                        onChange={(e) =>
                                            this.setState({ loginadmin: { ...this.state.loginadmin, adminUsername: e.target.value } })
                                        }
                                    />
                                    <div style={{ color: "red" }}>{this.state.error.userNameError}</div>
                                </div>

                                <div className="mt-5">
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
                                        value={this.state.loginadmin.adminPassword}
                                        onChange={(e) =>
                                            this.setState({ loginadmin: { ...this.state.loginadmin, adminPassword: e.target.value } })
                                        }
                                    />
                                    <div style={{ color: "red" }}>{this.state.error.passwordError}</div>
                                </div>
                                <div style={{ color: "red" }}>{this.state.error.invalidCredentials}</div>
                                <div className="mt-5 text-center">
                                    <Button variant="contained" color="primary" type="submit">
                                        LOGIN
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </Paper>
                </Grid>
            </>
        )
    }
}
