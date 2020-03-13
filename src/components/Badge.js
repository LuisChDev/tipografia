import React from 'react';

import logo from '../static/logo.png';

import "./styles/style.css";

class Badge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: 1,
        };
    }

    render() {
        return (
            <div>
              <img src={logo}/>
              en progreso
            </div>
        );
    }
}

export default Badge;
