// Manipulación del DOM con jQuery
// La estructura es siempre $()

// $('.contenedor') //Es igual a document.querySelector('.contenedor');

// $('.contenedor').text();

// $('.contenedor').text("Hola Mundo");

// $('body > div > input[type=text]').val();//valor del input 

// $('body > div').append("<button>Hola</button>");//Añadir un contenido HTML al final del div

// $('body > div').prepend("<button>Hola</button>");//Añadir un contenido HTML al inicio del div

// $('body > div > h1').prepend("<button>Hola</button>");//Añadir dentro del H1

// $('body > div > h1').after("<button>Hola</button>");//lo añade después del h1 (fuera)

// $('body > div > h1').before("<button>Hola</button>");//lo añade antes del h1 (fuera)

// $('body > div > h1').remove

// $('body > div > h1').empty()//vacía los h1 pero no los borra

// $('body > div > h1').css('color')// te devuelve el color del elemento seleccionado

// $('body > div > h1').css('color', 'red')//cambiar la propiedad: usar puntualmente

// Para cambiar estilos: crear, cambiar o eliminar clases

// $('body > div > h1').addClass('ColorAzul');

// $('body > div > h1').removeClass('ColorAzul');