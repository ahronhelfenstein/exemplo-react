import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/dashboard';
import FormularioCadastro from './components/formulario-cadastro/formulario-cadastro';
import Navbar from './components/navbar/navbar';
import { Switch, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="primary-layout">
      <Navbar/>
       <main>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/cadastrar"  component={FormularioCadastro} />
        <Redirect to="/" />
      </Switch>
    </main>
  </div>
    );
  }
}

export default App;
