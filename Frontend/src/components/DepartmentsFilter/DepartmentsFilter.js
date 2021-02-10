import React, { useContext, useEffect, useState } from 'react'

import { Items } from '../Items/Items';
import { UserCategory } from '../../hooks/useUserCategory';

import { getDataByCategory } from '../../selectors/getDataByCategory';
import { categories } from '../../data/categories';


export const DepartmentsFilter = () => {

    const { category, setCategory } = useContext(UserCategory);
    const [ products, setProducts ] = useState([]);
    const [ selectedButton, setSelectedButton ] = useState(['departments-filter__sort-no-focus', 'departments-filter__sort-no-focus']);
    const [ arrayItems, setArrayItems ] = useState([]);
    const [ ascendant, descendant ] = selectedButton;
    const [ values, setValues ] = useState({
        text: '',
        sliderValue: 3000,
        currentKey: category
    });

    const { text, sliderValue } = values;

    const changeInput = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });
        setArrayItems(getDataByCategory({...values, [ target.name ]: target.value}, products))
    }

    const categoryClic = (id) => {
        setValues({
            text: '',
            sliderValue,
            currentKey: id,
        });
        setCategory(id);
        setArrayItems(getDataByCategory({sliderValue, text: '', currentKey: id}, products));
        setSelectedButton(['departments-filter__sort-no-focus', 'departments-filter__sort-no-focus']);
    }

    const selectButton = (newButtonClasses, sortBy) => {
        setSelectedButton(newButtonClasses);
        let auxArray = arrayItems;

        if (sortBy === 'A') {
            auxArray.sort(function(a, b) {
                return a.price - b.price;
            })
        }
        else {
            auxArray.sort(function(a, b) {
                return b.price - a.price;
            })
        }

        setArrayItems(auxArray);
    }

    const getItems = async () => {
        const url = 'http://localhost:4000/api/items/';
        const req = await fetch(url);
        const { ok, items } = await req.json();

        if (ok) {
            setProducts(items);
            setArrayItems(items);
        }
        
    }
    useEffect(() => {
        getItems();
    }, [  ])

    return (
        <section className="departments-filter__show-categories">
            <div>
                <div className="departments-filter__filter-section">
                    <h1>Categories</h1>
                    {
                        categories.map(({ id, category }) => (
                            <p key={ id } onClick={ () => categoryClic(id) }>{ category } </p>
                        ))
                    }
                </div>
                <div className="departments-filter__filter-section">
                    <h1>Filter by Price</h1>
                    <input className="departments-filter__slider" type="range" min="0" max="3000" name="sliderValue" value={ sliderValue } onChange={ changeInput }/>
                    <div className="departments-filter__filter-price-slider-options">
                        <p>Range: $0 - ${ sliderValue }</p>
                    </div>
                </div>
                <div className="departments-filter__filter-section">
                    <h1>Sort by Price</h1>
                    <div className="departments-filter__sort-buttons">
                        <button 
                            className={ `btn departments-filter__btn-sort ${ ascendant }` } 
                            onClick={ () => selectButton(['departments-filter__sort-focus', 'departments-filter__sort-no-focus'], 'A') }
                        >
                            Ascendant
                        </button>
                        <button 
                            className={ `btn departments-filter__btn-sort ${ descendant }` }
                            onClick={ () => selectButton(['departments-filter__sort-no-focus', 'departments-filter__sort-focus'], 'D') }
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
                        value={ text }
                        onChange={ changeInput }
                    />
                </div>
            </div>
            <div className="departments-filter__results-section">
                <h2>Results</h2>
                <Items items={ arrayItems }/>
            </div>
        </section>
    )
}
