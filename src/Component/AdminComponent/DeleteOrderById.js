import React, { Component } from 'react'
import { AdminService } from '../../Services/AdminService';

// Extending a Component allows us to pass props to a user defined class
export default class DeleteOrderById extends Component {

  state = {};

  // componentDidMount() runs after the initial render only once
  componentDidMount() {

    let service = new AdminService();
    service.deleteOrderById(this.props.match.params.id)
      .then(
        (result) => {
          alert("Order is deleted.");
          this.props.history.push("/viewallorders");
        },
        (error) => {
          alert("Order Failed to deleted.");
          this.props.history.push("/viewallorders");
        }
      );
  }
  render() {
    return <p>Processing...</p>;
  }
}