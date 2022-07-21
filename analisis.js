
var lista = [
];



function agregarSalario(){
    const name = document.getElementById("nombre");
    const salary = document.getElementById("numero");
    let formSal = document.getElementById("salarios");
    lista.push({
        name: name.value,
        salary: Number(salary.value),
    });
    console.log(lista);
    name.focus();
    formSal.reset();
};




//helpers
function esPar(numero){
    return (numero %2 === 0); 
};

function calcularPromedioLista1(lista1){
 
    const sumaLista = lista1.reduce(function(valorAcumulado = 0, elemento){
        return valorAcumulado + elemento;
    });

    let promedioLista = sumaLista/lista1.length;
    return promedioLista;
};

function medianaSalarios(){
    const salariosVen = lista.map(
        function(persona) {
            return persona.salary;
            
        }
    );
    const salariosVenOrden = salariosVen.sort(function(salaryA,salaryB){
        return  salaryA-salaryB;    
    });

    medianaSalarios1(salariosVenOrden);
};

//calculadora mediana
function medianaSalarios1(lista){

   

    const mitad = parseInt(lista.length/2);
    
    if(esPar(lista.length)){
        const personaMitad = lista[mitad - 1];
        const personaMitad2= lista[mitad];
        const mediana = calcularPromedioLista1([personaMitad,personaMitad2]);
         
        result.innerHTML =`
        <h2>La mediana es: ${mediana}</h2>   
        `;
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        result.innerHTML =`
        <h2>La mediana es: ${personaMitad}</h2>   
        `;
         return personaMitad;
    }
};

function medianaSalariosTop10(){
    if(lista.length<10){
        result.innerHTML =`
        <h2>Para calcular el top 10 debe ingresar al menos 10 elementos</h2>   
        `;
    }else{
    
    const salariosVen = lista.map(
        function(persona) {
            return persona.salary;
            
        }
    );
    const salariosVenOrden = salariosVen.sort(function(salaryA,salaryB){
        return  salaryA-salaryB;    
    });
    console.log("salariosvenorden: " +salariosVenOrden);
    const spliceStart = salariosVenOrden.length * 0.9;
    
    const spliceCount = salariosVenOrden.length - spliceStart;
    
    const salariosTop10Ven = salariosVenOrden.splice(spliceStart,spliceCount);
    console.log("salariosvto10: " +salariosTop10Ven)
    let medianaTop10Ven = medianaSalarios1(salariosTop10Ven);
    result.innerHTML =`
        <h2>La mediana del top 10 es: ${medianaTop10Ven}</h2>   
        `;
    }
};



