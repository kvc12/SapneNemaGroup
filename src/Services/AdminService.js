import axios from "axios";


export class AdminService {



    registerAdmin(admin) {

        return axios.post(`http://localhost:9090/GharKaKhana-api/admins/addAdmin/`, admin);

    }

    adminLogin(userName, password) {
        return axios.post(`http://localhost:9090/GharKaKhana-api/admins/loginAdmin/${userName}/${password}`);

    }

    addVendor(vendor) {

        return axios.post(`http://localhost:9090/GharKaKhana-api/admins/addVendor/`, vendor);

    }

    findAllAdmins() {

        return axios.get(`http://localhost:9090/GharKaKhana-api/admins/viewAllAdmin/`);

    }

    findAllCustomer() {

        return axios.get(`http://localhost:9090/GharKaKhana-api/admins/viewAllCustomer/`);

    }

    findAllVendors() {

        return axios.get(`http://localhost:9090/GharKaKhana-api/admins/viewAllVendor/`);

    }

    removeVendor(vendorId) {

        return axios.delete(`http://localhost:9090/GharKaKhana-api/admins/deleteVendor/${vendorId}`);

    }

    updateVendor(vendor) {

        return axios.put(`http://localhost:9090/GharKaKhana-api/admins/updateVendor/`, vendor);

    }

    findAllOrder() {

        return axios.get(`http://localhost:9090/GharKaKhana-api/admins/viewAllOrder/`);

    }

    findVendorById(vendorId) {

        return axios.get(`http://localhost:9090/GharKaKhana-api/admins/findVendorById/${vendorId}`);

    }

    findOrderById(orderId) {

        return axios.get(`http://localhost:9090/GharKaKhana-api/admins/findOrderById/${orderId}`);

    }

    findCustomerById(customerId) {

        return axios.get(`http://localhost:9090/GharKaKhana-api/admins/findCustomerId/${customerId}`);

    }

    findSortedOrderByDate() {

        return axios.get(`http://localhost:9090/GharKaKhana-api/admins/findOrderByDate/`);

    }

    findSortedOrderByAmount() {

        return axios.get(`http://localhost:9090/GharKaKhana-api/admins/findOrderByAmount/`)

    }

    deleteOrderById(orderId) {

        return axios.delete(`http://localhost:9090/GharKaKhana-api/admins/deleteOrderById/${orderId}`);

    }

}