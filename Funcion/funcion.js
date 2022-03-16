let nombreCancion = "cancion";
let activador  = false;

const Cancion = (nombreCancion, activador) => {
    let Canciones = ["cancioncita", "tema", "notema"];
        
            if (nombreCancion != "" && activador == true){
                Canciones.push(nombreCancion);
            }else if(activador == false){
                Canciones.pop();
            }
        
    return Canciones;
}
console.log(Cancion(nombreCancion,activador));