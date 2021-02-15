import React, { useContext, useEffect } from 'react'
import { Items } from '../Items/Items';
import { ProductsContext } from '../../context/products';
import { fetchProducts, filterByPrice } from '../../actions/actions';
import { useFilters } from '../../hooks/useFilters';
import { Categories } from '../Categories/Categories';

export const DepartmentsFilter = () => {

    const { 
        ascendant, descendant, textFilter, sliderValue,
        sortAscendant, sortDescendant, changeTextFilter,
        changeSliderValue, resetButtonsClasses
    } = useFilters();

    const { productsState, dispatch } = useContext(ProductsContext);
    const { allProducts, selectedProducts, selectedCategory } = productsState;

    const changeSliderInputValue = (e) => {
        changeSliderValue(e);
        filterByPrice(sliderValue, dispatch);
    }

    useEffect(() => {
        if (allProducts.length === 0) {
            fetchProducts('api/items', dispatch);
        }
    }, [allProducts, dispatch]);

    return (
        <section className="departments-filter__show-categories">
            <div>
                <div className="departments-filter__filter-section">
                    <Categories slider={sliderValue} />
                </div>
                <div className="departments-filter__filter-section">
                    <h1>Filter by Price</h1>
                    <input
                        className="departments-filter__slider"
                        type="range"
                        min="0"
                        max="3000"
                        name="sliderValue"
                        value={sliderValue}
                        onChange={changeSliderInputValue}
                    />
                    <div className="departments-filter__filter-price-slider-options">
                        <p>Range: $0 - ${sliderValue}</p>
                    </div>
                </div>
                <div className="departments-filter__filter-section">
                    <h1>Sort by Price</h1>
                    <div className="departments-filter__sort-buttons">
                        <button 
                            className={`btn departments-filter__btn-sort ${ascendant}`} 
                            onClick={sortAscendant}
                        >
                            Ascendant
                        </button>
                        <button 
                            className={`btn departments-filter__btn-sort ${descendant}`}
                            onClick={sortDescendant}
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
                        value={textFilter}
                        onChange={changeTextFilter}
                    />
                </div>
            </div>
            <div className="departments-filter__results-section">
                <h2>Results</h2>
                <Items products={selectedProducts}/>
            </div>
        </section>
    )
}
