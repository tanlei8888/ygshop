import React from 'react';
import './App.scss';
import Home from './components/home/Home.js'
import Community from './components/community/Community.js'
import Cart from './components/cart/Cart.js'
import My from './components/my/My.js'
import TabBar from './components/tabBar/TabBar.js'
// import Menu from './components/menu/index'
import ProductDtail from './components/productDetail/ProductDtail'
import {HashRouter as Router ,Route , Redirect , Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' render={()=><TabBar><Home></Home></TabBar>}></Route>
          <Route exact path='/community' render={()=><TabBar><Community></Community></TabBar>}></Route>
          <Route exact path='/cart' render={()=><TabBar><Cart></Cart></TabBar>}></Route>
          <Route exact path='/my' render={()=><TabBar><My></My></TabBar>}></Route>
          <Route exact path='/productDtail/:id' component={ ProductDtail }></Route>
          <Redirect to='/'></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
