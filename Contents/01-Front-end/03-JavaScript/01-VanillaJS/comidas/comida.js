class Comida {
    valorAlimenticio = 0;
    cantidad = 0;
    sabor = "";

    constructor(argValorAlimenticio, argCantidad, argSabor){
        this.valorAlimenticio = argValorAlimenticio;
        this.cantidad = argCantidad;
        this.sabor = argSabor;
    }
};

export{Comida};