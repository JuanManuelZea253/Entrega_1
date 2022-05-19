import React//{useState}
from "react";



const Weather = (props)=>{
   
    console.log(props);
   const nombre = props.nombre;
   const ciudad = props.ciudad;
 //  let contraseña = props.contraseña;



   
    return(
        
        <div className="Weather">
            <h1>{nombre}</h1>
            <h2>{ciudad}</h2>


        </div>
    )
}

export default Weather;

