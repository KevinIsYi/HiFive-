import React, { useState } from 'react'
import { AiFillDelete, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';

export const CartItem = React.memo(({ item, editTotal }) => {
    const { _id, img, name, price, quantity, available } = item;
    console.log(available);

    const [ currentQuantity, setCurrentQuantity ] = useState(Math.min(quantity, available));
    const [ itemExist, setItemExist ] = useState(true);
    
    const deleteComponent = () => {
        setItemExist(false);
        editTotal( -price * quantity );

        const auxId = _id;

        const deletedItems = JSON.parse(localStorage.getItem('sc-deleted-items'));
        
        const cartItems = JSON.parse(localStorage.getItem('scitems'));
        const itemIndex = cartItems.findIndex(({ _id }) => _id === auxId);
        cartItems.splice(itemIndex, 1);

        const find = deletedItems.find(id => id === _id);
        if (!find) {
            deletedItems.push(_id);
        }

        localStorage.setItem('sc-deleted-items', JSON.stringify(deletedItems));
        localStorage.setItem('scitems', JSON.stringify(cartItems));
        localStorage.setItem('change', true);
    }

    const changeQuantity = (value) => {
        const newQuantity = currentQuantity + value; 
        setCurrentQuantity(newQuantity);
        editTotal(price * value);

        const cartItems = JSON.parse(localStorage.getItem('scitems'));
        const auxItems = cartItems.map(item => item._id === _id ? { ...item, quantity: newQuantity } : item);

        localStorage.setItem('change', true);
        localStorage.setItem('scitems', JSON.stringify(auxItems));
    }

    return (
        <>
        {
            itemExist
            ?
                <div className="cart-item__shopping-cart-item">
                    <img src={`./assets/items/${ img }.jpg`} alt={ img } />
                    <div className="cart-item__description-price">
                        <h1>{ name } | In Stock: #{ available }</h1>
                        <p><span># Items:</span> { currentQuantity }</p>
                        <p><span>Unit Price:</span> ${ price }</p>
                        <p><span>Total:</span> ${ (quantity * price).toFixed(2) }</p>
                        <AiFillDelete 
                            className="cart-item__icon cart-item__sc-icon cart-item__sc-delete-icon" 
                            onClick={ deleteComponent }
                        />
                        {
                            currentQuantity < available && 
                            <AiFillPlusCircle 
                                className="cart-item__icon cart-item__sc-icon" 
                                onClick={ () => changeQuantity(1) }
                            />
                        }
                        {
                            currentQuantity > 1 && 
                            <AiFillMinusCircle 
                                className="cart-item__icon cart-item__sc-icon" 
                                onClick={ () => changeQuantity(-1) }
                            />
                        }
                    </div>
                </div>
            :
                null
        }
        </>
        /*
        <div className="shopping-cart-item">
            <img src={`./assets/items/${ img }.jpg`} alt={ img } />
            <div className="description-price">
                <h1>{ name } </h1>
                <p><span># Items:</span> { currentQuantity }</p>
                <p><span>Unit Price:</span> ${ price }</p>
                <p><span>Total:</span> ${ (quantity * price).toFixed(2) }</p>
                {
                    currentQuantity > 1 && 
                    <AiFillMinusCircle 
                        className="icon sc-icon" 
                        onClick={ () => changeQuantity(-1) }
                    />
                }
                <AiFillPlusCircle 
                    className="icon sc-icon" 
                    onClick={ () => changeQuantity(1) }
                />
                <AiFillDelete 
                    className="icon sc-icon cart-item__sc-delete-icon" 
                    onClick={ deleteComponent }
                />
            </div>
        </div>
        */
    )
})