const connection = require('./db.model');

//Obtener usuarios
exports.getAllUsers = (callback) => {
    connection.query(`
    SELECT * FROM trekking.usuario;
    `, callback);
};

//Obtener un usuario
exports.getAnUser = (id, callback) => {
    connection.query(`
    SELECT * FROM trekking.usuario WHERE id = ${id}`, callback);
};

//Añadir un usuario
exports.addAnUser = (username, password, fechaInscripcion, email, edad, peso, sexo, callback) => {
    connection.query(`
    INSERT INTO trekking.usuario
    (username, password, fechaInscripcion, email, edad, peso, sexo)
    VALUES ("${username}", "${password}", ${fechaInscripcion}, "${email}", ${edad}, ${peso}, "${sexo}");
    `, callback);
};