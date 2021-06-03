import React from 'react';
import { Grid, InputAdornment, Paper } from '@material-ui/core'
import { TextField, Button } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import MessageIcon from '@material-ui/icons/Message';

export default class Contact extends React.Component {
    state = {
        name: "",
        email: "",
        phone: "",
        message: "",
        error: {
            nameError: "",
            emailError: "",
            phoneError: "",
            messageError: ""
        }
    }
    validate = () => {
        let flag = true;
        let error = {};
        if (!this.state.name) {
            flag = false;
            error.nameError = "FullName Is Required";
        }
        if (!this.state.email) {
            flag = false;
            error.emailError = "EmailId Is Required";
        }
        if (!this.state.phone) {
            flag = false;
            error.phoneError = "Contact Number Is Required";
        }
        if (!this.state.message) {
            flag = false;
            error.messageError = "Message Is Required";
        }
        this.setState({ error: error })
        return flag;
    }
    render() {
        const bgStyle = { zIndex: -1, position: "absolute", height: "115vh", width: "98.5vw", backgroundImage: "linear-gradient(65deg, #fea82f, #fcecdd)" }
        const paperStyle = { padding: 20, height: 'auto', width: 330, margin: "25px auto" }
        return (
            <>
                <div style={bgStyle} className="style">
                </div>
                <Grid>
                    <Paper elevation={10} style={paperStyle}>
                        <h3 className="text-center">Contact</h3>
                        <form>
                            <p className="text-center">For all enquiries, please email us.</p>
                            <div className="mt-5">
                                <TextField required id="Name" label="Full Name" variant="outlined" fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    value={this.state.name}
                                    onChange={(e) => {
                                        this.setState({ name: e.target.value })
                                    }}
                                />
                                <div style={{ color: "red" }}>{this.state.error.nameError}</div>
                            </div>

                            <div className="mt-3">
                                <TextField required id="Email" label="Email Id" variant="outlined" fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    value={this.state.email}
                                    onChange={(e) => {
                                        this.setState({ email: e.target.value })
                                    }}
                                />
                                <div style={{ color: "red" }}>{this.state.error.emailError}</div>
                            </div>

                            <div className="mt-3">
                                <TextField required id="PhoneNo" label="Phone Number" variant="outlined" fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PhoneIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    value={this.state.phone}
                                    onChange={(e) => {
                                        this.setState({ phone: e.target.value })
                                    }}
                                />
                                <div style={{ color: "red" }}>{this.state.error.phoneError}</div>
                            </div>

                            <div className="mt-3">
                                <TextField id="Message" label="Message" multiline rows={4}
                                    helperText="Write a Message" variant="outlined" fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <MessageIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    value={this.state.message}
                                    onChange={(e) => {
                                        this.setState({ message: e.target.value })
                                    }}
                                />
                                <div style={{ color: "red" }}>{this.state.error.messageError}</div>
                            </div>

                            <div className="mt-3 text-center">
                                <Button variant="contained" color="primary" onClick={this.validate}> SEND </Button>
                            </div>
                        </form>
                    </Paper>
                </Grid>
            </>
        )
    }
}