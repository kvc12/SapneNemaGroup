import React, { Component } from 'react'
import { AdminService } from '../../Services/AdminService';

export default class DeleteVendor extends Component {

  state = {};

  // componentDidMount() runs after the initial render only once
  componentDidMount() {

    let service = new AdminService();
    service.removeVendor(this.props.match.params.id)
      .then(
        (result) => {
          alert("Vendor is deleted.");
          this.props.history.push("/viewallvendors");
        },
        (error) => {
          alert("Vendor Failed to deleted.");
          this.props.history.push("/viewallvendors");
        }
      );
  }
  // render prop is used by a component to know what to render
  render() {
    return <p>Processing...</p>;
  }
}