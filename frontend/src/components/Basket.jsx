import { useContext } from 'react'
import Cards from './Cards'
import {Context} from './BasketContext'

export default function(props){

    const basketContext = useContext(Context)
    const {basket, resetBasket} = basketContext
    const headline = basket.length ? 'The content of your basket' : 'There are no items in the basket'

    return (
        <div className="showcase">
            <h2>{headline}</h2>
            {
                basket.length ?
                (
                    <>
                        <Cards products={basket} resetBasket={resetBasket}/> 
                        <hr />
                        <div className="basket-bottom">
                            <button className="btn btn-primary" onClick={() => window.location = '#/order'}>
                                Order these items
                            </button>
                        </div>
                    </>
                )
                :
                ''
            }
        </div> 
    )
}
