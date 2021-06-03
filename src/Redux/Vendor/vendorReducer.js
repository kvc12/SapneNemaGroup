//import Request, Sucess and Failure from vendorTypes
import {
  FETCH_VENDORS_REQUEST,
  FETCH_VENDORS_SUCCESS,
  FETCH_VENDORS_FAILURE,
} from "./vendorTypes";
// Initialize the state
const initialState = {
  loading: false,
  vendors: [],
  error: "",
};
// constant reducer is crated and int this switch action.type is provide
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VENDORS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_VENDORS_SUCCESS:
      return {
        loading: false,
        vendors: action.payload,
        error: "",
      };
    case FETCH_VENDORS_FAILURE:
      return {
        loading: false,
        vendors: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
// exported this reducer 
export default reducer;