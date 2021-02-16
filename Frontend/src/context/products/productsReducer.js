import { sortAscendant, sortDescendant } from "../../helpers/sortProducts";
import { types } from "../../types/types";

export const productsReducer = (state, action) => {
    const { payload } = action;

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
                ((product.category === payload.category || payload.category === 'all')
                    && (product.price <= payload.value))),
                selectedCategory: payload.category
            }
        case types.sortAscendant:
            return {
                ...state,
                selectedProducts: sortAscendant(state.selectedProducts)
            }
        case types.sortDescendant: 
            return {
                ...state,
                selectedProducts: sortDescendant(state.selectedProducts)
            }
        case types.filterByName:
            return {
                ...state,
                selectedProducts: state.allProducts.filter(product => 
                    ((product.category === state.selectedCategory || state.selectedCategory === 'all')) &&
                    (product.name.includes(payload.text)) &&
                    (product.price <= payload.sliderValue))
            }
        default:
            return state;
    }
};