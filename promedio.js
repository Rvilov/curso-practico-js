let lista1 = [];



//promedio

function calcularPromedioLista1(lista){
    // var sumaLista = 0;
    // for (let index = 0; index < lista.length; index++) {
    //     sumaLista = sumaLista + lista[index];
        
    // };

    const sumaLista = lista.reduce(function(valorAcumulado = 0, elemento){
        return valorAcumulado + elemento;
    });
    let promedioLista = sumaLista/lista.length;
    return promedioLista;
};
