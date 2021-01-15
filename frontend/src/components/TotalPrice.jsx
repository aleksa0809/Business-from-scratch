import { useContext } from 'react'
import {Context} from './BasketContext'

export default function(props){

    const basketContext = useContext(Context)
    const {basket, resetBasket} = basketContext

    const getTotal = ()=> {
        let total = basket.reduce((acc, el) => el.price * el.amount + acc, 0)
        total *= 100
        total = Math.round(total)
        return total / 100
    }

    return (
        <>
            <li className="nav-item">
                <a className="nav-link" href="#/basket">Total price: </a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="#/basket">${getTotal()}</a>
            </li>
        </>
    )
}
