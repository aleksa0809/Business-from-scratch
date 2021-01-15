import { useContext } from 'react'
import {Context} from './BasketContext'

export default function (props) {

    const basketContext = useContext(Context)
    const {basket, resetBasket} = basketContext

    let {id, title, description, price, amount} = props
    return (
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                <div class="card-body">
                    <h4 class="card-title">
                        <a href="#">{title}</a>
                    </h4>
                    <h5>Price: ${props.price}</h5>
                    {amount ? <h5>Amount: {props.amount}</h5> : ''}
                    <p class="card-text">{description}</p>
                </div>
                <div class="card-footer">
                        {
                            amount ?
                            (
                                <p>
                                    <button className="btn btn-primary" onClick={()=>resetBasket({id, price, description, title}, 1)}>More</button>
                                    <button className="btn btn-primary" onClick={()=>resetBasket({id, price, description, title}, -1)}>Less</button>
                                </p>
                            )
                            :
                            ( <p><button className="btn btn-primary" onClick={()=>resetBasket({id, price, description, title}, 1)}>To basket</button></p> )
                        }
                </div>
            </div>
        </div>
    )
}
