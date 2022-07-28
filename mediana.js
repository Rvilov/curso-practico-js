
const lista3 = [];

//agregarNumero
function agregarNumero(){
    let formList = document.getElementById("listaMediana");
    let numero = document.getElementById("numeroMediana");
    lista3.push(Number(numero.value));
    numero.focus();
    formList.reset();
};

// Limpiar
function limpiarLista(){
    lista3.splice(0,lista3.length);
}

//promedio
function calcularPromedioLista1(lista){
    // var sumaLista = 0;
    // for (let index = 0; index < lista1.length; index++) {
    //     sumaLista = sumaLista + lista1[index];
        
    // };
    
    const sumaLista = lista.reduce(function(valorAcumulado = 0, elemento){
        return valorAcumulado + elemento;
    });

    const promedioLista = sumaLista/lista.length;
 

   return promedioLista
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
function calcularMedianaLista(){
    let result = document.getElementById("resultM");
    lista3.sort((a, b) => a - b);
    console.log(lista3)
    const mitadLista = parseInt(lista3.length/2);
    console.log(mitadLista)
    if (esPar(lista3.length)){
        const elemento1 = lista3[mitadLista];
        const elemento2 = lista3[mitadLista-1];
    
        let promedioElemento1y2 = calcularPromedioLista1([elemento1,elemento2]);

        mediana = promedioElemento1y2;
        result.innerHTML =`
        <h2>La mediana es: ${mediana}</h2>   
        `;
         
    }else{
        mediana = lista3[mitadLista];
        result.innerHTML =`
        <h2>La mediana es: ${mediana}</h2>   
        `;
        
    };

};
