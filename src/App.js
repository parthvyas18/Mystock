import Work from './components/work'
import About from './components/aboutus'
import Home from './components/home'
import MyStocks from './components/mystocks'
import NavBar from './components/Navbar'
import { Route } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div>


      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/mystocks" exact component={MyStocks} />
      <Route path="/work" exact component={Work} />
      <Route path="/home" exact component={Home} />
      <Route path="/aboutus" exact component={About} />


    </div>
  );
}

export default App;
