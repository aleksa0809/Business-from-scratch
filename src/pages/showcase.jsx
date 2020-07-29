import React from 'react';
import Card from '../components/card'
import {AppContextConsumer} from '../Context'
import './page.css'

export default function Showcase(props) {
    const {sector, size, toplist, basket} = props  
    const header = basket && 'Your basket' || 'Our showcase'  
    const prefix = 'http://localhost:3001/api'  
    const url = prefix + (toplist ? '/toplist' : `/${sector}/${size}`)  
    let items = []
    fetch(url).then(res=>res.json()).then(arr=>{
        console.log(arr)
        items = []
        for(const card of arr){
            items.push(
                <Card image={card.picture && "/images/" + card.picture} {...card} basket={!!basket}/>
            )
        }
    })
    return (
        <div className="av-page">
            <h1>{header}</h1>
            <div class="row">
                {items}
            </div>
        </div>
    )
}

