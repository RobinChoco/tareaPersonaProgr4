import React, { Component } from 'react';
import './personaReact.css'

class personaReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personas: [],
      nombre: '',
      apellido: ''
    };
  }

  agregarPersona = () => {
    const { nombre, apellido } = this.state;
    if (nombre && apellido) {
      const nuevaPersona = {
        nombre: nombre,
        apellido: apellido,
        identificacion: Math.floor(Math.random() * 1000)
      };
      this.setState({
        personas: [...this.state.personas, nuevaPersona],
        nombre: '',
        apellido: ''
      });
    }
  }

  limpiarRegistros = () => {
    this.setState({
      personas: []
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div className='formulario'>
        <br /><br />
        <h1>Formulario Personas</h1> <br /><br />
        {/* Inputs para nombre y apellido */}
        <div className='input-container'>
            <input className='input-custom'
            name="nombre"
            value={this.state.nombre}
            onChange={this.handleChange}
            placeholder=" Nombre"
            /><br />
            <input className='input-custom'
            name="apellido"
            value={this.state.apellido}
            onChange={this.handleChange}
            placeholder=" Apellido"
            />
        </div>
        <br />
        {/* Botones para agregar persona y limpiar pantalla*/}
        <div className='button-container'>
            <button className='button-custom' onClick={this.agregarPersona}>Agregar Persona</button>
            <button className='button-custom' onClick={this.limpiarRegistros}>Limpiar Pantalla</button>
        </div>

        {/* Mostrar componentes personaReact dinámicamente */}
        {this.state.personas.map((persona, index) => (
          <div className='subrayado' key={index}>
            <br/>
            <label >Nombre: {persona.nombre}</label><br />
            <label >Apellido: {persona.apellido}</label><br />
            <label className='subrayado-texto' >Identificación: {persona.identificacion}</label><br />
            
          </div>
        ))}
      </div>
    );
  }
}

export default personaReact;
