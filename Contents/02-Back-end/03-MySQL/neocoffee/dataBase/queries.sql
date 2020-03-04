#UNA QUERY PARA CREAR USUARIOS
INSERT INTO neocoffee.user (UserName, Password, FirstName, SecondName, SignUpDate, Email)
VALUES ('test', 'hola', 'test', 'test', 20200403, 'test@test.com');

#UNA QUERY PARA OBTENER USUARIOS
SELECT * FROM neocoffee.user;

#UNA QUERY PARA OBTENER 1 USUARIO
SELECT * FROM neocoffee.user WHERE ID = 1;

#UNA QUERY PARA ACTUALIZAR USUARIOS
UPDATE neocoffee.user SET UserName='Test2', 
Password='password2',
FirstName='Nombre2',
SecondName= 'test 2', 
SignUpDate= '20200302',
email= 'test2@test.com'
WHERE ID = 1;

#UNA QUERY PARA ELIMINAR USUARIOS
DELETE FROM neocoffee.user WHERE ID = 1;