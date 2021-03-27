import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from './routes/Home';
import Result from './routes/Result';

function App() {
  return( 
    <HashRouter>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/result" component={Result}/>
    </HashRouter>
  );
}

export default App;