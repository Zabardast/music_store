import React    from 'react'
import About    from './pages/about'
import Contact  from './pages/contact'
import Artists  from './pages/artiste'
import Album    from './pages/album'  
import MainComponent     from './pages/main'
// import './App.css'

import {BrowserRouter, Switch, Route } from "react-router-dom";

import Header from './components/header/header';
import Footer from './components/footer/footer';


export class App extends React.Component {

  constructor() {
    super()
    this.onCartChanged = this.onCartChanged.bind(this)
    this.state = {cartTotal: 0}
  }

  onCartChanged() {
    this.setState({ cartTotal: JSON.parse(localStorage.getItem("cart")).length})
  }

  render() {
    return (
      <BrowserRouter>
        <Header totalItemsInCart={this.state.cartTotal}/>
        <main>
          <Switch>
              <Route path="/about"    component={About} />
              <Route path="/contact"  component={Contact} />
              <Route path="/artists"  component={Artists}/>
              <Route path="/album"     render={ (props) =>  <Album {...props} a_onCartChanged={this.onCartChanged} />}/>
              {/* <Route path="/album/:id"    component={Album}/> */}
              <Route path="/"         component={MainComponent}/>
          </Switch>
        </main>
        <Footer/>
      </BrowserRouter>
    )
  }

}

export default App;
