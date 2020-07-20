import React from 'react';
import Card from '../components/card'
import {AppContextConsumer} from '../Context'
import './page.css'

export default function Showcase(props) {
    const {basket} = props  
    const header = basket && 'Your basket' || 'Our showcase'  
    return (
        <div className="av-page">
            <h1>{header}</h1>
            <AppContextConsumer>
            {context=> {
                let items = []
                for(const card of context.getShowcase(props.basket)) {
                    items.push(
                        <Card image={card.picture && "/images/" + card.picture} {...card} basket={!!basket}/>
                    )
                }
                if(!items.length) items = 'There are no items'
                return (
                        <div class="row">
                        {items}
                        </div>
                    )
                }
            }
            </AppContextConsumer>
        </div>
    )
}


