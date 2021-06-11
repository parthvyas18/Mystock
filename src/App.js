import {useState} from 'react'
import Work from './components/work'
import About from './components/aboutus'
import Home from './components/home'
import MyStocks from './components/mystocks'
import Login from './components/Login'
import Register from './components/Register'
import NavBar from './components/Navbar'
import { Route } from 'react-router-dom'
import './App.css';

const App= () => {
 
  const [user,setUser]=useState(null);
  const SetUsr = (usr) => {
      setUser(usr);
  };
  console.log(`user in login is ${user}`)
  return (
    <div>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/MyStocks">
        <MyStocks User={user}/>
      </Route>
      <Route path="/Work">
        <Work />
      </Route>
      <Route path="/Home">
        <Home />
      </Route>
      <Route path="/AboutUs">
        <About />
      </Route>
      <Route path="/Login">
        <Login onsubmit={SetUsr}/>
      </Route>
      <Route path="/Register">
        <Register onsubmit={SetUsr}/>
      </Route>
    </div>
  );
}

export default App;
