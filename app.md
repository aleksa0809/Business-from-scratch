# Creating React SPA for online shop

First of all, it is needed to choose a css-framework for web page appearence. The bootstrap 4.7 is used for this perpous. The changes of `app.html`:

```
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    ...
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
```

The next step is creating of a structure of the page. There are `Navbar` and `LeftMenu` components on the top and left sides on page respectively:

```
<div>  
    <Navbar />
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <LeftMenu />
            </div>
            <div class="col-lg-9">
                <p>Here will be pages.</p>
            </div>
        </div>
    </div>
</div>
```

Now it's time to add some router to the main part of page. There is also a `Welcome` space, that appears on the central part of page:

```
yarn add react-router-dom
```

```
import { HashRouter, Route, Switch } from 'react-router-dom'
const Welcome   = React.lazy(() => import('./pages/welcome'));
...
<div class="col-lg-9">
  <HashRouter>
    <Switch>
      <Route>
        <Welcome />
      </Route>
    </Switch>
  </HashRouter>
</div>
```

For controlling the state of application there is `Context` component, that can provide some common variables and objects for all others components of the application. There is `react-tostify` :

```
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
```

The next step is to organize a showcase - a presentation of goods, that is provided by the online shop. A user should have an abilities to view goods, to choose them into personal basket, to view the basket.

The appearence of goods must look identically on all pages, so, only one component is used for showing items - the `Showcase` component. Its look changes depending of parameters (conditional rendering). They present in links of `LeftMenu` component and are transported via the `HashRouter`^:

```
  <HashRouter>
    <Switch>
      <Route path="/api/showcase" render={props=> <Showcase {...props.match.params} />} />
      <Route path="/api/basket" render={props=> <Showcase {...props.match.params} basket="true" />}/>
      <Route>
        <Welcome />
      </Route>
    </Switch>
  </HashRouter>
```

and then


```
export default function Showcase(props) {
  const {basket} = props
  const header = basket && 'Your basket' || 'Our showcase'
  return (
     <div className="av-page">
         <h1>{header}</h1>
     </div>
  )
}
```

Goods of online shop should be presented as cards with description, proce, image etc. These cards are designed as a separate component. As cards appear on pages dynamically, they will be formed with help of `AppContextProvider` component. If property `basket` is set to true, cards are parsed from localStorage, if not - from "database" stub, that is imported into the `Context` component as a simple array.
```
import data from './data'
...
let basket = window.localStorage.getItem('basket') || '[]'
basket = JSON.parse(basket)
...
class AppContextProvider extends Component {
    ...
    this.state = {
        counter: basket.length,
        getShowcase: (isBasket)=> {
            return isBasket && basket || data;
        }
    }
    ...
}
```

```
<AppContextConsumer>
    {context=> { 
     ...
     const items = []  
     for(const card of context.getShowcase(props.basket)) {
         items.push(<Card image={card.picture && "/images/"+card.picture || "http://placehold.it/700x400"} {...card} basket={!!basket}/>)
     }
     ...
     return (
         <div className="av-page">
             <h1>{header}</h1>
             <div class="row">
                 {items}
             </div>
         </div>
    )}
   }
</AppContextConsumer>

```

There is the `BasketCount` component, thet reflects the count of itens in users basket. This component reacts on adding items to basket or removing them.

```
    <AppContextConsumer>
      {context=> 
          (<ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <a className="nav-link av-basket-count" href="#/api/query/basket">Your shopping cart ({context.basketCount} items)</a>
              </li>
          </ul>)
      }
    </AppContextConsumer>
```

The `Context` component contains a counter, and method for changing the basket. Each `Card` component of `Showcase` component contains a button for adding/removing items:

```
    <AppContextConsumer>
        {context=> 
            <button onClick={e=> context.changeBasket(props)}>{getButtonText(props.basket)}</button>
        }
    </AppContextConsumer>
```

```
    this.state = {
        basketCount: basket.length,
        getShowcase: (isBasket)=> {
            return isBasket && basket || data;
        },
        changeBasket: (card)=> {
            const isBasket = card.basket
            if(isBasket && !this.state.basketCount) return
            this.setState({basketCount: isBasket && --this.state.basketCount || ++this.state.basketCount})
            toast('The state of your basket is changed')
        }
    }
```

## Client-server online-shop application

The target of the project is creating an online-shop, so a separate unit for storing data (goods descriptions) is needed there. It should be a server that works on REST-principles. For the first time there is simple one, that processes data from plain `data.json` file. It can process CORS-requests and receives requests with urls, that contain parameters `:sector/:size/:color`. `Sector` is a caterory of goods (lux or casual). Size is size of lingery, color is color. The server filters data according with REST parameters and returns json-responses to a browser. Server can also separate goods belonged to the toplist category. 

The command to run the server is `node index`. It must be executed in the `./server` folder. The running server is listen on port 3001.

The router of application now gets more options:  the content of the Showcase component can be changed according with parameters of a route (sector, size, color):

```
      <Route path="/api/:sector/:size" render={props=> <Showcase {...props.match.params}/>} />
      <Route path="/api/toplist" render={props=> <Showcase toplist="true"/>} />
      <Route path="/api/basket"  render={props=> <Showcase basket="true" />}/>
```

The LeftMenu component is also be changed:

```
      <a href="#/api/toplist" class="list-group-item">Top List</a>
      <a href="#/api/casual/regular" class="list-group-item">Casual regular</a>
      <a href="#/api/casual/large" class="list-group-item">Casual large</a>
      <a href="#/api/lux/regular" class="list-group-item">Lux reguar</a>
      <a href="#/api/lux/large" class="list-group-item">Lux large</a>
```

So, now the Showcase component can reflect toplist, basket or user's choice according with sector, size and color parameters (the last one will be realized in a next versions of the software).








