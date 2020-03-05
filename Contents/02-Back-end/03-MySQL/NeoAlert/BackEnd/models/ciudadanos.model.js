const connection = require('./db.models');

//4 CRUD

exports.crearCiudadano = (userName, password, email, callback) => {
    connection.query(`
    INSERT INTO neoalert.ciudadano
    (username, password, email)
    VALUES
    ("${userName}", "${password}", "${email}");
    `, callback);
};

exports.listarCiudadanos = (callback) => {
    connection.query(`
    SELECT * FROM  neoalert.ciudadano
    `, callback);
};

exports.modificarCiudadano = (id, userName, password, email, callback) => {
    connection.query(`
    UPDATE neoalert.ciudadano
    SET
    username = "${userName}", password= "${userName}", email = "${email}"
    WHERE ID=${id};
    `, callback);
};

exports.eliminarCiudadano = (id, callback) => {
    connection.query(`
    DELETE FROM neoalert.ciudadano WHERE ID = ${id}
    `, callback);
};