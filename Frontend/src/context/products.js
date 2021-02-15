import React, { createContext, useReducer } from "react";
import { productsReducer } from "./products/productsReducer";

export const ProductsContext = createContext();

const initialState = {
    allProducts: [],
    selectedProducts: [],
    selectedCategory: 'all'
};

export const ProductsProvider = ({ children }) => {
    const [productsState, dispatch] = useReducer(productsReducer, initialState);

    return <ProductsContext.Provider value={{
        productsState,
        dispatch
    }}>
        {children}
    </ProductsContext.Provider>
}