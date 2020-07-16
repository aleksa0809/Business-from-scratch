import React, {Component} from 'react';
import Navbar from "./components/navbar"
import LeftMenu from "./components/leftmenu"
import { HashRouter, Route, Switch } from 'react-router-dom'
const Welcome   = React.lazy(() => import('./pages/welcome'));

class App extends Component {
    render() {
      return  (
        <div>  
            <Navbar />
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <LeftMenu />
                    </div>
                    <div class="col-lg-9">
                      <HashRouter>
                        <Switch>
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
