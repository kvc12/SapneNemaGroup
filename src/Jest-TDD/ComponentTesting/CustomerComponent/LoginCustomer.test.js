import React from "react";
import { userEvent, fireEvent, render, queryByLabelText } from "@testing-library/react";
import RegisterCustomer from "../../../Component/CustomerComponent/RegisterCustomer";
it("renders correctly", () => {
    const { queryByTestId } = render(<RegisterCustomer />)
    expect(queryByTestId("firstName")).toBeTruthy() //checking whether result is true or false
    expect(queryByTestId("lastName")).toBeTruthy() //checking whether result is true or false
    expect(queryByTestId("contact")).toBeTruthy() //checking whether result is true or false
    expect(queryByTestId("email")).toBeTruthy() //checking whether result is true or false
    expect(queryByTestId("userName")).toBeTruthy() //checking whether result is true or false
    expect(queryByTestId("password")).toBeTruthy() //checking whether result is true or false
    expect(queryByTestId("area")).toBeTruthy() //checking whether result is true or false
    expect(queryByTestId("state")).toBeTruthy() //checking whether result is true or false
    expect(queryByTestId("city")).toBeTruthy() //checking whether result is true or false
    expect(queryByTestId("pincode")).toBeTruthy() //checking whether result is true or false

})

describe("Testing First Name value", () => { //checking the input value is proper or not
    it("First Name update on change", () => { //checking if its upadting or not after changing
        const { queryByTestId } = render(<RegisterCustomer />)

        const label = queryByTestId('firstName').querySelector('input'); //using query selector for input setter
        fireEvent.change(label, { target: { value: "keval" } }) // providing expected value
        expect(label.value).toBe("keval") //checking it with actual value


        const label2 = queryByTestId('lastName').querySelector('input'); //using query selector for input setter
        fireEvent.change(label2, { target: { value: "chheda" } }) // providing expected value
        expect(label2.value).toBe("chheda") //checking it with actual value

    })
})
describe("Contact value Testing", () => {
    it("Contact update on change", () => {
        const { queryByTestId } = render(<RegisterCustomer />)

        const contact = queryByTestId('contact').querySelector('input'); //using query selector for input setter
        fireEvent.change(contact, { target: { value: "8080808087" } }) // providing expected value
        expect(contact.value).toBe("8080808087") //checking it with actual value

        const email = queryByTestId('email').querySelector('input'); //using query selector for input setter
        fireEvent.change(email, { target: { value: "keval@gmail.com" } }) // providing expected value
        expect(email.value).toBe("keval@gmail.com") //checking it with actual value

    })
})

describe("Address value Testing", () => {
    it("Address update on change", () => {
        const { queryByTestId } = render(<RegisterCustomer />)

        const area = queryByTestId('area').querySelector('input'); //using query selector for input setter
        fireEvent.change(area, { target: { value: "Joshiwada" } }) // providing expected value
        expect(area.value).toBe("Joshiwada") //checking it with actual value

        const city = queryByTestId('city').querySelector('input');
        fireEvent.change(city, { target: { value: "Thane" } }) // providing expected value
        expect(city.value).toBe("Thane") //checking it with actual value

        const state = queryByTestId('state').querySelector('input'); //using query selector for input setter
        fireEvent.change(state, { target: { value: "Maharashtra" } }) // providing expected value
        expect(state.value).toBe("Maharashtra") //checking it with actual value

        const pincode = queryByTestId('pincode').querySelector('input'); //using query selector for input setter
        fireEvent.change(pincode, { target: { value: "400601" } })  // providing expected value
        expect(pincode.value).toBe("400601") //checking it with actual value

    })
})


// describe("Enter Vendor Name", "test")