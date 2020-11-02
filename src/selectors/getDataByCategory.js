import { data } from '../data/data';

export const getDataByCategory = ( values ) => {
    const { products } = data;
    const { text, sliderValue, currentKey } = values;

    return products.filter(({ id, name, price }) => (
        (id[0] === currentKey || currentKey === '0') && 
        (price <= sliderValue) && 
        (name.includes(text))
    ));
}