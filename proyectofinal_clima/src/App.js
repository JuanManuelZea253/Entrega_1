
import dataLogin from "./components/dataLogin";
import Weather from "./components/Weather";
import React, { useState } from 'react';
import './App.css';



function App() {
  let [nombre, setNombre] = useState('');
  let [contraseña, setContraseña] = useState('');
  const [validacion, setValidacion] = useState(false);//variable bandera para activar el onclick del botton login
  let [ciudad, setCiudad] = useState('');
  let [pais, setPais] = useState('')
  const people = dataLogin();

  //validacion e ingreso de datos desde el json
  const Validate = () => {

    if (people) {

      people.forEach(item => {
        if (item.nombre === nombre && item.contraseña === contraseña) {
          setValidacion(true);//manejo del estado variable validacion
          setCiudad(item.ciudad);
          setPais(item.pais);
          nombre = item.nombre;
          contraseña = item.contraseña
          ciudad = item.ciudad;
          pais = item.pais
        }
      })
      return validacion;
    }
  }
  return (
    <div className="App">

      {validacion ?
        /* Validacion de la variable estado validate */
        <Weather
          nombre={nombre}
          pais={pais}
          ciudad={ciudad} />
        :
        <div className="login">
          <h1>Climatch</h1>

          <form id="formLogin">
            <li>

              <input
                id="inputs"
                type="text"
                placeholder="Nombre"
                onChange={ev => setNombre(ev.target.value)}/* ingreso de nombre */
                value={nombre}
              />
            </li>
            <li>
              <input
                id="inputs"
                type="password"
                placeholder="Contraseña"
                onChange={ev => setContraseña(ev.target.value)}/* ingreso de contraseña */
                value={contraseña}
              />
            </li><br />

            <button

              type="submit"
              onClick={Validate}/* Evento de activación funcion validate*/
            >ingresar
            </button>
          </form>
        </div>
      }

    </div>
  );
}

export default App;
