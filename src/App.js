
import React from 'react'
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './pages/Login';
import Orders from './pages/Orders';
import ProductConfigStage1 from './pages/ProductConfigStage1';
import ProductConfigStage2 from './pages/ProducrConfigStage2';
import ForgotPaswd from './pages/ForgotPaswd';
import OtpVerify from './pages/OtpVerify';
import Changepswd from './pages/ChangePswd';

function App() {
  return (
   
    <Router>
    <Switch>
      <Route  path="/"  component={ Login } exact/>
      <Route  path="/forgot_password"  component={ ForgotPaswd } exact/>
      <Route  path="/verify_otp"  component={ OtpVerify } exact/>
      <Route  path="/change_password"  component={ Changepswd } exact/>
      <Route  path="/orders"  component={ Orders } exact/>
      <Route  path="/config1"  component={ ProductConfigStage1 } exact/>
      <Route  path="/config2"  component={ ProductConfigStage2 } exact/>
      </Switch>
      </Router>



  );
}

export default App;
