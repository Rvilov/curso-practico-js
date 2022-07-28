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
    {
        name:"",
        discount: 0
    },
];


function calcularPrecioConDescuento(precio,descuento){ 
    const porcentajePrecioConDescuento= 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
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
        alert("El cupón " + inputCoupon + " no es válido");
    }else if(userCoupon == ""){
        let descuentoCompleto = Number(inputDiscount);
        const precioConDescuento = calcularPrecioConDescuento(Number(inputPrice),Number(descuentoCompleto));
        let parrafo = document.getElementById("resultP");
        parrafo.innerText = "El precio con descuento es: $ " + precioConDescuento;
        console.log({

            descuentoCompleto,
            precioConDescuento,
           
        
        });
    } else{
        let descuentoCompleto = Number(userCoupon.discount) + Number(inputDiscount);
        const precioConDescuento = calcularPrecioConDescuento(Number(inputPrice),Number(descuentoCompleto));
        let parrafo = document.getElementById("resultP");
        parrafo.innerText = "El precio con descuento es: $ " + precioConDescuento;
        console.log({

            descuentoCompleto,
            precioConDescuento,
           
        
        });
    }
  
    

}



// function PriceDiscount(){
//     const inputPrice = document.getElementById("inputPrice").value; 
//     const inputDiscount = document.getElementById("inputDiscount").value;
       
//     const precioConDescuento = calcularPrecioConDescuento(inputPrice,inputDiscount);
//     var parrafo = document.getElementById("resultP");
//     parrafo.innerText = "El precio con descuento es: $" + precioConDescuento;
//     console.log(inputDiscount)

// }

