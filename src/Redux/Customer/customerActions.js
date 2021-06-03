import { CustomerService } from "../../Services/CustomerService"
import {
  FETCH_CUSTOMERS_REQUEST,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE,
} from "./customerTypes";

export const fetchCustomers = () => {
  // alert("fetching data from database.");
  return (dispatch) => {
    dispatch(fetchCustomersRequest());
    let service = new CustomerService();
    service.viewMenu().then((response) => {
      const customers = response.data;
      dispatch(fetchCustomersSuccess(customers));
    })
      .catch((error) => {
        dispatch(fetchCustomersFailure(error.message));
      });
  };
};

export const fetchCustomersRequest = () => {
  return {
    type: FETCH_CUSTOMERS_REQUEST,
  };
};

export const fetchCustomersSuccess = (customers) => {
  return {
    type: FETCH_CUSTOMERS_SUCCESS,
    payload: customers,
  };
};

export const fetchCustomersFailure = (error) => {
  return {
    type: FETCH_CUSTOMERS_FAILURE,
    payload: error,
  };
};
