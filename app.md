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


