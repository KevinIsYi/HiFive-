export const sortAscendant = (products) => (
    products.sort((a, b) =>
        a.price - b.price
    )
);

export const sortDescendant = (products) => (
    products.sort((a, b) =>
        b.price - a.price
    )
);
    