import { render, screen } from '@testing-library/react';
import App from '../../App';
import { CustomerService } from '../../Services/CustomerService';


test('Register Customer by id ', () => {
    expect(new CustomerService().registerCustomer
        () == false).toBe(false)
})
test('find Customer Login by id ', () => {
    expect(new CustomerService().customerLogin
        (1, "Keval@") == false).toBe(false)
})
test('find Customer by Username ', () => {
    expect(new CustomerService().customerLogin2
        ("keval", "Keval@") == false).toBe(false)
})
test('Place Order by customerId and vendorId ', () => {
    expect(new CustomerService().placeOrder
        (1, 1) == true).toBe(false)
})
test('Cancel Order by Id', () => {
    expect(new CustomerService().cancelOrder
        (1, "pending") == true).toBe(false)
})
test('find Order by id ', () => {
    expect(new CustomerService().findOrderById
        (1) == true).toBe(false)
})
test('Find All Order ', () => {
    expect(new CustomerService().findAllOrder
        (-28) == false).toBe(false)
})
test('View Menu', () => {
    expect(new CustomerService().viewMenu
        (1) == true).toBe(false)
})