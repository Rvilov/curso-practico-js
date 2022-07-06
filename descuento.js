// const precioOriginal = 120;
// const descuento= 18;
var coupons = [
    {
        name:"Rickyv",
        discount: 10
    },
    {
        name:"Derlisl",
        discount: 20,
    },
    {
        name:"Becka",
        discount: 50
    },
];


function calcularPrecioConDescuento(precio,descuento){ 
    const porcentajePrecioConDescuento= 100 - descuento;
    const precionConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precionConDescuento;
};



function PriceDiscountCoupon(){
    const inputPrice = document.getElementById("inputPrice").value; 
    const inputDiscount = document.getElementById("inputDiscount").value;
    const inputCoupon = document.getElementById("inputCoupon").value;

    const isCouponValueValid = function (coupon) {
        var discount = coupon.discount;
        return coupon.name === inputCoupon;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + inputCoupon + "no es válido");
    }else{
        // const precioConDescuento = calcularPrecioConDescuento(inputPrice,inputDiscount);
        // var parrafo = document.getElementById("resultP");
        // parrafo.innerText = "El precio con descuento es: $" + precioConDescuento;
        // console.log(inputDiscount)
    }

    
   

}



function PriceDiscount(){
    const inputPrice = document.getElementById("inputPrice").value; 
    const inputDiscount = document.getElementById("inputDiscount").value;
       
    const precioConDescuento = calcularPrecioConDescuento(inputPrice,inputDiscount);
    var parrafo = document.getElementById("resultP");
    parrafo.innerText = "El precio con descuento es: $" + precioConDescuento;
    console.log(inputDiscount)

}

// console.log({

//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precionConDescuento,

// });