import React from "react";
import {render , fireEvent} from "@testing-library/react";
import VendorRegister from "../VendorRegister";

it("renders correctly",()=>{
    const{queryByTestId} = render(<VendorRegister />)
    expect(queryByTestId("vendorName")).toBeTruthy(); //checking whether result is true or false
    expect(queryByTestId("vendorUsername")).toBeTruthy(); //checking whether result is true or false
    expect(queryByTestId("vendorPassword")).toBeTruthy(); //checking whether result is true or false
    expect(queryByTestId("vendorContact")).toBeTruthy(); //checking whether result is true or false
    expect(queryByTestId("vendorArea")).toBeTruthy(); //checking whether result is true or false
    expect(queryByTestId("vendorCity")).toBeTruthy(); //checking whether result is true or false
    expect(queryByTestId("vendorPincode")).toBeTruthy(); //checking whether result is true or false
    expect(queryByTestId("vendorState")).toBeTruthy(); //checking whether result is true or false
})

describe("input value", ()=>{ //checking th input value is proper or not
    it("updates on change",()=>{ //checking if its upadting or not after changing
        const {queryByTestId} = render(<VendorRegister/>)

        const vendorNameInput = queryByTestId('vendorName').querySelector('input'); //using query selector for input setter

        fireEvent.change(vendorNameInput,{target : {value:"test"}}) // providing expected value
        expect(vendorNameInput.value).toBe("test") //checking it with actual value

        const vendorUsernameInput = queryByTestId('vendorUsername').querySelector('input'); //using query selector for input setter

        fireEvent.change(vendorUsernameInput,{target : {value:"test"}}) // providing expected value
        expect(vendorUsernameInput.value).toBe("test") //checking it with actual value

        const vendorPasswordInput = queryByTestId('vendorPassword').querySelector('input'); //using query selector for input setter

        fireEvent.change(vendorPasswordInput,{target : {value:"test"}}) // providing expected value
        expect(vendorPasswordInput.value).toBe("test") //checking it with actual value

        const vendorContactInput = queryByTestId('vendorContact').querySelector('input'); //using query selector for input setter

        fireEvent.change(vendorContactInput,{target : {value:"123"}}) // providing expected value
        expect(vendorContactInput.value).toBe("123") //checking it with actual value
 
        const vendorAreaInput = queryByTestId('vendorArea').querySelector('input'); //using query selector for input setter

        fireEvent.change(vendorAreaInput,{target : {value:"test"}}) // providing expected value
        expect(vendorAreaInput.value).toBe("test") //checking it with actual value

        const vendorCityInput = queryByTestId('vendorCity').querySelector('input'); //using query selector for input setter

        fireEvent.change(vendorCityInput,{target : {value:"test"}}) // providing expected value
        expect(vendorCityInput.value).toBe("test") //checking it with actual value


        const vendorStateInput = queryByTestId('vendorState').querySelector('input'); //using query selector for input setter

        fireEvent.change(vendorStateInput,{target : {value:"test"}}) // providing expected value
        expect(vendorStateInput.value).toBe("test") //checking it with actual value

        const vendorPincodeInput = queryByTestId('vendorPincode').querySelector('input'); //using query selector for input setter

        fireEvent.change(vendorPincodeInput,{target : {value:"123"}}) // providing expected value
        expect(vendorPincodeInput.value).toBe("123") //checking it with actual value
    })
})