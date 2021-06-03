import axios from "axios";

export class CustomerService {
    baseUrl = `http://localhost:9090/GharKaKhana-api/customers`;

    registerCustomer(customer) {
        return axios.post(`http://localhost:9090/GharKaKhana-api/customers/addCustomer`, customer);
    }
    customerLogin(userName, password) {
        return axios.post(`http://localhost:9090/GharKaKhana-api/customers/loginCustomer/${userName}/${password}`)
    }
    placeOrder(customerId, vendorId) {
        return axios.post(`${this.baseUrl}/placeOrder/${customerId}/${vendorId}`);
    }
    cancelOrder(orderId, status) {
        return axios.put(`${this.baseUrl}/cancel/${orderId}/${status}`);
    }
    viewDishesSortByPrice() {
        return axios.get(`${this.baseUrl}/sortDishByPrice`);
    }
    searchDishes(foodName) {
        return axios.get(`${this.baseUrl}/searchDish/${foodName}`);
    }
    viewOrderStatusById(orderId) {
        return axios.get(`${this.baseUrl}/status/${orderId}`);
    }
    viewMenu() {
        return axios.get(`http://localhost:9090/GharKaKhana-api/customers/viewAllFoodItem`);
    }
    findOrderById(orderId) {
        console.log(orderId)
        return axios.get(`http://localhost:9090/GharKaKhana-api/customers/findOrderById/${orderId}`);
    }
    modifyOrder(orderId, customerId, vendorId) {
        return axios.put(`http://localhost:9090/GharKaKhana-api/customers/modifyOrder/orderId/${orderId}/${customerId}/${vendorId}`);
    }
    findAllOrder(customerId) {
        return axios.get(`http://localhost:9090/GharKaKhana-api/customers/viewAllOrders/customerId/${customerId}`);
    }
}