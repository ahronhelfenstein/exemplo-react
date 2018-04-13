import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Dashboard from './components/dashboard/dashboard';
import FormularioCadastro from './components/formulario-cadastro/formulario-cadastro';
import Exemplo from './components/exemplos/exemplos';
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
        <Route path="/exemplo"  component={Exemplo} />
        <Redirect to="/" />
      </Switch>
    </main>
  </div>
    );
  }
}

export default App;
