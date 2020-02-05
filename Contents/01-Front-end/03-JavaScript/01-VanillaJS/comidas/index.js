import {Desayuno} from "./desayuno.js";
import {Almuerzo} from "./almuerzo.js";
import {Cena} from "./cena.js";

let huevosRevueltos = new Desayuno (1000, 200, "salado");

let paella = new Almuerzo (1500, 800, "variado");

let merluza = new Cena (800, 200, "salado");

huevosRevueltos.comer();
paella.comer();
merluza.comer();