import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';

import Home from './routes/Home';
import Result from './routes/Result';
import TopMenu from './components/TopMenu';

function App() {
  return( 
    <HashRouter>
      <GlobalStyle/>
      <TopMenu/>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/result" component={Result}/>
    </HashRouter>
  );
}

export default App;