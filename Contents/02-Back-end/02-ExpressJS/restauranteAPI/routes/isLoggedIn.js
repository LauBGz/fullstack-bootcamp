const jwt = require('jsonwebtoken');
const fs = require('fs');
const lockUpContent = fs.readFileSync('lockUp.json');
const lockUp = JSON.parse(lockUpContent);


//Archivo isLoggedIn.js -- Lo que intento hacer es:
module.exports = function isLoggedIn(req, res, next) {
    //Que verifique la cookie tal cual lo hacía antes 
    if (req.cookies.stamp){//Si hay cookie que la "valide"
        jwt.verify(req.cookies.stamp, lockUp["jwt_clave"], (error, decode) => {
            if (error) throw error;

            if (decode !== undefined) {  
                //Si no hay error y la cookie no es undefined que continúe con 
                //la petición en cuestión
                next();
            }
        });
    } else {
        //Si no que devuela no autorizado
        res.send(401, "Unauthorized");
    }
}



  



