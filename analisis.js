


const salariosVen = venezuela.map(
    function(persona) {
        return persona.salary;
    }
);

const salariosVenOrden = salariosVen.sort(function(salaryA,salaryB){
    return  salaryA-salaryB;    
});

function esPar(numero){
    return (numero %2 === 0); 
};

function calcularPromedioLista1(lista){
 
    const sumaLista = lista.reduce(function(valorAcumulado = 0, elemento){
        return valorAcumulado + elemento;
    });

    let promedioLista = sumaLista/lista.length;
    return promedioLista;
};

function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);

    if(esPar(lista.length)){
        const personaMitad = lista[mitad - 1];
        const personaMitad2= lista[mitad];
        const mediana = calcularPromedioLista1([personaMitad,personaMitad2]);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
};

console.log(medianaSalarios(salariosVenOrden));