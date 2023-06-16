
import React from 'react'
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './pages/Login';
import Orders from './pages/Orders';
import ProductConfigStage1 from './pages/ProductConfigStage1';
import ProductConfigStage2 from './pages/ProducrConfigStage2';

function App() {
  return (
   
    <Router>
    <Switch>
      <Route  path="/"  component={ Login } exact/>
      <Route  path="/orders"  component={ Orders } exact/>
      <Route  path="/config1"  component={ ProductConfigStage1 } exact/>
      <Route  path="/config2"  component={ ProductConfigStage2 } exact/>
      </Switch>
      </Router>



  );
}

export default App;
