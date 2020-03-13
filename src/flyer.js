import React, { Component } from 'react';
import './styles/flyer.css';
import beer from './static/beer.svg';

class Flyer extends Component {
    render() {
        return (
            <div id="background">

              <div id="beer-price-roundel">
                <h3 id="beer-price" className="texto">$3</h3>
                <p className="texto">
                  beers
                </p>
              </div>

              <div id="main-card">
                <div id="yellow-card">
                  <h1 className="texto">HAPPY HOUR</h1>
                  <p className="texto subtitulo">
                    EVERY WEEKEND FROM 5PM
                  </p>
                  <div id="roundel">
                    <img src={beer} id="beerpic"/>
                  </div>
                </div>
                <div id="white-strip">
                </div>
                <div id="orange-card">
                  <p className="texto" id="orange-card-text">
                    <h2>Polo's Pub</h2><br/>
                    515 Shadowmar Drive, Metairie, Luisiana
                  </p>
                </div>
              </div>
            </div>
        );
    }
}

export default Flyer;
