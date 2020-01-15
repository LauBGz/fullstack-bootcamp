/**Conversor de temperatura de Celsius a Farenheit
let fltCelsius = prompt("Inserta grados Celsius: ");

fltCelsius = parseFloat(fltCelsius);
const fltFahrenheit = (fltCelsius * 1.8) + 32

document.write(`${fltCelsius} son ${fltFahrenheit} grados Fahrenheit.`)

Conversor de temperatura de Farenheit a Celsius
let fltFahrenheit = prompt("Inserta grados Fahrenheit: ");

fltFahrenheit = parseFloat(fltFahrenheit);
const fltCelsius = (fltFahrenheit - 32) / 1.8

document.write(`${fltFahrenheit} son ${fltCelsius} grados Celsius.`)**/

/**Conversor de edad humana a perros
let fltEdadHumanos = prompt("Inserta la edad humana de tu perro: ");

fltEdadHumanos = parseFloat(fltEdadHumanos);
const fltEdadPerros = fltEdadHumanos * 7;

document.write(`Tu perro tiene ${fltEdadPerros} años en edad de perros.`)

let arrAlumnos = ["Adolfo", "Sergio", "Diego", "Laura", "Ernesto", "Leonardo", "Alejandro","Samuel", "Alex", "Miguel"]

let intNumAlumno = prompt("Inserta un número: ");

strNombreAlumno= arrAlumnos[intNumAlumno];

document.write(`El alumno que se sienta en esa posición es ${strNombreAlumno}.`)

let arrAlumnos = [{'nombre': "Adolfo", 'Edad': 30}, 
            {'nombre':  "Sergio", 'Edad': 31}, 
            {'nombre':  "Diego", 'Edad': 44}, 
            {'nombre':  "Laura", 'Edad': "Deconocida"}, 
            {'nombre':  "Ernesto", 'Edad':"36"}, 
            {'nombre':  "Leonardo", 'Edad': "Desconocida"},
            {'nombre':  "Alex", 'Edad': 30} ,
            {'nombre':  "Samuel", 'Edad': 31}, 
            {'nombre':  "Alejandro", 'Edad': 44}, 
            {'nombre':  "Miguel",'Edad':"Desconocida"}]

let intNumAlumno = prompt("Inserta un número: ");

objAlumno= arrAlumnos[intNumAlumno];
            
document.write(`Datos del alumno que se sienta en esa posición: NOMBRE ${objAlumno.nombre} - EDAD ${objAlumno.Edad}.`)**/

let arrLarge = [{"name":"Spain",
            "topLevelDomain":[".es"],
            "alpha2Code":"ES",
            "alpha3Code":"ESP",
            "callingCodes":["34"],
            "capital":"Madrid",
            "altSpellings":["ES","Kingdom of Spain","Reino deEspaña"],
            "region":"Europe",
            "subregion":"SouthernEurope",
            "population":46438422,
            "latlng":[40.0,-4.0],
            "demonym":"Spanish",
            "area":505992.0,
            "gini":34.7,
            "timezones":["UTC","UTC+01:00"],
            "borders":["AND","FRA","GIB","PRT","MAR"],
            "nativeName":"España",
            "numericCode":"724",
            "currencies":[{"code":"EUR","name":"Euro","symbol":"€"}],
            "languages":[{"iso639_1":"es","iso639_2":"spa","name":"Spanish","nativeName":"Español"}],
            "translations":{"de":"Spanien","es":"España","fr":"Espagne","ja":"スペイン","it":"Spagna","br":"Espanha","pt":"Espanha","nl":"Spanje","hr":"Španjolska","fa":"اسپانیا"},
            "flag":"https://restcountries.eu/data/esp.svg",
            "regionalBlocs":[{"acronym":"EU","name":"European Union","otherAcronyms":[],"otherNames":[]}],"cioc":"ESP"}]
            
let strCallingCode = arrLarge[0].callingCodes[0];
let strRegion = arrLarge[0].region;
let intPopulation = arrLarge[0].population;
            
document.write(` Calling code: ${strCallingCode} - Region: ${strRegion} - Population: ${intPopulation} `)

