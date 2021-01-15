import { useContext } from 'react'
import {Context} from './BasketContext'

export default function(props){

    const basketContext = useContext(Context)
    const {basket, resetBasket} = basketContext

    return (
        <>
            <li className="nav-item">
                <a className="nav-link" href="#/basket">Total price: </a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="#/basket">${basket.reduce((acc, el) => el.price * el.amount + acc, 0)}</a>
            </li>
        </>
    )
}
