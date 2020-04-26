import React from 'react';
import ReactDOM from 'react-dom';

// estilo
import "./styles/index.css";

function App() {
    return(
        <div>
          <p id="block-la" className="text-block">
            Nuestra
          </p>
          <p id="block-aventura" className="text-block">
            Aventura
          </p>
          <p id="block-apenas" className="text-block">
            Apenas
          </p>
          <p id="block-comienza" className="text-block">
            Comienza
          </p>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
