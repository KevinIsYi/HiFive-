export const updateShoppingCart = async (id) => {
    const items = JSON.parse(localStorage.getItem('scitems'));
    const cartItems = items.map(({ _id, quantity }) => ({ itemId: _id, quantity }));
    const change = JSON.parse( localStorage.getItem('change'));
    const deletedItems = JSON.parse(localStorage.getItem('sc-deleted-items'));
    if (change) {
        localStorage.setItem('change', false);
        const url = 'http://localhost:4000/api/items/setshoppingcart'
        try {
            const req = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    userId: id,
                    updateItems: cartItems,
                    deletedItems
                })
            });
            await req.json();
            localStorage.setItem('sc-deleted-items', JSON.stringify([]));
            localStorage.setItem('scitems', JSON.stringify([]));
        } catch (error) {
            console.log(error);
        }
    }
}