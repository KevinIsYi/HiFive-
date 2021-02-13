import React, { useEffect, useState } from 'react'
import { Items } from '../Items/Items';
import { categories } from '../../data/categories';
import { fetchData } from '../../helpers/fetch';
import { sortProducts } from '../../helpers/sortProducts';

export const DepartmentsFilter = () => {

    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [buttonsClasses, setButtonsClasses] = useState({
        ascendant: 'departments-filter__sort-no-focus',
        descendant: 'departments-filter__sort-no-focus'
    });
    const { ascendant, descendant } = buttonsClasses;

    const fetchProducts = async () => {
        const data = await fetchData('api/items');
        
        if (data.ok) {
            const { products } = data;
            setAllProducts(products);
            setProducts(products);
        }
    };

    const sort = (key) => {
        const { sortedProducts, buttonClasses } = sortProducts(key, products);

        setProducts(sortedProducts);
        setButtonsClasses(buttonClasses);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <section className="departments-filter__show-categories">
            <div>
                <div className="departments-filter__filter-section">
                    <h1>Categories</h1>
                    {
                        categories.map(({ id, category }) => (
                            <p key={ id } >{ category } </p>
                        ))
                    }
                </div>
                <div className="departments-filter__filter-section">
                    <h1>Filter by Price</h1>
                    <input
                        className="departments-filter__slider"
                        type="range"
                        min="0"
                        max="3000"
                        name="sliderValue"
                        value={3000}
                    />
                    <div className="departments-filter__filter-price-slider-options">
                        <p>Range: $0 - $3000</p>
                    </div>
                </div>
                <div className="departments-filter__filter-section">
                    <h1>Sort by Price</h1>
                    <div className="departments-filter__sort-buttons">
                        <button 
                            className={`btn departments-filter__btn-sort ${ascendant}`} 
                            onClick={() => sort('A')}
                        >
                            Ascendant
                        </button>
                        <button 
                            className={`btn departments-filter__btn-sort ${descendant}`}
                            onClick={() => sort('D')}
                        >
                            Descendant
                        </button>
                    </div>
                </div>
                <div className="departments-filter__filter-section">
                    <h1>Find by Name</h1>
                    <input 
                        className="departments-filter__filter-by-name"
                        type="text" 
                        placeholder="Love HiFive!"
                        name="text"
                    />
                </div>
            </div>
            <div className="departments-filter__results-section">
                <h2>Results</h2>
                <Items products={products}/>
            </div>
        </section>
    )
}
