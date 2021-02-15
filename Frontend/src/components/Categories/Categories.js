import React, { useContext } from 'react';
import { changeCategory } from '../../actions/actions';
import { ProductsContext } from '../../context/products';

export const Categories = ({slider}) => {

    const categories = ['all', 'dresses', 'watches', 'bags', 'glasses', 'footwear', 'accesories'];
    const { dispatch } = useContext(ProductsContext);

    return (
        <>
            <h1>Categories</h1>
            {
                categories.map(category => (
                    <p
                        key={category}
                        onClick={() => changeCategory(category, slider, dispatch)}
                    >
                        {category}
                    </p>
                ))
            }
        </>
    )
}
