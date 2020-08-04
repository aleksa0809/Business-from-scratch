import React from 'react';
import Card from '../components/card'
import {AppContextConsumer} from '../Context'
import './page.css'

export default function Showcase(props) {
    const getCards = (arr)=> {
        const cards = []
        for(const card of arr){
            cards.push(<Card image={card.picture && "/images/" + card.picture} {...card} basket={!!card.basket}/>)
        }
        return cards
    }

    return (
        <AppContextConsumer>
        {
            context=> {
                context.getShowcase(props)
                return (
                    <div className="av-page">
                        <h1>{props.basket && 'Your basket' || 'Our showcase'}</h1>
                        <div class="row">
                            {getCards(props.basket && context.basket || context.showcase)}
                        </div>
                    </div>
                )
            }
        }
        </AppContextConsumer>
    )
}

