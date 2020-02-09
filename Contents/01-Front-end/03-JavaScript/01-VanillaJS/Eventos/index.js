// function saludar(event){
//     event.preventDefault();
//     alert("Bienvenido.");
// }

// document.querySelector('body > button').addEventListener('click',saludar);

//calcular la suma de 2 números (la propia función pregunta al usuario y muestra con un alert. 

// function sumar(){
//     let num1 = parseInt(prompt("Inserta primer número:"));
//     let num2 = parseInt (prompt("Inserta segundo número:"));
//     let suma = num1 + num2;
//     alert(suma);

// }

// document.querySelector('button').addEventListener('click',sumar);

//Funcion nombre solo cuando se pulse el boton

// const titulos_femenino = ["Girl", "Woman", "Woman", "Woman", "Woman", "Gal", "Miss", "Doctor", "Professor", "Captain", "Agent", "The", "The", "The", "Sgt.", "General"];
// const adjetivos = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"];
// const sustantivos = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night", "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth"];

// function crearNombre (array1, array2, array3){
//     let array = [array1, array2, array3];
//     let string = "";
//         for (let i = 0; i < array.length; i++) {
//             let num = Math.floor((Math.random()*array[i].length));
//             let name = array[i][num];
//             string += name+" ";
//         }
//     return string;
// }

// function handler(event){
//    let resultado = crearNombre(titulos_femenino, adjetivos, sustantivos);
//    document.write(resultado);

// }

// document.querySelector('button').addEventListener('click',handler);

                // const titulos_femenino = ["Girl", "Woman", "Woman", "Woman", "Woman", "Gal", "Miss", "Doctor", "Professor", "Captain", "Agent", "The", "The", "The", "Sgt.", "General"];
                // const adjetivos = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"];
                // const sustantivos = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night", "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth"];
                // const titulos_masculino = ["Boy", "Man", "Man", "Man", "Man", "Guy", "Mr.", "Doctor" , "El", "Professor", "Captain", "Agent", "The", "The", "The", "The", "Lord", "Sgt.", "General"] 
                
                // function crearNombre (array1, array2, array3){
                //     let array = [array1, array2, array3];
                //     let string = "";
                //         for (let i = 0; i < array.length; i++) {
                //             let num = Math.floor((Math.random()*array[i].length));
                //             let name = array[i][num];
                //             string += name+" ";
                //         }
                //     return string;
                // }

                // function handler(event){
                //     let letra = event.key;
                //     let resultado;
                //     if (letra === "f" || letra === "F"){
                //         resultado = crearNombre(titulos_femenino, adjetivos, sustantivos);
                //         document.write(resultado);
                
                //     }
                //     if (letra === "m" || letra === "M"){
                //         resultado = crearNombre(titulos_masculino, adjetivos, sustantivos);
                //         document.write(resultado);
                //     }
                // }

                // document.querySelector('body').addEventListener('keypress',handler);

// const titulos_femenino = ["Girl", "Woman", "Woman", "Woman", "Woman", "Gal", "Miss", "Doctor", "Professor", "Captain", "Agent", "The", "The", "The", "Sgt.", "General"];
// const adjetivos = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"];
// const sustantivos = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night", "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth"];
// const titulos_masculino = ["Boy", "Man", "Man", "Man", "Man", "Guy", "Mr.", "Doctor" , "El", "Professor", "Captain", "Agent", "The", "The", "The", "The", "Lord", "Sgt.", "General"] 
 
// function crearNombre (array1, array2, array3){
//     let array = [array1, array2, array3];
//     let string = "";
//         for (let i = 0; i < array.length; i++) {
//             let num = Math.floor((Math.random()*array[i].length));
//             let name = array[i][num];
//             string += name+" ";
//         }
//     return string;
// }

// function handler(event){
//     let letra = event.key;
//     let resultado;
//     if (letra === "f" || letra === "F"){
//         resultado = crearNombre(titulos_femenino, adjetivos, sustantivos);
//         document.write(resultado);
  
//     }
//     if (letra === "m" || letra === "M"){
//         resultado = crearNombre(titulos_masculino, adjetivos, sustantivos);
//         document.write(resultado);
//     }
// }

// document.querySelector('body').addEventListener('keypress',handler);

// let keypressed = event.key;  //outputting the result to the console
//   console.log("The unicode value is: " + keypressed);

// function getNumber1(event){
//     let num1 = event.key;
//     console.log(num1, num2, num3);  
// }

// document.querySelector('#task').addEventListener('keypress',getNumber1);

// function operation(event){
//     document.getElementById("task").value = "";
    
// }

// document.querySelector('#add').addEventListener('click',operation);

let array = []; 

function addToArray(event){
    let tarea = document.getElementById("task").value;
    console.log(tarea);
    array.push(tarea);
    document.getElementById("task").value = "";
}

document.querySelector('#add').addEventListener('click',addToArray);

function clearArray(event){
    array = [];     
    document.getElementById("listado").innerHTML="";
}

document.querySelector('#clear').addEventListener('click',clearArray);

function showArray(event){
    for(let i = 0; i < array.length; i++){
        let node = document.createElement("li");              
        let textnode = document.createTextNode(array[i]);       
        node.appendChild(textnode);                             
        document.getElementById("listado").appendChild(node);    

    }  
}

document.querySelector('#show').addEventListener('click',showArray);






































