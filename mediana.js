const lista1 = [];

//calcular promedio
function calcularPromedioLista1(lista){
 
    const sumaLista = lista.reduce(function(valorAcumulado = 0, elemento){
        return valorAcumulado + elemento;
    });

    let promedioLista = sumaLista/lista.length;
    return promedioLista;
};

//calcular si es par

function esPar(numero){
    if(numero%2 === 0){
        return true
    }else{
        return false
    };
};

var mediana;
function calcularMedianaLista(lista){
    lista.sort((a, b) => a - b);
    console.log(lista)
    const mitadLista = parseInt(lista.length/2);
    console.log(mitadLista)
    if (esPar(lista.length)){
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista-1];
    
        const promedioElemento1y2 = calcularPromedioLista1([elemento1,elemento2]);
        return mediana = promedioElemento1y2;
    }else{
        return mediana = lista[mitadLista];
    };

};
