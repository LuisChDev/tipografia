import React from 'react';
import ReactDOM from 'react-dom';
import zxcvbn from 'zxcvbn';

// estilo
import "./styles/index.css";

// assets
import check from "./static/checkmark.png";
import cross from "./static/Xsymbol.png";


class PasswordMeter extends React.Component {
    render() {
        const { pass } = this.props;
        const result = pass === null ? 0 : zxcvbn(pass);
        let label = "Débil";
        switch (result.score) {
        case 0:
            label = "Muy Débil";
            break;
        case 1:
            label = "Débil";
            break;
        case 2:
            label = "Regular";
            break;
        case 3:
            label = "Buena";
            break;
        case 4:
            label = "Fuerte";
            break;
        default:
            label = "Muy Débil";
            break;
        }

        return (
            <div className="password-meter">
              <progress value={result.score} max={4}/>
              <p>{label}</p>
            </div>
        );
    }
}

class PassMatch extends React.Component {
    render() {
        const {pass, confPass} = this.props;
        const texto = pass === confPass
            ? "Las contraseñas coinciden."
            : "Las contraseñas no coinciden.";
        const icono = pass === confPass
              ? check
              : cross;
        const alttext = pass === confPass
              ? "check"
              : "cross";
        return (
            <div className="pass-match">
              <img className="icon" alt={alttext + "mark symbol"} src={icono}/>
              {texto}
            </div>
        );
    }
}

class FancyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre1: null,
            nombre2: null,
            apellido1: null,
            apellido2: null,
            contrasena1: "",
            contrasena2: "",
            tipoId: null,
            identificacion: null,
        };
        this.actualizar = this.actualizar.bind(this);
    }

    actualizar(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }


    render() {
        return (
            <div id="base" className="container">
              <div id="form-header">
                <h1 className="title">Contáctenos</h1>
                <p>
                  Su opinión es muy importante para nosotros.
                </p>
              </div>
              <form action="/" method="POST">

                <div className="entrada-formulario">
                  <label className="etiqueta" htmlFor="nombre1">
                    Nombre
                  </label>
                  <input placeholder="nombre"
                         className="casilla-formulario" name="nombre1"
                         value={this.state.nombre1} id="nombre1" type="text"
                         onChange={this.actualizar}/>
                </div>

                <div className="entrada-formulario">
                  <label className="etiqueta" htmlFor="nombre2">
                    Segundo nombre
                  </label>
                  <input placeholder="segundo nombre"
                         className="casilla-formulario"
                         id="nombre2" type="text"
                         name="nombre2"
                         value={this.state.nombre2}
                         onChange={this.actualizar}/>
                </div>

                <div className="entrada-formulario">
                  <label className="etiqueta" htmlFor="apellido1">
                    Apellido
                  </label>
                  <input placeholder="apellido"
                         className="casilla-formulario"
                         id="apellido1" name="apellido1" type="text"
                         value={this.state.apellido1}
                         onChange={this.actualizar}/>
                </div>

                <div className="entrada-formulario">
                  <label className="etiqueta" htmlFor="apellido2">
                    Segundo Apellido
                  </label>
                  <input placeholder="segundo apellido"
                         className="casilla-formulario"
                         id="apellido2" name="apellido2" type="text"
                         value={this.state.apellido2}
                         onChange={this.actualizar}/>
                </div>

                <div className="entrada-formulario">
                  <label className="etiqueta" htmlFor="password">
                    Contraseña
                  </label>
                  <input className="casilla-formulario" id="password"
                         name="contrasena1" type="password"
                         value={this.state.contrasena1}
                         onChange={this.actualizar}/>
                </div>

                <PasswordMeter pass={this.state.contrasena1}/>

                <div className="entrada-formulario">
                  <label className="etiqueta" htmlFor="password-conf">
                    Confirmar contraseña
                  </label>
                  <input className="casilla-formulario"
                         id="password-conf" name="contrasena2"
                         type="password" value={this.state.contrasena2}
                         onChange={this.actualizar}/>
                </div>

                <PassMatch pass={this.state.contrasena1}
                           confPass={this.state.contrasena2}/>

                <div className="entrada-formulario">
                  <label className="etiqueta" htmlFor="tipo-id">
                    Tipo de identificación
                  </label>
                  <input id="tipo-id-cc" name="tipo-id" type="radio"
                         value="C.C." onChange={this.actualizar}/>
                  <label htmlFor="tipo-id-cc">C.C.</label>
                  <input id="tipo-id-ti"name="tipo-id" type="radio"
                         value="T.I." onChange={this.actualizar}/>
                  <label htmlFor="tipo-id-ti">T.I.</label>
                  <input id="tipo-id-ce" name="tipo-id" type="radio"
                         value="C.E." onChange={this.actualizar}/>
                  <label htmlFor="tipo-id-ce">C.E.</label>
                </div>

                <div className="entrada-formulario">
                  <label className="etiqueta" htmlFor="identificacion">
                    # de identificación
                  </label>
                  <input id="identificacion" name="identificacion"
                         type="text" placeholder="identificación"
                         className="casilla-formulario"
                         value={this.state.identificacion}
                         onChange={this.actualizar}/>
                </div>

                <input id="enviar-formulario" type="submit"
                       value="Enviar"/>

              </form>
            </div>
        );
    }
}

function App() { return ( <div> <FancyForm /> </div> ); }

ReactDOM.render(<App />, document.getElementById('root'));
