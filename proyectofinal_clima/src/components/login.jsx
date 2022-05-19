import React, { useState,useEffect} from "react";
import Weather from "./Weather";


export const useDataLogin = () => {
    const [isData, setData] = useState([]);
    useEffect(() => {
        fetch('./json/personas.json')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, []);


    return isData;
}

const Login = () => {
    let [nombre, setNombre] = useState('');
    let [contraseña, setContraseña] = useState('');
    const [validacion, setValidacion] = useState(false);
    let [ciudad,setCiudad] = useState('');
    const people = useDataLogin();
    

    const Validate = () => {

        if (people) {
            
            people.forEach(item => {
                

                if (item.nombre === nombre && item.contraseña === contraseña) {
                    setValidacion(true);
                    setCiudad(item.ciudad);
                    nombre = item.nombre;
                   ciudad = item.ciudad ;
                    contraseña = item.contraseña;
                }
            })
            return validacion;
        }
    }
    return (
        

        <div className="login">
            { validacion?
                <Weather
                nombre = {nombre}
                contraseña = {contraseña}
                ciudad = {ciudad}/>
                :
            <form>
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
            </form> }

    
        </div>
    )
}

export default Login;
