import React, {Component} from 'react';
import Navbar from "./components/navbar"
import LeftMenu from "./components/leftmenu"
import { HashRouter, Route, Switch } from 'react-router-dom'
const Welcome   = React.lazy(() => import('./pages/welcome'));
const Showcase  = React.lazy(() => import('./pages/showcase'));

class App extends Component {
    render() {
      return  (
        <div>  
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <LeftMenu />
                    </div>
                    <div className="col-lg-9">
                      <HashRouter>
                        <Switch>
                          <Route path="/api/:sector/:size" render={props=> <Showcase {...props.match.params}/>} />
                          <Route path="/api/toplist"       render={props=> <Showcase toplist="true"/>} />
                          <Route path="/api/basket"        render={props=> <Showcase basket="true" />}/>
                          <Route>
                            <Welcome />
                          </Route>
                        </Switch>
                      </HashRouter>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default App;
