import React,{useState,useEffect}from "react";




const Weather = (props)=>{
   console.log(props);
   const nombre = props.nombre;
   const ciudad = props.ciudad;
   const pais = props.pais;
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`




   
    return(
        
        <div className="Weather">
            <h1>{nombre}</h1>
            <h2>{ciudad}</h2>


        </div>
    )
}

export default Weather;

