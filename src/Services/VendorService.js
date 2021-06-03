// Import axios link from axios
import axios from "axios";

    // Creating Service of Vendor Component
export class VendorService {
    //loginVendor component is used this axios link
    loginVendor(userName, password) {
        return axios.post(`http://localhost:9090/GharKaKhana-api/vendors/loginVendor/${userName}/${password}`);
    }
    //Check login
    checkLogin(login) {
        return axios.post(`http://localhost:9090/GharKaKhana-api/vendors/login`, login)
    }
    // FindFoodById component is used this axios link
    getFoodById(foodId) {
        return axios.get(`http://localhost:9090/GharKaKhana-api/vendors/findFoodId/${foodId}`);
    }
    // AddFoodItems component is used this axios link
    addFoodItem(foodItem, vendorId) {
        return axios.post(`http://localhost:9090/GharKaKhana-api/vendors/addFoodItem/${vendorId}`, foodItem);
    }
     // UpdateFoodItem component is used this axios link
    modifyFood(foodItem, vendorId) {
        return axios.put(`http://localhost:9090/GharKaKhana-api/vendors/updateFood/${vendorId}`, foodItem);
    }
     // DeleteFoodItems component is used this axios link
    deleteFoodItem(foodId) {
        return axios.delete(`http://localhost:9090/GharKaKhana-api/vendors/deleteFoodItem/${foodId}`);
    }
     // SetPaymentStatus component is used this axios link
    setOrderPaymentStatus(orderId, status) {
        return axios.get(`http://localhost:9090/GharKaKhana-api/vendors/${orderId}/${status}`);
    }
     // SetOrderStatus component is used this axios link
    setOrderStatus(orderId, status) {
        return axios.get(`http://localhost:9090/GharKaKhana-api/vendors/setOrderStatus/${orderId}/${status}`);
    }
     // ViewAllFoodItems component is used this axios link
    getAllFoodItem() {
        return axios.get(`http://localhost:9090/GharKaKhana-api/vendors/viewAllFoodItems`);
    }
     // ViewVendorOrders component is used this axios link
    viewAllOrder(vendorId) {
        return axios.get(`http://localhost:9090/GharKaKhana-api/vendors/${vendorId}`);
    }
    // FindFoodItemByVendorId component is used this link
    findFoodItemByVendorId(vendorId) {
        return axios.get(`http://localhost:9090/GharKaKhana-api/vendors/findFoodItemByVendorId/${vendorId}`);
    }
}