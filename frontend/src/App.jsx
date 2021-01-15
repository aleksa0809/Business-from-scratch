import { useContext } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Navbar   from './components/Navbar'
import LeftMenu from './components/LeftMenu'
import Showcase from './components/ShowcaseErrorWrapper'
import Welcome  from './components/Welcome'
import Basket   from './components/Basket'
import Order    from './components/Order'
import Congrats from './components/Congrats'

function App(props) {

    const urlFromProps = (props, topList) => {
        const prefix = 'http://localhost:3001/api/v1/product'
        let path = ''
        if(topList) path = 'toplist'
        if(props.match){
            const {sector, size} = props.match.params
            if(sector && size) path = `${sector}/${size}`
        }
        return <Showcase url={`${prefix}/${path}`} mock={false}/>
    }

    return (
        <>
          <Navbar />
          <div className="container">

            <div className="row">

              <div className="col-lg-3">
                <h4 className="my-4">See our products:</h4>
                <LeftMenu />
              </div>

              <div className="col-lg-9">
                  <HashRouter>
                    <Switch>
                      <Route path="/:sector/:size" render={urlFromProps} />
                      <Route path="/toplist" render={props=> urlFromProps(props, true)} />
                      <Route path="/order">
                        <Order />
                      </Route>
                      <Route path="/congrats">
                        <Congrats />
                      </Route>
                      <Route path="/basket">
                        <Basket />
                      </Route>
                      <Route>
                        <Welcome />
                      </Route>
                    </Switch>
                  </HashRouter>
              </div>

            </div>
          </div>
        </>
    );
}

export default App;
