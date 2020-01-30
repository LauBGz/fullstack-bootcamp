function httpGetAsync(theUrl, callback)
{
    let peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function() { 
        if (peticion.readyState == 4 && peticion.status == 200){
            callback(JSON.parse(peticion.responseText));
        }
    }
    peticion.open("GET", theUrl, true); 
    //Justo antes de mandar la petición pongo la cabecera que mandan. Al poner esta cabecera
    //le digo al proxy que hago la petición desde javascript.
    peticion.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    peticion.send(null);
}


function imprimir(resultado){

    console.log(resultado);    

}

document.querySelector('.boton').addEventListener("click", () => {
    httpGetAsync("https://cors-anywhere.herokuapp.com/https://anapioficeandfire.com/api/characters/583", imprimir);
});

// This API enables cross-origin requests to anywhere.

// Usage:

// /               Shows help
// /iscorsneeded   This is the only resource on this host which is served without CORS headers.
// /<url>          Create a request to <url>, and includes CORS headers in the response.

// If the protocol is omitted, it defaults to http (https if port 443 is specified).

// Cookies are disabled and stripped from requests.

// Redirects are automatically followed. For debugging purposes, each followed redirect results
// in the addition of a X-CORS-Redirect-n header, where n starts at 1. These headers are not
// accessible by the XMLHttpRequest API.
// After 5 redirects, redirects are not followed any more. The redirect response is sent back
// to the browser, which can choose to follow the redirect (handled automatically by the browser).

// The requested URL is available in the X-Request-URL response header.
// The final URL, after following all redirects, is available in the X-Final-URL response header.


// To prevent the use of the proxy for casual browsing, the API requires either the Origin
// or the X-Requested-With header to be set. To avoid unnecessary preflight (OPTIONS) requests,
// it's recommended to not manually set these headers in your code.


// Demo          :   https://robwu.nl/cors-anywhere.html
// Source code   :   https://github.com/Rob--W/cors-anywhere/
// Documentation :   https://github.com/Rob--W/cors-anywhere/#documentation