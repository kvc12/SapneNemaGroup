// imported AdminService from Service Component
import { AdminService } from "../../Services/AdminService";
// import Request, Sucess and Failure from adminTypes
import {
  FETCH_ADMINS_REQUEST,
  FETCH_ADMINS_SUCCESS,
  FETCH_ADMINS_FAILURE,
} from "./adminTypes";

export const fetchAdmins= () => {
 // Fetching Admin Data
  return (dispatch) => {
    dispatch(fetchAdminsRequest());
    // Creating object of AdminService
    let service = new AdminService();
    // By using object called AdminService findAllAdmins()
    service.findAllAdmins().then((response) => {
      const admins = response.data;
      dispatch(fetchAdminsSuccess(admins));
    })
    // If any errro then catch block executed 
      .catch((error) => {
        dispatch(fetchAdminsFailure(error.message));
      });
  };
};
  // fetchAdminRequest created
export const fetchAdminsRequest = () => {
  return {
    type: FETCH_ADMINS_REQUEST,
  };
};
 // fetchAdminsSuccess created
export const fetchAdminsSuccess = (admins) => {
  return {
    type: FETCH_ADMINS_SUCCESS,
    payload: admins,
  };
};
 // fetchAdminsFailure created
export const fetchAdminsFailure = (error) => {
  return {
    type: FETCH_ADMINS_FAILURE,
    payload: error,
  };
};