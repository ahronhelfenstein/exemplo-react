import React from 'react'
import ReactDOM from 'react-dom';
import HelloClass from './hello/hello'
import Drop from './drop/drop'

function Hello(props) {
    return <h1>Hello, {props.name}</h1>;
}

function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('tick'));
  }

export default function Exemplo() {
    return <div>
        <Hello name="Ahron"/>
        <HelloClass name="Ahron"/>
        <Drop/>
        {setInterval(tick, 1000)}
        <div id="tick"></div>
    </div >
}