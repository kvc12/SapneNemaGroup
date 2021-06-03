import { render, screen } from '@testing-library/react';
import App from '../../App';
import { VendorService } from '../../Services/VendorService';

//Jest is a JavaScript testing framework built by Facebook and primarily designed for React - based applications,

// 'test' is simply a keyword in Jest.We write tests by using a function provided by Jest called test. ...

// 'expect' is also a keyword in Jest.As the name suggests, we expect something from our function
test('find food by id ', () => {
    expect(new VendorService().getFoodById
        (-1) == false).toBe(false)
})
test('add food Item ', () => {
    expect(new VendorService().addFoodItem
        (1) == false).toBe(false)
})
test('Delete Food Item ', () => {
    expect(new VendorService().deleteFoodItem
        (1) == false).toBe(false)
})
test('Login Vendor by username and password ', () => {
    expect(new VendorService().loginVendor
        ('keval', ' Keval@') == false).toBe(false)
})
test('Check Login', () => {
    expect(new VendorService().checkLogin
        () == true).toBe(false)
})
test('find Order by id ', () => {
    expect(new VendorService().getFoodById
        (1) == true).toBe(false)
})
test('View All Order ', () => {
    expect(new VendorService().getAllFoodItem
        () == false).toBe(false)
})
test('Get All Food Item', () => {
    expect(new VendorService().getAllFoodItem
        () == true).toBe(false)
})