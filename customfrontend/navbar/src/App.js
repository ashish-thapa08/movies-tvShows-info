// import logo from './logo.svg';
// import './App.css';
import Welcomee from './home/Home';
import Navbar from './home/Navbarr';
import Artist from './home/Artist';
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Welcomee} />
        <Route exact path="/aboutus" component={Artist} />
      </Switch>
    </div>
  );
}

export default App;
