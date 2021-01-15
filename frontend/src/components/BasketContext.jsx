import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Context = createContext({});

export const Provider = props => {

    const {children} = props

    const restoreBasket = ()=> {
        const basketString = localStorage.getItem('basket')
        return basketString && JSON.parse(basketString).filter(el => el.amount > 0) || []
    }
  
    const [basket, setBasket] = useState(restoreBasket());

    const resetBasket = (item, amount = 1) => {
        item.amount = amount
        let items = basket.filter(el => el.id == item.id)
        if(items.length) item.amount += items[0].amount
        items = basket.filter(el => el.id != item.id)
        if(item.amount < 1 && !window.confirm('Remove the item from the basket?')) item.amount = 1
        items = (item.amount ? [...items, item] : items).sort((a, b) => a.id - b.id)
        setBasket(items)
        localStorage.setItem('basket', JSON.stringify(basket))
    }

    const basketContext = {
        basket,
        resetBasket,
        setBasket
    }

    return <Context.Provider value={basketContext}>{children}</Context.Provider>
}

export const { Consumer } = Context;

Provider.propTypes = {
  basket: PropTypes.array,
  resetBasket: PropTypes.func
}

Provider.defaultProps = {
  users: [],
  resetBasket: ()=> alert('Basket!')
}

