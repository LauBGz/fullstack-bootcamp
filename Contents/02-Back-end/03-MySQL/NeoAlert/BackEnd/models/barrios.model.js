const connection =  require ('./db.models');

//FUNCIONES CRUD

exports.crearUnBarrio = (nombre, ciudad, codigoPostal, callback) => {
    connection.query(`
    INSERT INTO neoalert.barrio
    (nombre, ciudad, codigoPostal)
    VALUES
    ("${nombre}", "${ciudad}", ${codigoPostal});
    `, callback);
}

exports.listarBarrios = (callback) => {
    connection.query(`
    SELECT * FROM neoalert.barrio
    `, callback)
}

exports.modificarBarrio = (nombre, ciudad, codigoPostal, id, callback) => {
    connection.query(`
    UPDATE neoalert.barrio
    SET
    nombre = "${nombre}", "${ciudad}", ${codigoPostal}
    WHERE ID=${id};
    `, callback)
}

exports.eliminarBarrio = (id, callback) => {
    connection.query(`
    DELETE FROM neoalert.barrio WHERE ID = ${id};
    `, callback)
}