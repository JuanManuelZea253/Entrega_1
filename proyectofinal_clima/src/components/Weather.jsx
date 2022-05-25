import { SECONDKEY } from "./../apiKei";
import React, { useState, useEffect } from 'react';
import './../Weather.css'




const weatherImages = require.context('./../assets', true);//evento del webpack realiza la obtencion de el path de la imagen 
const Weather = (props) => {
    //props: paso de datos desde el login
    const [paisSearch, setPaisSearch] = useState('');//variables de obtencion para la url de la api
    const [ciudadSearch, setCiudadSearch] = useState('');//variables de obtencion para la url de la api
    const [validacion, setValidacion] = useState(false);
    let chooseImg;//variable de imagenes
    const [temp, setTemp] = useState('');
    const [humidity, setHumidity] = useState('');
    const [maxTemp, setMaxTemp] = useState('');
    const [minTemp, setMinTemp] = useState('');

    //Evento para evitar el cargado de pagina al ejecutar la obtencion de data
    const handle = (e) => {
        e.preventDefault();
    }

    const SearchWeather = () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadSearch},${paisSearch}&appid=${SECONDKEY}&units=metric`;
        const [data, setData] = useState([]);

        useEffect(() => {
            //obtencion de data de la api y su json
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setData(data.main);
                });

        }, [url])//se pone por cambiar constantemente los requisitos de la url


        return data;
    }
    const apiContent = SearchWeather();//activacion y obtencion de la data


    //funcion de validacion y guardado de la data para trabajar con ella
    const validate = () => {

        if (apiContent) {
            setValidacion(true);
            setTemp(apiContent.temp);
            setHumidity(apiContent.humidity);
            setMaxTemp(apiContent.temp_max);
            setMinTemp(apiContent.temp_min);
        }
        return validacion
    }
    //funcion para limpiar los datos renderizados sin tener que recargar
    const clearButton = () => {
        setTemp('');
        setHumidity('');
        setMaxTemp('');
        setMinTemp('');
        setValidacion(false);
        return validacion;
    }
    // variables de nombres de imagenes
    let tempParse = parseInt(temp);//parseado para capear la temperatura y poner las imagenes
    let cold = weatherImages('./cold.jpg');
    let sun = weatherImages('./sun.jpg');
    let montañas = weatherImages('./forest.jpg');
    //capeado y asignacion de imagenes
    if (tempParse > 20) {
        chooseImg = sun;
    } else if (tempParse < 20) {
        chooseImg = cold;
    } else if (temp === '') {
        chooseImg = montañas;
    }








    return (

        <div className="Weather" >
            <div className="forecast"/* contenedor de data */ >
                <img src={chooseImg} alt="imagen del clima" width="100px" />

                <div className="textoEncima" /*contenedor de colapsadod e imagen*/>

                    <div className="textoWeather">
                        {validacion ?
                            /*Validacion de la funcion validate */
                            <p>
                                <h1>Pronostico</h1>
                                <h2>{ciudadSearch}</h2>
                                <ul>
                                    <li>Temperatura: {temp}ºC</li>
                                    <li>Humedad: {humidity}%</li>
                                    <li>Maxima temperatura: {maxTemp}ºC</li>
                                    <li>Minima temperatura: {minTemp}ºC</li>
                                </ul></p>
                            :
                            <h1>Pronostico</h1>}</div>
                    <div className="textoPersona" /* contenedor datos recibidos por props*/>
                        <li><h1>{props.nombre}</h1></li>
                        <li><h3>{props.pais}</h3></li>
                        <li>{props.ciudad}</li>

                    </div>
                </div>
            </div>

            <div className="weatherSearch" /* contenedor de formulario de busqueda*/>

                <form id="formSearch" onSubmit={handle}/*activacion funcion para no cargar pagina */>

                    <li>
                        <input
                            id="inputs"
                            type="text"
                            onChange={e => { setCiudadSearch(e.target.value) }}

                            /*envio de datos para hacer la request en la api y cambiar la url */

                            placeholder="Buscar ciudad" /></li>
                    <li>
                        <input
                            id="inputs"
                            type="text"
                            onChange={e => { setPaisSearch(e.target.value) }}
                            placeholder="Buscar Paìs" /></li>
                    <button id="weatherButton" type="submit" onClick={validate}
                     /*activacion de
                      la funcion validate */>search</button>
                    <button id="weatherButton" type="reset" onClick={clearButton}
                     /* activacion de la funcion
                      para limpiar data*/>clean</button>

                </form>



            </div>


        </div>
    )
}

export default Weather;

