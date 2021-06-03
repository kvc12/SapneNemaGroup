import React, { history,useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchFoodItems } from "../../Redux/Vendor/vendorActions";

export function FoodItemRedux({vendorsData,fetchFoodItems}) {
  // vendor:new Vendor();
  useEffect(() => {
     if (sessionStorage.getItem("vendorUsername")!= null) {
       history.push("/reduxvendor"); 
     }
    fetchFoodItems();
    
  }, []);
    return vendorsData.loading?(
      <h2>Loading</h2>
    ): vendorsData.error?(
      <h2>abdc{vendorsData.error}</h2>
    ) :(

      <div className="py-4">
        <Link to="/logout" className="btn btn-outline-light">
                 <button style={{float:'right'}} className="btn btn-outline-secondary">Logout</button> 
        </Link>

        <table class="table border shadow">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Food Name</th>
            <th scope="col">Food Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          
          {vendorsData.vendors.map((vendor, index) => (
            <tr>
              <td>{vendor.foodName}</td>
              <td>{vendor.foodPrice}</td>
              <td>
                <Link
                  className="btn btn-primary mr-2"
                  to={`/fooditem/view/${vendor.foodId}`}
                >
                  View
                </Link>
                <Link
                  className="btn btn-outline-primary mr-2"
                  to={`/fooditem/update/${vendor.foodId}`}
                >
                  Update
                </Link>
              </td> 
            </tr>
          ))}
        </tbody>
      </table> 
      </div>
    );
}
const mapStateToProps = (state) => {
  //  alert("map state: " + JSON.stringify(state.admins));
  return {
    vendorsData: state.vendors,
  };
};

  
const mapDispatchToProps = (dispatch) => {
  return {
    fetchFoodItems: () => dispatch(fetchFoodItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodItemRedux);