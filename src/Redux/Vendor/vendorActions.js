import { VendorService } from "../../Services/VendorService";
import {
  FETCH_VENDORS_REQUEST,
  FETCH_VENDORS_SUCCESS,
  FETCH_VENDORS_FAILURE,
} from "./vendorTypes";

export const fetchFoodItems=()=>{
  // alert("fetching data from database.");
  return (dispatch) => {
    dispatch(fetchFoodItemsRequest());
    let service = new VendorService();
    service.getAllFoodItem().then((response) => {
     // alert(JSON.stringify(response.data));
      const vendors = response.data;
      dispatch(fetchFoodItemsSuccess(vendors));
    })
      .catch((error) => {
        dispatch(fetchFoodItemsFailure(error.message));
      });
  };
};

export const fetchFoodItemsRequest = () => {
  return {
    type: FETCH_VENDORS_REQUEST,
  };
};

export const fetchFoodItemsSuccess = (vendors) => {
  return {
    type: FETCH_VENDORS_SUCCESS,
    payload: vendors,
  };
};

export const fetchFoodItemsFailure = (error) => {
  return {
    type: FETCH_VENDORS_FAILURE,
    payload: error,
  };
};
