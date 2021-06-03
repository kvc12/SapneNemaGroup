import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Component/Layout/Navbar";
import Home from "./Component/Pages/Home";
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";
import Login from "./Component/CustomerComponent/LoginCustomer";
import Register from "./Component/CustomerComponent/RegisterCustomer";
import LoginAdmin from './Component/AdminComponent/LoginAdmin';
import LoginVendor from './Component/VendorComponent/LoginVendor';
import Footer from "./Component/Pages/Footer";
import ViewAllCustomers from "./Component/AdminComponent/ViewAllCustomers";
import AddFoodItems from "./Component/VendorComponent/AddFoodItems";
import VendorRegister from "./Component/AdminComponent/VendorRegister";
import ViewAllAdmin from "./Component/AdminComponent/ViewAllAdmins";
import AdminDashboard from "./Component/AdminComponent/AdminPages/AdminDashboard";
import VendorDashboard from "./Component/VendorComponent/VendorPages/VendorDashboard";
import DeleteVendor from "./Component/AdminComponent/DeleteVendor";
import UpdateVendor from "./Component/AdminComponent/UpdateVendor";
import ViewVendor from "./Component/AdminComponent/Vendordetails";
import ViewAllFoodItems from "./Component/VendorComponent/ViewAllFoodItems";
import { FindCustomerById } from "./Component/AdminComponent/FindCustomerById";
import UpdateFoodItem from "./Component/VendorComponent/UpdateFoodItem";
import ViewFoodItem from "./Component/VendorComponent/ViewFoodItem";
import DeleteFoodItem from "./Component/VendorComponent/DeleteFoodItem";
import ViewCustomerOrders from "./Component/CustomerComponent/ViewCustomerOrders";
import ViewAllOrders from "./Component/AdminComponent/ViewAllOrders";
import PlaceOrder from "./Component/CustomerComponent/PlaceOrder";
import ViewVendorOrders from "./Component/VendorComponent/ViewVendorOrders";
import DeleteOrderById from "./Component/AdminComponent/DeleteOrderById";
import ViewOrder from "./Component/AdminComponent/ViewOrder";
import ViewAllVendors from "./Component/AdminComponent/ViewAllVendors";
import ViewCustomer from "./Component/AdminComponent/ViewCustomer";
import Invoice from "./Component/CustomerComponent/Invoice";
import LogoutComponent from "./Component/Layout/Logout";
import AdminRedux from "./Component/AdminComponent/AdminRedux";
import SetOrderStatus from "./Component/VendorComponent/SetOrderStatus";
import FoodItemRedux from "./Component/VendorComponent/FoodItemRedux";

function App() {
  return (
    <>
      <Router>
        <Route component={Navbar} />
        <Switch>
          {/* Home Page Routes*/}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />

          {/* Customer Component Routes */}
          <Route exact path="/customerlogin" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/placeorder" component={PlaceOrder} />
          <Route exact path="/viewcustomerorders" component={ViewCustomerOrders} />
          <Route exact path="/customerorder/invoice/:id" component={Invoice} />

          {/* Vendor Component Routes */}
          
          <Route exact path="/vendorlogin" component={LoginVendor} />

          <Route exact path="/vendordashboard" component={VendorDashboard} />
          <Route exact path="/addfooditems" component={AddFoodItems} />
          <Route exact path="/viewvendororders" component={ViewVendorOrders} />
          <Route exact path="/viewallfooditems" component={ViewAllFoodItems} />
          <Route exact path="/setorderstatus" component={SetOrderStatus} />
          <Route exact path="/fooditem/view/:id" component={ViewFoodItem} />
          <Route exact path="/fooditem/update/:id" component={UpdateFoodItem} />
          <Route exact path="/fooditem/delete/:id" component={DeleteFoodItem} />

          {/* Admin Component Routes */}
          <Route exact path="/adminlogin" component={LoginAdmin} />
          <Route exact path="/admindashboard" component={AdminDashboard} />
          <Route exact path="/registervendor" component={VendorRegister} />
          <Route exact path="/viewallcustomers" component={ViewAllCustomers} />
          <Route exact path="/customer/view/:id" component={ViewCustomer} />
          <Route exact path="/viewalladmins" component={ViewAllAdmin} />
          <Route exact path="/viewallorders" component={ViewAllOrders} />
          <Route exact path="/order/view/:id" component={ViewOrder} />
          <Route exact path="/order/delete/:id" component={DeleteOrderById} />
          <Route exact path="/customer/find/:id" component={FindCustomerById} />

          {/* View/Update/Delete Vendor */}
          <Route exact path="/viewallvendors" component={ViewAllVendors} />
          <Route exact path="/vendor/view/:id" component={ViewVendor} />
          <Route exact path="/vendor/update/:id" component={UpdateVendor} />
          <Route exact path="/vendor/delete/:id" component={DeleteVendor} />

          {/* Admin, Vendor Redux */}
          <Route exact path="/reduxadmin" component={AdminRedux} />
          <Route exact path="/reduxvendor" component={FoodItemRedux} />

          {/* Logout Component */}
          <Route exact path="/logout" component={LogoutComponent} />
          
        </Switch>

          {/* Footer Component */}
          <Route component={Footer} />
      </Router>
    </>
  );
}

export default App;