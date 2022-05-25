import { useState,useEffect} from "react";
//hook que permite obtener los datos de la persona en el login
 export const useDataLogin = () => {
    const [isData, setData] = useState([]);//lugar donde se guarda la data 
    useEffect(() => {
        fetch('./json/personas.json')//obtencion de la data
            .then((response) => response.json())
            .then((data) => {
                setData(data);//cambio de estado de la variable data
            });
    }, []);


    return isData;
}

export default useDataLogin;
