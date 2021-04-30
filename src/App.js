import React    from 'react'
import About    from './pages/about'
import Contact  from './pages/contact'
import MainComponent     from './pages/main'
import './App.css'

import {BrowserRouter as Router, Switch, Route,
  } from "react-router-dom";


function App() {
  return (
    <Router>
        <main>
            <Switch>
                <Route path="/about"    component={About} />
                <Route path="/contact"  component={Contact} />
                <Route path="/"         component={MainComponent}/>
            </Switch>
        </main>
    </Router>
  )
}

export default App;
