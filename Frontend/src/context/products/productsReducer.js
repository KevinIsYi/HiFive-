import { types } from "../../types/types";

export const productsReducer = (state, action) => {
    const { payload } = action;

    console.log(action);
    console.log(payload);

    switch (action.type) {
        case types.fillProducts:
            return {
                ...state,
                allProducts: payload,
                selectedProducts: payload
            }
        case types.changeSelectedProducts: {
            return {
                ...state,
                selectedProducts: state.allProducts.filter(product =>
                    (product.price <= payload && 
                    (product.category === state.selectedCategory || state.selectedCategory === 'all')))
            }}
        case types.changeCategory: 
            return {
                ...state,
                selectedProducts: state.allProducts.filter(product =>
                    ((product.category === payload.category) && (product.price <= payload.value))),
                selectedCategory: payload.category
            }
        default:
            return state;
    }
};