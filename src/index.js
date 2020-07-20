import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import {AppContextProvider}  from './Context';
import App from './App';
import Loader from './components/loader';
import * as serviceWorker  from './serviceWorker';

ReactDOM.render(
    <Suspense fallback={<Loader />}>
      <React.StrictMode>
        <AppContextProvider>
            <App />
        </AppContextProvider>
      </React.StrictMode>
    </Suspense>,
  document.getElementById('root')
)

serviceWorker.unregister();
