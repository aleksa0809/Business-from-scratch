import React from 'react'
import {AppContextConsumer} from '../Context'
import './card.css'

const addToChart = (props, context)=> {
    const {toast, updateBasket, deleteFromBasket} = context
    const {id, basket} = props
    if(basket) deleteFromBasket(id)
    else updateBasket(id, props)
    toast(basket ? 'Removed from cart' : 'Added to cart.')
}

const getButtonText = $=> $ ? 'Remove from basket' : 'Add to cart'

export default function Card(props) {
    console.log(props)
    return (
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                  <a href="#"><img className="card-img-top" src={props.image}  alt="" /></a>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">{props.name}</a>
                    </h4>
                    <h5>${props.price}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text">{props.color}</p>
                    <div className="container">
                        <div className="row">
                            <div className="col1"><label>Amount</label></div>
                            <div className="col1"><input type="number" min="1" value="1"/></div>
                            <div className="w-100"></div>
                        </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <AppContextConsumer>
                        {context=> 
                            <button onClick={$=> addToChart(props, context)}>{getButtonText(props.basket)}</button>
                        }
                    </AppContextConsumer>
                  </div>
                </div>
              </div>
   )
}
