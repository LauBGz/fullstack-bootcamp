**Show Tweets**
----
  `Return an array of tweets.`

* **URL**

  `/tweets`

* **Method:**

  `GET`

*  **URL Params**

   **Required:**

   `None`

* **Data Params**

    `None`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ data}`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `None`


* **Sample Call:**

  ```javascript
    miServidor.get(
      '/tweets',
      (request, response), 
      callback
      )
  ```

**Add Tweets**
----
  `Add a tweet to an array.`

* **URL**

  `/editar`

* **Method:**

  `POST`

*  **URL Params**

   **Required:**

   `None`

* **Data Params**

    `None`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"content": "formato de tweet correcto"}`

* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** `None`


* **Sample Call:**

  ```javascript
    miServidor.post(
      '/editar',
      (request, response), 
      callback
      )
  ```

**Users register**
----
 `Send user data for register.`

* **URL**

  `/register`

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

* **Error Response:**

  `/register`
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

**Users login**
----
 `Send user data for login.`

* **URL**

  `/login`

* **Method:**

 `POST`

*  **URL Params**

   `None`

* **Data Params**

  `{"username":"hola mundo",  "password":"1111111"}`

* **Success Response:**

  `/login`
  * **Code:** 200 <br />
    **Content:** `{""message": "Usuario logueado""}`

* **Error Response:**

  `/login`
  * **Code:** <br />
    **Content:** `{"error": "Usuario o contraseña incorrectos."}`

  OR

  * **Code:** <br />
    **Content:** `{"error": "Has mandado mal el body."}`

* **Sample Call:**

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