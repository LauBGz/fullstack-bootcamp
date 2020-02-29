//user.ja
class User {
​
    constructor() {
​
    }
    initModel() {
​
    }
​
    register(objUser) {
​
        console.log(1111)
​
​
        if(objUser.username && objUser.password){
​
            fs.readFile('users.json', (err, fileContents) => {
                if(err) throw err;
                let user = JSON.parse(fileContents);
                 //teniendo un array, comprobar si alguno de los objetos q hay dentro tiene un username = al que recibo
                for (let i = 0; i < user.length; i++) {
                    if(user[i]['username'] === objUser.username)
                    return ({"error": "ese usuario ya existe..."});
                    
                    
                }
                bcrypt.hash(
                    objUser.password,//contraseña a hashear
                    13,//esto es el tiempo en que gira en bucle en corroborar la accion
                    (error,hash)=>{//callback
                        if(error) throw error;
        
                        const userData = {
                            "username": objUser.username,
                            "password": hash
                        }
                        user.push(userData)
                        
                        fs.writeFile('users.json', 
                        JSON.stringify(user),
                        (error)=>{
                            if(error) throw error //sin llaves solo si lleva un argumento dentro del if, sino lleva llaves
                            return ({"error": "Usuario ya existe"})
                        })
                    })
            
            }
                
            )
        }else{
            return ({"error":"Has mandado mal el body"});
        }
​
​
    }
​
}
​
module.exports = User; 
//main.js
//import
const User = require ('./user.js');
//variable para el User import
let userModel = new User();
//el servidor
servidor.post('/register',[
    //validator extra
    body("username").trim().isEmail(),
    body("password").trim().isEmpty()
],
(req,res)=>{
​
    let respuesta = userModel.register(req.body)
​
    res.send(respuesta)
​
}
)
Contraer








