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

Goods of online shop should be presented as cards with description, proce, image etc. Tese cards is designed as a separate component:



