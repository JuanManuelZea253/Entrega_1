import { useState,useEffect} from "react";

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

export default useDataLogin;
