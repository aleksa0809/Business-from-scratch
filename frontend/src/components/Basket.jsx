import { useContext } from 'react'
import Cards from './Cards'
import {Context} from './BasketContext'

export default function(props){

    const basketContext = useContext(Context)
    const {basket, resetBasket} = basketContext
    const headline = basket.length ? 'The content of your basket' : 'There are no itens in the basket'

    return (
        <div className="showcase">
            <h1>{headline}</h1>
            <Cards products={basket} resetBasket={resetBasket}/> 
        </div> 
    )
}
