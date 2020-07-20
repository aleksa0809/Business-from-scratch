import React from 'react';
import {AppContextConsumer} from '../Context'
import "./basket-count.css"

export default function BasketCount() {
  return (
      <AppContextConsumer>
      {context=> 
          (<ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <a className="nav-link av-basket-count" href="#/api/query/basket">Your shopping cart ({context.basketCount} items)</a>
              </li>
          </ul>)
      }
      </AppContextConsumer>
  )
}
