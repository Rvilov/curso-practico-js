//cuadrado
console.group("Cuadrado");

function perimetroCuadrado(ladoC){ 
    return ladoC * 4;
};

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado(ladoCuadrado) + "cm");

function areaCuadrado(ladoC){
    return ladoC * ladoC;
}
// console.log("El AREA del cuadrado es: " + areaCuadrado+ "cm2");

console.groupEnd();

//TRIANGULO
console.group("Triangulo");


// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

function perimetroTriangulo(ladot1,ladot2,base){
    return (ladot1+ladot2+base);
}

// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base,alturat){
    return (base*alturat)/2;
}

function areaTrianguloIsoceles(base,ladot1){
    const altura = Math.sqrt((ladot1**2)-((base**2)/4));
    const area = (base*altura)/2;

    alert(`La altura del triangulo es ${altura} y su Area es ${area}`);
}

console.groupEnd();

//CIRCULO

console.group("Circulo");


// console.log("El radio del Circulo es: " + radioCirculo+ "cm");
// console.log("El diametro del circulo es: "+diametroCirculo+"cm");
// console.log("pi " + pi);


function diametroCirculo(radioC){
    return radioC*2;
}

function perimetroCirculo(radioC){
    const diametro = diametroCirculo(radioC);
    return diametro*Math.PI;

}

function areaCirculo(radioC){
    return (radioC*radioC)*Math.PI;
}
console.groupEnd();

//INTERACIONES CON HTML
//CUADRADO

function calcularPerimetroCuadrado(){
    const ladoC = document.getElementById("InputCuadrado").value;
    const perimetro = perimetroCuadrado(ladoC);
    alert(perimetro);
    
}

function calcularAreaCuadrado(){
    const ladoC = document.getElementById("InputCuadrado").value;
    const area = areaCuadrado(ladoC);
    alert(area);
}

//TRIANGULO

function calcularPerimetroTriangulo(){
    const ladoTriangulo1 = document.getElementById("InputTrianguloL1").value;
    const ladoTriangulo2 = document.getElementById("InputTrianguloL2").value;
    const ladoBase = document.getElementById("InputTrianguloBase").value;
    const perimetro =perimetroTriangulo(Number(ladoTriangulo1),Number(ladoTriangulo2),Number(ladoBase));
    console.log(typeof(ladoTriangulo1));
    alert(perimetro);
    
}

function calcularAreaTriangulo(){
    const ladoTriangulo1 = document.getElementById("InputTrianguloL1").value;
    const ladoTriangulo2 = document.getElementById("InputTrianguloL2").value;
    const ladoBase = document.getElementById("InputTrianguloBase").value;
    const altura = document.getElementById("InputTrianguloAltura").value;
    
    if(ladoTriangulo1==ladoTriangulo2){
       
        areaTrianguloIsoceles(ladoBase,ladoTriangulo1);
           
    }else{
        const area = areaTriangulo(ladoBase,altura);
        alert(area);
    }
    


    
}

//CIRCULO

function calcularPerimetroCirculo(){
    const radioC = document.getElementById("InputCirculo").value;
    const perimetro = perimetroCirculo(radioC);
    alert(perimetro);
    
}

function calcularAreaCirculo(){
    const radioC = document.getElementById("InputCirculo").value;
    const area = areaCirculo(radioC);
    alert(area);
}

function calcularDiametroCirculo(){
    const radioC = document.getElementById("InputCirculo").value;
    const diametro = diametroCirculo(radioC);
    alert(diametro);
}