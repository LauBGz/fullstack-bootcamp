let contador = 0;

function Imprimir(){
  document.querySelector("body > div").innerHTML = contador;
}

function SumarUno(evento){
    contador += 1;
    Imprimir(contador);
}

function RestarUno(evento){
  contador -= 1;
  Imprimir(contador);
}

document.querySelector("body > footer > button.sumar").addEventListener("click", SumarUno );
document.querySelector("body > footer > button.restar").addEventListener("click", RestarUno);