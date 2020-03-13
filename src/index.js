import React from 'react';
import ReactDOM from 'react-dom';

// componentes
import Badge from './components/Badge.js';
import Flyer from './flyer.js';

// estilo
import "./styles/index.css";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    agregar(num) {
        this.setState({
            value: this.state.value + num,
        });
    }

    render() {
        return (
            <div id="caja-con-botones" className="item">
              <button onClick={() => this.agregar(-1)}
                      className="item">-1</button>
              <div className="item counterVal">{this.state.value}</div>
              <button onClick={() => this.agregar(1)}
                      className="item">+1</button>
            </div>
        );
    }
}

function App() {
    return (
        <div>
          {/* <h1 style={{color: "blue"}}>mi página web!</h1> */}
          {/* <Counter /> */}
          {/* <Badge /> */}
          <Flyer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

// const elem = document.createElement('h2');
// elem.innerText = "fuera de React";
// document.getElementById('root').appendChild(elem);


// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
