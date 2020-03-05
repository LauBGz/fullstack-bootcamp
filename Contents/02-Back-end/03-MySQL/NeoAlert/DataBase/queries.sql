# Manipular tipos de alerta

# Añadir 
INSERT INTO neoalert.tipodealerta 
(nombre, gravedad)
VALUES 
("asesinato", 10);

#VISUALIZAR LOS TIPOS
SELECT * FROM neoalert.tipodealerta;


#QUERIES DE BARRIOS

INSERT INTO neoalert.barrio
(nombre, ciudad, codigoPostal)
VALUES
("Eixample", "Barcelona", 08013);

#VISUALIZAR LOS TIPOS BARRIOS
SELECT * FROM neoalert.barrio;

#ACTUALIZAR BARRIOS
UPDATE neoalert.barrio
SET
nombre =  "test", ciudad = "Barcelona", codigoPostal =08014
WHERE ID=1;

#ELIMINAR BARRIOS
DELETE FROM neoalert.barrio WHERE ID = 1;

#QUERIES CIUDADANOS 
INSERT INTO neoalert.ciudadano
(username, password, email)
VALUES
("test", "test1", "tes@test.com");

#VISUALIZAR LOS CIUDADANOS
SELECT * FROM  neoalert.ciudadano;

#ACTUALIZAR CIUDADANOS
UPDATE neoalert.ciudadano
SET
username = "test2", password= "test22", email = "test@test.com"
WHERE ID=1;

#ELIMINAR CIUDADADOS
DELETE FROM neoalert.ciudadano WHERE ID = 1;

#QUERIES ALERTAS

#AÑADIR ALERTA
INSERT INTO neoalert.alerta
(fechaAlerta, descripcion, atendida, ciudadano_id, barrio_id, tipoDeAlerta_id)
VALUES
(20200305, "test 1", 0, 1, 2, 1);

#ACTUALIZAR ALERTA
UPDATE neoalert.alerta
SET
fechaAlerta = 20200304
WHERE ID=1;

#VISUALIZAR LAS ALERTAS
SELECT * FROM  neoalert.alerta;

#ELIMINAR ALERTAS
DELETE FROM neoalert.alerta WHERE ID = 1;