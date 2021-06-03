import { render, screen } from '@testing-library/react';
import App from '../../App';
import { AdminService } from '../../Services/AdminService';

// Jest is a JavaScript testing framework built by Facebook and primarily designed for React - based applications,

// 'test' is simply a keyword in Jest.We write tests by using a function provided by Jest called test. ...

// 'expect' is also a keyword in Jest.As the name suggests, we expect something from our function
test('find vendor by id ', () => {
  expect(new AdminService().findVendorById
    (-1) == false).toBe(false)
})
test('find Admin by id ', () => {
  expect(new AdminService().findCustomerById
    (1) == false).toBe(false)
})
test('find Customer by id ', () => {
  expect(new AdminService().findCustomerById
    (1) == false).toBe(false)
})
test('Test Admin Login by username and password ', () => {
  expect(new AdminService().adminLogin2
    ('keval', ' Keval@') == false).toBe(false)
})
test('Find All Admin', () => {
  expect(new AdminService().findAllAdmins
    () == true).toBe(false)
})
test('find Order by id ', () => {
  expect(new AdminService().findOrderById
    (1) == true).toBe(false)
})
test('Delete Order by id ', () => {
  expect(new AdminService().deleteOrderById
    (-28) == false).toBe(false)
})
test('Remove Vendor by id ', () => {
  expect(new AdminService().removeVendor
    (1) == true).toBe(false)
})