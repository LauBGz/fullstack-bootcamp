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


//Obtener usuarios por email/usernane
exports.getUserByEmail = (username, email, callback) => {
    connection.query(`
    SELECT *
    FROM trekking.usuario WHERE email = "${email}" OR username = "${username}"; `, 
    callback);
};

exports.getUserByUsername = (username, callback) => {
    connection.query(`
    SELECT *
    FROM trekking.usuario WHERE username = "${username}"; `, 
    callback);
};

exports.getPasswordByUsername = (username, callback) => {
    connection.query(`
    SELECT usuario.password FROM trekking.usuario WHERE username = '${username}';
     `, 
    callback);
};

//Comprobar si usuario y contraseña coinciden
// exports.compareUserAndPassword = (username, password, callback) => {
//     connection.query(`
//     SELECT *
//     FROM trekking.usuario 
//     WHERE username = '${username}'
//     AND password = '${password}';
//     `, callback);
// };

//Añadir un usuario
exports.addAnUser = (username, password, fechaInscripcion, email, edad, peso, sexo, callback) => {
    connection.query(`
    INSERT INTO trekking.usuario
    (username, password, fechaInscripcion, email, edad, peso, sexo)
    VALUES ("${username}", "${password}", ${fechaInscripcion}, "${email}", ${edad}, ${peso}, "${sexo}");
    `, callback);
};

//Actualizar un usuario
exports.updateAnUser = (username, password, email, edad, peso, sexo, id, callback) => {
    connection.query(`
    UPDATE trekking.usuario SET 
    username = "${username}", password = "${password}", 
    email = "${email}", edad = ${edad}, 
    peso = ${peso}, sexo = "${sexo}"
    WHERE ID = ${id};
    `, callback);
};

//Eliminar un usuario
exports.deleteAnUser = (id, callback) => {
    connection.query(`
    DELETE FROM trekking.usuario WHERE id = ${id}`, 
    callback);
};