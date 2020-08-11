import React from 'react'
import {AppContextConsumer} from '../Context'
import './card.css'

const getButtonText = isBasket=> isBasket ? 'Remove from basket' : 'Add to cart'

export default function Card(props) {
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
                  </div>
                  <div className="card-footer">
                    <AppContextConsumer>
                        {context=> 
                            <button onClick={e=> context.changeBasket(props)}>{getButtonText(props.basket)}</button>
                        }
                    </AppContextConsumer>
                  </div>
                </div>
              </div>
   )
}
