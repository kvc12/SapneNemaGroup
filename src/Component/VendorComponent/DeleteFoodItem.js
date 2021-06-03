import React, { Component } from 'react'
import { VendorService } from '../../Services/VendorService';

export default class DeleteFoodItem extends Component {

  state = {};
  componentDidMount() {
    let service = new VendorService();
    service.deleteFoodItem(this.props.match.params.id) // calling deletefooditem from service method
      .then(
        (result) => {
          alert("Food Item is deleted.");
          this.props.history.push("/viewallfooditems"); //pushing page to viewallfooditems
        },
        (error) => {
          alert("Food Item is not deleted.");
          this.props.history.push("/viewallfooditems"); //pushing page to viewallfooditems
        }
      );
  }
  render() {
    return <p>Processing...</p>;
  }
}