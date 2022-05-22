
import dataLogin from  "./components/dataLogin";
import Weather from "./components/Weather";
import React,{useState}from 'react'
import './App.css';


function App() {
  let [nombre, setNombre] = useState('');
    let [contraseña, setContraseña] = useState('');
    const [validacion, setValidacion] = useState(false);
    let [ciudad,setCiudad] = useState('');
    let[pais,setPais]=useState('')
    const people = dataLogin();


  const Validate = () => {

    if (people) {

      people.forEach(item => {
        if (item.nombre === nombre && item.contraseña === contraseña) {
          setValidacion(true);
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
    {validacion?
      <Weather
        nombre={nombre}
        contraseña={contraseña}
        ciudad={ciudad}
        pais={pais}
      />:

        <form className="login">
          <input
            type="text"
            placeholder="Nombre"
            onChange={ev => setNombre(ev.target.value)}
            value={nombre}
          />
          <input
            type="password"
            placeholder="Contraseña"
            onChange={ev => setContraseña(ev.target.value)}
            value={contraseña}
          />
          <button
            type="submit"
            onClick={Validate}

          >ingresar
          </button>
        </form>}
    </div>
  );
}

export default App;
