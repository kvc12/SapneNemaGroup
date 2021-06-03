import React from "react";
import {render , fireEvent, queryByTestId} from "@testing-library/react";
import AddFoodItems from "../AddFoodItems";

it("renders correctly",()=>{
    const{queryByTestId}=render(<AddFoodItems/>)
    expect(queryByTestId("foodName")).toBeTruthy();
    expect(queryByTestId("foodPrice")).toBeTruthy();
    expect(queryByTestId("foodQty")).toBeTruthy();
    expect(queryByTestId("vendorId")).toBeTruthy();

})
describe("input values",()=>{
    it("updates on change",()=>{
        const{queryByTestId}=render(<AddFoodItems/>)

        const foodNameInput = queryByTestId("foodName").querySelector('input')

        fireEvent.change(foodNameInput,{target:{value:"test"}})
        expect(foodNameInput.value).toBe("test")

        const foodPriceInput = queryByTestId("foodPrice").querySelector('input')

        fireEvent.change(foodPriceInput,{target:{value:"test"}})
        expect(foodPriceInput.value).toBe("test")

        const foodQuantityInput = queryByTestId("foodQty").querySelector('input')

        fireEvent.change(foodQuantityInput,{target:{value:"test"}})
        expect(foodQuantityInput.value).toBe("test")

        const vendorIdInput = queryByTestId("foodQty").querySelector('input')

        fireEvent.change(vendorIdInput,{target:{value:"test"}})
        expect(vendorIdInput.value).toBe("test")
    })
})