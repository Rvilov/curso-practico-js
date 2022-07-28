var lista1 = [];

function agregarNumeroP(){
    let formList = document.getElementById("listaPromedio");
    let numero = document.getElementById("numeroPromedio");
    lista1.push(Number(numero.value));
    numero.focus();
    formList.reset();
};

// Limpiar
function limpiarLista(){
    lista1.splice(0,lista1.length);
}

//promedio
function calcularPromedioLista1(){
    // var sumaLista = 0;
    // for (let index = 0; index < lista1.length; index++) {
    //     sumaLista = sumaLista + lista1[index];
        
    // };
    
    const sumaLista = lista1.reduce(function(valorAcumulado = 0, elemento){
        return valorAcumulado + elemento;
    });

    let promedioLista = sumaLista/lista1.length;
 

    let result = document.getElementById("resultP");
    result.innerHTML =`
    <h2>El promedio es: ${promedioLista}</h2>   
    `;
    // return promedioLista;
};


