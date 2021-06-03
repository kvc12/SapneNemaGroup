import { Customer } from "./Customer";
import { FoodItem } from "./FoodItem";
import { Vendor } from "./Vendor";
// Order class created
export class Order {
    orderId = "";
    orderStatus = "";
    orderPrice = "";
    orderTime = "";
    orderDate = "";
    orderPaymentStatus = "";
    // object of vendor, customer and fooditem is created
    vendor = new Vendor();
    customer = new Customer();
    fooditem = new FoodItem();
}