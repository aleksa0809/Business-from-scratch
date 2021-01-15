import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Context = createContext({});

export const Provider = props => {

    const {children} = props
  
    const [basket, setBasket] = useState([]);

    const resetBasket = (item, amount = 1) => {
        if(item){
            item.amount = amount
            let items = basket.filter(el => el.id == item.id)
            if(items.length) item.amount += items[0].amount
            items = basket.filter(el => el.id != item.id)
            setBasket([...items, item])
            localStorage.setItem('basket', JSON.stringify(basket))
            return 
        }
        const basketString = localStorage.getItem('basket')
        if(!basketString) return
        setBasket(JSON.parse(basketString))
    }

    const basketContext = {
        basket,
        resetBasket,
    }

    useEffect(resetBasket)
    
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

