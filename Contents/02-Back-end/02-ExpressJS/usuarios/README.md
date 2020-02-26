**Users**
----
 `Users register and log in.`

* **URL**

  `/register`
  `/login`

* **Method:**

 `POST`

*  **URL Params**

   `None`

* **Data Params**

  `{"username":"hola mundo",  "password":"1111111"}`

* **Success Response:**
    
  `/register`
  * **Code:** 200 <br />
    **Content:** `{"message": "Usuario creado como objeto."}`

  `/login`
  * **Code:** 200 <br />
    **Content:** `{""message": "Usuario logueado""}`

* **Error Response:**

  `/register`
  * **Code:** <br />
    **Content:** `{"error": "Has mandado mal el body."}`

  `/login`
  * **Code:** <br />
    **Content:** `{"error": "Usuario o contraseña incorrectos."}`

  OR

  * **Code:** <br />
    **Content:** `{"error": "Has mandado mal el body."}`

* **Sample Call:**

```Javascript
    servidor.post('/register', (req, res) => {
    if(req.body.username && req.body.password){
      if(error) throw error;
      const userData = {
          "username": req.body.username,
          "password": hash
        };
        fs.writeFile('user.json', JSON.stringify(userData), 
          error => {
            if(error) throw error;
            res.send({"message": "Usuario creado como objeto."});
          }
        )
    }else{
      res.send({"error": "Has mandado mal el body."});
    }
})
```
```Javascript
    servidor.post('/login', (req, res) =>{
      if(req.body.username && req.body.password){
        const userData = {
          "username": req.body.username,
          "password": req.body.password
        }
        fs.readFile('user.json', (error, fileContents) =>{
          if (error) throw error;
          const data = JSON.parse(fileContents);
          if (userData["username"] === data["username"] 
              &&
              userData["password"] === data["password"]
            ){
              res.send({"message": "Usuario logueado"});
          }else{
            res.send({"error": "Usuario o contraseña incorrectos."});
          }
          });
      }else{
          res.send({"error": "Has mandado mal el body."});
      }
    })
```

* **Notes:**

  <_This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here._> 
