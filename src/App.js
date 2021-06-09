import Work from './components/work'
import About from './components/aboutus'
import Home from './components/home'
import MyStocks from './components/mystocks'
import Login from './components/Login'
import Register from './components/Register'
import NavBar from './components/Navbar'
import { Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div>


      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/MyStocks" exact component={MyStocks} />
      <Route path="/Work" exact component={Work} />
      <Route path="/Home" exact component={Home} />
      <Route path="/AboutUs" exact component={About} />
      <Route path="/Login" exact component={Login} />
      <Route path="/Register" exact component={Register} />
    </div>
  );
}

export default App;
