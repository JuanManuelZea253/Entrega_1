import React,{useState,useEffect} from "react";
//import personas from "./src/personas";

const useData = () =>{
    const [isPersonas, setPersonas] = useState([]);

        useEffect( () =>{
            fetch('./personas.json')
            .then ((response)=>response.json())
            .then ((personas) =>{
                setPersonas(personas);
                
             
            })
           

        },[])

        
       return isPersonas;
}

const Login= ()=>{
    const [nombre, setNombre] = useState('');
    const [contraseña, setContraseña] = useState('');

    const people  = useData();
   console.log(people[0]);
 



 
    return (
       <div className="login">
           {people.map(item =>(
               <li key={item.id}>
                   <p>{item.nombre}</p>
               </li>)
           )}
       
           
           <form>
               <input 
               type="text"
               placeholder="Nombre"
               onChange= {ev => setNombre(ev.target.value)}
               value={nombre}
               />
                <input 
               type="text"
               placeholder="Contraseña"
               onChange= {ev => setContraseña(ev.target.value)}
               value={contraseña}
               />

               

           
           </form>

       </div> 
    )
}

export default Login;