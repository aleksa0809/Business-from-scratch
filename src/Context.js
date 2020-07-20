import React, {Component} from "react"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const message = (msg)=> toast(msg) || true

class AppContextProvider extends Component {
    constructor(props){
        super(props)
        let basket = window.localStorage.getItem('basket') || '[]'
        basket = JSON.parse(basket)
        this.state = {
            counter: basket.length,
            increment: ()=> message('Added to chart') && this.setState({counter: ++this.state.counter}),
            decrement: ()=> this.state.counter && message('Removed from chart') && this.setState({counter: --this.state.counter}),
            clear: ()=> window.localStorage.setItem('basket', '[]') || this.setState({counter: 0})
        }
    }
    render() {
        return <Provider value={this.state}><ToastContainer />{this.props.children}</Provider>;
    }
}

const {Provider, Consumer} = React.createContext();
export {AppContextProvider, Consumer as AppContextConsumer};

