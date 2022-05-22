import { SECONDKEY } from "./../apiKei";
import React, {useState,useEffect} from 'react';





const Weather = (props)=>{
   console.log(props);
   const nombre = props.nombre;
   const ciudadPersona = props.ciudad;
   const paisPersona = props.pais;
   const [paisSearch,setPaisSearch] = useState('');
   const [ciudadSearch,setCiudadSearch]=useState('');
    
   const handle= (e)=>{
    e.preventDefault();
   }

    const SearchWeather = () => {
        

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadSearch},${paisSearch}&appid=${SECONDKEY}`;
        const [data, setData] = useState({});

        useEffect(() => {

            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setData(data);
                });

        }, [url])
        console.log(data.main);
        const responseData = { name: data.name, main: data.main };


        return responseData ;

    }
    const apiContent = SearchWeather();
    console.log(apiContent);
    console.log(props.climaCaracteristicas);


   
    return(
        
        <div className="Weather" >
            <h1>{nombre}</h1>
            <h2>{ciudadPersona}</h2>
            <h2>{paisPersona}</h2>


            <div className = "weatherSearch">
                <form onSubmit={handle}>
                    <input type="text"
                     onChange={e=>{setCiudadSearch(e.target.value)}}
                     placeholder="Buscar ciudad"/>
                     <input type="text"
                     onChange={e=>{setPaisSearch(e.target.value)}}
                     placeholder="Buscar Paìs"/>
                     
                </form>
                
               
            </div>


        </div>
    )
}

export default Weather;

