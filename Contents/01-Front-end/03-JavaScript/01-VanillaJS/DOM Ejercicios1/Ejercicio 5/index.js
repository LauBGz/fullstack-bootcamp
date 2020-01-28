const titulos_femenino = ["Girl", "Woman", "Woman", "Woman", "Woman", "Gal", "Miss", "Doctor", "Professor", "Captain", "Agent", "The", "The", "The", "Sgt.", "General"];
const adjetivos = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"];
const sustantivos = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night", "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth"];
const titulos_masculino = ["Boy", "Man", "Man", "Man", "Man", "Guy", "Mr.", "Doctor" , "El", "Professor", "Captain", "Agent", "The", "The", "The", "The", "Lord", "Sgt.", "General"] 
 
function crearNombreChica (array1, array2, array3){
    let array = [titulos_femenino, adjetivos, sustantivos];
    let string = "";
        for (let i = 0; i < array.length; i++) {
            let num = Math.floor((Math.random()*array[i].length));
            let name = array[i][num];
            string += name+" ";
        }
    document.querySelector("body > div > div").innerHTML = `<p>${string}</p>`;
}

function crearNombreChico (array1, array2, array3){
  let array = [titulos_masculino, adjetivos, sustantivos];
  let string = "";
      for (let i = 0; i < array.length; i++) {
          let num = Math.floor((Math.random()*array[i].length));
          let name = array[i][num];
          string += name+" ";
      }
  document.querySelector("body > div > div").innerHTML = `<p>${string}</p>`;
}

document.querySelector('body > div > button:nth-child(2)').addEventListener('click',crearNombreChica);
document.querySelector('body > div > button:nth-child(3)').addEventListener('click',crearNombreChico);