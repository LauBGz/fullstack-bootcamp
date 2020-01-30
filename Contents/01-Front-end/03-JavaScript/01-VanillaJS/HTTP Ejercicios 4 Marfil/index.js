function httpGetAsync(theUrl, callback)
{
    let peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function() { 
        if (peticion.readyState == 4 && peticion.status == 200){
            callback(JSON.parse(peticion.responseText));
        }
        if (peticion.status == 404){
            document.querySelector('.usuario').innerHTML = `
            <div class="error">
                Does not exist.
            </div>
            `;
        }
    }
    peticion.open("GET", theUrl, true); 
    peticion.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    peticion.send(null);
}

function imprimirRepos(datosRepos){
    let reposHTML = document.querySelector('.reposUser');

    reposHTML.innerHTML = `
        <p class="repositorios">Repositories</p>
    `;

    for (let i = 0; i < datosRepos.length; i++) {

        reposHTML.innerHTML += `
        <div class="d-flex repos">
            <div class="repo">
            <p>${datosRepos[i]["name"]}</p>   
            </div>
            <div class="star-fork">
                <p>
                    <i class="fa fa-star" aria-hidden="true"></i>${datosRepos[i]["stargazers_count"]}
                    <i class="fa fa-code-fork" aria-hidden="true"></i>${datosRepos[i]["forks_count"]}
                </p>   
            </div>
        </div> 
    `;
        
    }

    console.log(datosRepos);

}

function imprimir (datosUsuarioGithub){

    let usuarioHTML = document.querySelector('.usuario');

    usuarioHTML.innerHTML = `
            <div class="d-flex">
                <div>
                    <img class="logo" src="${datosUsuarioGithub["avatar_url"]}"></img>
                </div>
                <div>
                    <p class="textos"><span class="userName">@${datosUsuarioGithub["login"]}</span></p>
                    <p class="textos"><span class="userFullName">${datosUsuarioGithub["name"]}</span></p>
                    <p class="textos"><span class="userBio">${datosUsuarioGithub["bio"]}</span></p>
                </div>
            </div>
        `

httpGetAsync("https://cors-anywhere.herokuapp.com/https://api.github.com/users/"+datosUsuarioGithub["login"]+"/repos", imprimirRepos);
   
}

document.querySelector('.boton').addEventListener("click", () => {
    let usuario = document.querySelector('.input').value;
    httpGetAsync("https://cors-anywhere.herokuapp.com/https://api.github.com/users/"+usuario, imprimir);
}
);

