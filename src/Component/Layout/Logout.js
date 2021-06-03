import React, { Component } from 'react'

export default class LogoutComponent extends Component {
    componentDidMount() {
        // sessionStorage.removeItem("customer");
        // sessionStorage.removeItem("vendor");
        // sessionStorage.removeItem("admin");
        localStorage.removeItem("custID");
        localStorage.removeItem("venId");
        this.props.history.push("/");
    }
    render() {
        return (
            <div>
                Logging Out...
            </div>
        )
    }
}