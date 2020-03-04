const fs = require('fs');
const mysql = require('mysql');
const path = require('path');

// Cargar archivo secrets
const absolutePath = path.join(__dirname.replace('models', ''), '/config/secret.json')

const secretContent = fs.readFileSync(absolutePath);
const secret = JSON.parse(secretContent);

//Conexión
var connection = mysql.createPool({
    host: secret["mysql_host"],
    user: secret["mysql_username"],
    password: secret["mysql_password"]
});

//Get 
exports.getAllParticipants = (callback) => {
    connection.query(`SELECT * FROM gestionasistentess.asistente`,
    callback)
}
//Get por id
exports.getParticipantByID = (id, callback) => {
    connection.query(`SELECT * FROM gestionasistentess.asistente WHERE ID = ${id}`,
    callback)
}

//Post
exports.addParticipant = (name, telephone, email, numberComp, paid, callback) => {
    connection.query(`INSERT INTO gestionasistentess.asistente
    (name, telephone, email, numberComp, paid)
    VALUES ("${name}", "${telephone}", "${email}", ${numberComp}, ${paid})`,
    callback)
}

//Put
exports.updateParticipant = (name, telephone, email, numberComp, paid, id, callback) => {
    connection.query(`UPDATE gestionasistentess.asistente SET 
    name = "${name}", telephone = "${telephone}", email = "${email}", numberComp = ${numberComp}, paid = ${paid}
    WHERE ID = ${id}`,
    callback)
}

//Delete por id
exports.deleteParticipant = (id, callback) => {
    connection.query(`DELETE FROM gestionasistentess.asistente WHERE ID = ${id}`,
    callback)
}



