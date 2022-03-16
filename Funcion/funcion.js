let Canciones = ["cancioncita", "tema", "notema"];
let activador  = true;
let nombre = "Temardo";

const Cancion = (Canciones, activador,nombreCancion) => {
    
        
            if (nombreCancion != "" && activador == true){
                Canciones.splice(2,0,nombreCancion);
            }else if(activador == false){
                Canciones.splice(0,1);
            }
        
    return Canciones;
}
console.log(Cancion(Canciones,activador,nombre));