import { useContext } from 'react'
import {Context} from './BasketContext'

export default function(props){

    const basketContext = useContext(Context)
    const {basket} = basketContext

    return (
        <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {basket.map(card => {
                const {title, price, amount} = card
                return (
                    <tr>
                        <td>{title}</td>
                        <td>{price}</td>
                        <td>{amount}</td>
                        <td>{price * amount}</td>
                    </tr>
                )
              })}
            <tr>
                <td colspan="3" align="center"><b>Total of the basket:</b></td>
                <td>{basket.reduce((acc, el) => acc + el.price * el.amount, 0)}</td>
            </tr>
            </tbody>
        </table>
    )
}
