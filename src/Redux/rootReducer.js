import { combineReducers } from "redux";
// imported admin and vendor Reducer here from respective path
import adminReducer from "./Admin/adminReducer";
import vendorReducer from "./Vendor/vendorReducer";
const rootReducer = combineReducers({
  admins: adminReducer,
  vendors:vendorReducer,
});
export default rootReducer;