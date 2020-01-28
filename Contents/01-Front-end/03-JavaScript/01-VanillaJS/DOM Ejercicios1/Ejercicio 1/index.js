const textoES = {
    disabled: "Inactivo",
    deplegable: "Desplegable",
    buscar: "Buscar",
    titulo: "Hola, mundo!",
    p_intro: "Esta es una plantilla para un sitio web simple de marketing o informativo. Incluye una gran llamada llamada jumbotron y tres piezas de contenido de apoyo. Úselo como punto de partida para crear algo más único.",
    btn_intro: "Aprende más",
    heading1: "Nombre",
    heading2:"Razas",
    heading3:"Comunicación",
    parrafo1: "El gato doméstico es una subespecie domesticada por la convivencia con el ser humano. El nombre actual en muchas lenguas proviene del latín vulgar catus. Paradójicamente, catus aludía a los gatos salvajes.",
    parrafo2: "Como resultado de mutaciones genéticas, cruzamiento y selección artificial, hay numerosas razas. Algunas, como la raza Sphynx o la Peterbald están desprovistas de pelo; otras carecen de cola, como los gatos de la raza Manx.",
    parrafo3: "El gato se comunica a través de vocalizaciones. Las más populares son su característico maullido y el ronroneo, pero puede aullar, gemir, gruñir y bufar,demás, adopta poses o expresiones que informan.",
    ver_detalles: "Ver detalles",
}

function Traducir(event){
  let fragmento =  Object.keys(textoES);
  fragmento.forEach(function(elemento){
          document.querySelector('.' + elemento).textContent= textoES[elemento];
      
      })
  }  

document.querySelector('.traductor').addEventListener('click', Traducir);