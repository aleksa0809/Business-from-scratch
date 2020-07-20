import React, {Component} from "react"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import data from './data'

const message = (msg)=> toast(msg) || true
let basket = window.localStorage.getItem('basket') || '[]'
basket = JSON.parse(basket)

class AppContextProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            basketCount: basket.length,
            getShowcase: (isBasket)=> {
                return isBasket && basket || data;
            },
            changeBasket: (card)=> {
                const isBasket = card.basket
                if(isBasket && !this.state.basketCount) {this.setState({basketCount:0}); return}
                this.setState({basketCount: isBasket && --this.state.basketCount || ++this.state.basketCount})
                toast('The state of your basket is changed')
            }
        }
    }
    render() {
        return <Provider value={this.state}><ToastContainer />{this.props.children}</Provider>;
    }
}

const {Provider, Consumer} = React.createContext();
export {AppContextProvider, Consumer as AppContextConsumer};

