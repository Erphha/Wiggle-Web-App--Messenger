import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Registerlogin from './pages/Register-login'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/register-login" component={Registerlogin}/>
      </Switch>
    </Router>
  );
}

export default App;
