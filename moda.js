
var lista2 = [];
// agregar Numero
function agregarNumeroModa(){
    let formList = document.getElementById("listaModa");
    let numero = document.getElementById("numeroModa");
    lista2.push(Number(numero.value));
    numero.focus();
    formList.reset();
};

// Limpiar
function limpiarLista(){
    lista2.splice(0,lista2.length);
}

function calcularModa(){
const listaCount = {};

lista2.map(
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

let result = document.getElementById("resultMo");
    result.innerHTML =`
    <h2>La moda es: ${listaArray[listaArray.length - 1][0]}</h2>   
    `;
// return "La moda es: " + listaArray[listaArray.length - 1][0];

};
