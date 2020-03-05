const connection =  require ('./db.models');

//FUNCIONES CRUD

exports.crearAlerta = (fechaAlerta, descripcion, atendida, ciudadano_id, barrio_id, tipoDeAlerta_id, callback) => {
    connection.query(`
    INSERT INTO neoalert.alerta
    (fechaAlerta, descripcion, atendida, ciudadano_id, barrio_id, tipoDeAlerta_id)
    VALUES
    (${fechaAlerta},"${descripcion}",${atendida},${ciudadano_id},
    ${barrio_id}, ${tipoDeAlerta_id})
    `, callback);
};

exports.listarAlertas = (callback) => {
    connection.query(`
    SELECT * FROM  neoalert.alerta
    `, callback);
};

exports.modificarAlerta = (descripcion, atendida, id, callback) => {
    connection.query(
        `
        UPDATE neoalert.alerta
        SET
        descripcion = "${atendida}",
        atendida = "${descripcion}"
        WHERE ID= ${id};
        `, callback);
};

exports.elimiarAlerta = (id,callback) => {
    connection.query(`
    DELETE FROM neoalert.alerta WHERE ID = ${id};
    `, callback)
};