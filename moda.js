

function calcularModa(lista){



const listaCount = {};

lista.map(
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

return "La moda es: " + listaArray[listaArray.length - 1][0];

};
