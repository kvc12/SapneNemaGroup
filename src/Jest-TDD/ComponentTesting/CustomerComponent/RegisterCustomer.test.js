import React from "react";
import { userEvent, fireEvent, render } from "@testing-library/react";
import VendorRegister from "../../../Component/AdminComponent/VendorRegister";
import RegisterCustomer from "../../../Component/CustomerComponent/RegisterCustomer";

it("renders correctly", () => {
    const { queryByTestId } = render(<RegisterCustomer />)
    expect(queryByTestId("firstName")).toBeTruthy() //checking whether result is true or false
    expect(queryByTestId("userName")).toBeTruthy() //checking whether result is true or false
    expect(queryByTestId("password")).toBeTruthy() //checking whether result is true or false
    expect(queryByTestId("area")).toBeTruthy() //checking whether result is true or false
    expect(queryByTestId("state")).toBeTruthy() //checking whether result is true or false
    expect(queryByTestId("city")).toBeTruthy() //checking whether result is true or false
    expect(queryByTestId("pincode")).toBeTruthy() //checking whether result is true or false

})
describe("input value", () => { //checking the input value is proper or not
    it("update on change", () => { //checking if its upadting or not after changing
        const { queryByTestId } = render(<RegisterCustomer />)

        const firstName = queryByTestId('firstName').querySelector('input'); //using query selector for input setter
        fireEvent.change(firstName, { target: { value: "test" } }) // providing expected value
        expect(firstName.value).toBe("test") //checking it with actual value

        const lastName = queryByTestId('lastName').querySelector('input'); //using query selector for input setter
        fireEvent.change(lastName, { target: { value: "chheda" } }) // providing expected value
        expect(lastName.value).toBe("chheda") //checking it with actual value

        const username = queryByTestId('userName').querySelector('input'); //using query selector for input setter
        fireEvent.change(username, { target: { value: "Keval" } }) // providing expected value
        expect(username.value).toBe("Keval") //checking it with actual value

        const password = queryByTestId('password').querySelector('input'); //using query selector for input setter
        fireEvent.change(password, { target: { value: "keval@" } }) // providing expected value
        expect(password.value).toBe("keval@") //checking it with actual value

        const area = queryByTestId('area').querySelector('input'); //using query selector for input setter
        fireEvent.change(area, { target: { value: "Joshiwada" } }) // providing expected value
        expect(area.value).toBe("Joshiwada") //checking it with actual value

        const state = queryByTestId('state').querySelector('input'); //using query selector for input setter
        fireEvent.change(state, { target: { value: "Maharashtra" } }) // providing expected value
        expect(state.value).toBe("Maharashtra") //checking it with actual value

        const city = queryByTestId('city').querySelector('input'); //using query selector for input setter
        fireEvent.change(city, { target: { value: "Thane" } }) // providing expected value
        expect(city.value).toBe("Thane") //checking it with actual value

        const pincode = queryByTestId('pincode').querySelector('input'); //using query selector for input setter
        fireEvent.change(pincode, { target: { value: "400601" } }) // providing expected value
        expect(pincode.value).toBe("400601") //checking it with actual value


    })
})

// describe("Enter Vendor Name", "test")