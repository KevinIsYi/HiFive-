import { fetchData } from "../helpers/fetch";
import { types } from "../types/types";

export const fetchProducts = async (endpoint, dispatch) => {
    const { ok, products } = await fetchData(endpoint);

    if (ok) {
        dispatch({
            type: types.fillProducts,
            payload: products
        });
    }
};

export const filterByPrice = (sliderValue, dispatch) => {
    dispatch({
        type: types.changeSelectedProducts,
        payload: sliderValue
    });
}

export const changeCategory = (newCategory, sliderValue, dispatch) => {
    dispatch({
        type: types.changeCategory,
        payload: {
            category: newCategory,
            value: sliderValue
        }
    })
}