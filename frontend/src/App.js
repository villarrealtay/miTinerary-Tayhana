import React from 'react';
import './App.css'
import Home from './pages/Home.js'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Cities from './pages/Cities.js'
import Formulario from './pages/Formulario'


class App extends React.Component {
    render() {

      return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Cities" component={Cities} />
            <Route path="/Formulario" component={Formulario} />
            <Redirect to="/" />
        </Switch>
        </BrowserRouter>
        
      )
    }
}

export default App;
