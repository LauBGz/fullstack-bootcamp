import {Comida} from "./comida.js";

class Cena extends Comida{
    comer(){
        console.log("no me ha sentado mal, pero estaba sosa");
    }
}

export{Cena};