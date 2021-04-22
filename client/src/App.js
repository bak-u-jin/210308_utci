import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import {CookiesProvider} from 'react-cookie';

import Home from './routes/Home';
import Result from './routes/Result';
import TopMenu from './components/TopMenu';


function App() {
  return( 
    <CookiesProvider>
      <HashRouter>
        <GlobalStyle/>
        <TopMenu/>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/result" component={Result}/>
      </HashRouter>
    </CookiesProvider>
  );
}

export default App;