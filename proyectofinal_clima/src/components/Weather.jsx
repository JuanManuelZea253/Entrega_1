import React//{useState}//{useState}
 from "react"


const Weather = (props)=>{
    console.log(props);
   //const nombre = props.nombre;
   //const ciudad = props.ciudad;
   let contraseña = props.contraseña;
   
    return(
        <div className="Wether">
            <h1>that is wether</h1>
            <p>{contraseña}</p>
            


        </div>
    )
}

export default Weather;

