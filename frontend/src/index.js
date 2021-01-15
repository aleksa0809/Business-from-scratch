import ReactDOM from 'react-dom'
import {Provider} from './components/BasketContext'
import App from './App'

ReactDOM.render( <Provider><App /></Provider> , document.querySelector('main'))
