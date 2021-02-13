const sortAscendant = (products) => 
    products.sort((a, b) =>
        a.price - b.price
    );


const sortDescendant = (products) => 
    products.sort((a, b) =>
        b.price - a.price
    );

export const sortProducts = (key, products) => {
    if (key === 'A') {
        return {
            sortedProducts: sortAscendant(products),
            buttonClasses: {
                ascendant: 'departments-filter__sort-focus',
                descendant: 'departments-filter__sort-no-focus'
            }
        }
    }

    return {
        sortedProducts: sortDescendant(products),
        buttonClasses: {
            ascendant: 'departments-filter__sort-no-focus',
            descendant: 'departments-filter__sort-focus'
        }
    }
};