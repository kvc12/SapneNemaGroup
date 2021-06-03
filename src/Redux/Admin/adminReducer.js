//import Request, Sucess and Failure from adminTypes
import {
  FETCH_ADMINS_REQUEST,
  FETCH_ADMINS_SUCCESS,
  FETCH_ADMINS_FAILURE,
} from "./adminTypes";
// Initialize the state
const initialState = {
  loading: false,
  admins: [],
  error: "",
};
// constant reducer is crated and int this switch action.type is provide
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADMINS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ADMINS_SUCCESS:
      return {
        loading: false,
        admins: action.payload,
        error: "",
      };
    case FETCH_ADMINS_FAILURE:
      return {
        loading: false,
        admins: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
// exported this reducer 
export default reducer;