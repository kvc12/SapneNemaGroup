// Imported CustomerAddress because it Customer depends on CustomerAddress
import { CustomerAddress } from "./CustomerAddress";
// create class and exported
export class Customer{
    customerId="";
    firstName="";
    lastName="";
    contactNo="";
    userName="";
    password="";
    emailId="";
    // object of customerAddress is created
    customerAddress=new CustomerAddress();
}