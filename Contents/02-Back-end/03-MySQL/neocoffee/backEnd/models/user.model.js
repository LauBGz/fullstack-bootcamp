const mysql =  require('mysql');
const fs = require('fs');
const path = require('path');

//Forma de crear una ruta absoluta sin limitarlo a un ordenador concreto
const absolutePath = path.join(__dirname.replace('models', ''), '/config/secret.json');

const secretsContent = fs.readFileSync(absolutePath);//Tiene que ser sync
secrets = JSON.parse(secretsContent);

//Añadir la conexión: crear una variable que tendrá la conexión con la base de datos
// mysql.createConnection: tb vale
// mysql.createPool: se crea una colección de varias conexiones 
const connection =  mysql.createPool({
    //Le tenemos que decir a donde conectarse, la configuracion
    "host": secrets["mysql_host"],
    "user": secrets["mysql_username"],
    "password": secrets["mysql_password"]
});

//Funcion sacar datos usuario
exports.getUserById = (id, callback) => {
    connection.query(`SELECT * FROM neocoffee.user WHERE ID = ${id};`,
    callback);
}

//Funcion crear usuario
exports.createNewUser = (
    username, 
    password,
    firstName,
    secondName,
    fechaInscripcion,
    email, callback) =>{
        connection.query(`
        INSERT INTO neocoffee.user (UserName, Password, FirstName, SecondName, SignUpDate, Email)
        VALUES ("${username}", "${password}", "${firstName}", "${secondName}", ${fechaInscripcion}, "${email}")`, 
        callback);
}


