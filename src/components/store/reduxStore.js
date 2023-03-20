import { createSlice, configureStore } from "@reduxjs/toolkit";
import Decimal from "decimal.js";

const createState = (elements, totalQuantity, totalSum, cartEmpty) => {
    return { elements: elements, totalQuantity: totalQuantity, totalSum: totalSum, cartEmpty: cartEmpty };
};

const initState = createState([], 0, 0, true);

const elementsSlice = createSlice({
    name: "elements",
    initialState: initState,
    reducers: {
        addElement(state = initState, action) {
            const currentElements = [...state.elements];
            const existingElement = currentElements.find((pr) => pr.id === action.payload.id);

            if (existingElement) {
                existingElement.quantity++;
            } else {
                currentElements.push({ ...action.payload, quantity: 1 });
            }

            state.products = currentElements;
            state.totalQuantity = currentElements.reduce((sum, element) => sum + element.quantity, 0);
            state.totalSum = currentElements.reduce((sum, element) => sum.plus(new Decimal(element.price).mul(element.quantity)), new Decimal(0)).toString();
            state.cartEmpty = currentElements.length === 0;
        },
        removeProduct(state, action) {
            const currentElements = [...state.elements];
            const existingElementIndex = currentElements.findIndex((element) => element.id === action.payload);

            if (currentElements[existingElementIndex].quantity > 1) {
                currentElements[existingElementIndex].quantity--;
            } else {
                currentElements.splice(existingElementIndex, 1);
            }

            state.products = currentElements;
            state.totalQuantity = currentElements.reduce((sum, element) => sum + element.quantity, 0);
            state.totalSum = currentElements.reduce((sum, element) => sum.plus(new Decimal(element.price).mul(element.quantity)), new Decimal(0)).toString();
            state.cartEmpty = currentElements.length === 0;
        },
    },
});

const reduxStore = configureStore({
    reducer: elementsSlice.reducer,
});

export default reduxStore;
export const elementActions = elementsSlice.actions;
