import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LoginVendor from "../LoginVendor";

it("renders correctly", () => {
    const { queryByTestId } = render(<LoginVendor />)
    expect(queryByTestId('userName')).toBeTruthy(); //checking whether result is true or false
    expect(queryByTestId('password')).toBeTruthy(); //checking whether result is true or false
})

describe("input value", () => { //checking the input value is proper or not
    it("updates on change", () => {  //checking if its upadting or not after changing
        const { queryByTestId } = render(<LoginVendor />)

        const userNameInput = queryByTestId('userName').querySelector('input') //using query selector for input setter

        fireEvent.change(userNameInput, { target: { value: "test" } }) // providing expected value
        expect(userNameInput.value).toBe("test") //checking it with actual value

        const passwordInput = queryByTestId('password').querySelector('input') //using query selector for input setter

        fireEvent.change(passwordInput, { target: { value: "test" } }) // providing expected value
        expect(passwordInput.value).toBe("test") //checking it with actual value

    })
})