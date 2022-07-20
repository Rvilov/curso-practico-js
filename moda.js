let lista1 = [];

// agregar Numero
function agregarNumero(){
    let formList = document.getElementById("lista");
    let numero = document.getElementById("numero");
    lista1.push(Number(numero.value));
    numero.focus();
    formList.reset();
};

// Limpiar
function limpiarLista(){
    lista1.splice(0,lista1.length);
}

function calcularModa(){
const listaCount = {};

lista1.map(
      function(element){
        if (listaCount[element]) {
            listaCount[element] += 1
        }else{
            listaCount[element] = 1;
        } 
    }
);

var listaArray = Object.entries(listaCount).sort(
    function(valorAcumulado , nuevoValor){
       return valorAcumulado[1] - nuevoValor[1] ;
});

let result = document.getElementById("result");
    result.innerHTML =`
    <h2>La moda es: ${listaArray[listaArray.length - 1][0]}</h2>   
    `;
// return "La moda es: " + listaArray[listaArray.length - 1][0];

};
