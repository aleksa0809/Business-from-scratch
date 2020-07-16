import React, {Component} from 'react';
import Navbar from "./components/navbar"
import LeftMenu from "./components/leftmenu"

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
                        <p>Here will be pages.</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default App;
