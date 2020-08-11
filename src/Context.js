import React, {Component} from "react"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//import data from './data'

const message = (msg)=> toast(msg) || true
const prefix = 'http://localhost:3001/api'  
const basketFromStorage = window.localStorage.getItem('basket') || '[]'

class AppContextProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            showcase: [],
            basket: JSON.parse(basketFromStorage),
            getBasketCount: ()=> this.state.basket.length,
            getShowcase: (props)=> {
                const {sector, size, toplist, basket} = props  
                if(basket) return this.state.basket;
                const url = prefix + (toplist && '/toplist' || sector && size && `/${sector}/${size}`)  
                fetch(url)
                    .then(res=>res.json())
                    .then(arr=> this.setState({showcase: arr}))
                    .catch(err=> toast('An error is occured when fetching'))
            },
            changeBasket: (card)=> {
                const toRemove = card.basket
                let item = this.state.basket.find(el=>el.id == card.id)
                let {basket} = this.state
                if(item && !toRemove){
                    toast('Such item already presents in your basket.')
                    return
                }
                if(toRemove) {
                    basket = basket.filter(el=>el.id != card.id) 
                    toast('The item is removed from your basket.')
                }
                else {
                    basket.push(card)
                    toast('The item is added into your basket.')
                }
                this.setState({basket}) 
                localStorage.setItem('basket', JSON.stringify(basket))
            }
        }
    }
    render() {
        return <Provider value={this.state}><ToastContainer />{this.props.children}</Provider>;
    }
}

const {Provider, Consumer} = React.createContext();
export {AppContextProvider, Consumer as AppContextConsumer};

