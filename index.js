
const pedido = [];
totalVenta = []

const portfolio = [
    {id: 1, item: "Tartrazina", precio: 12.5},
    {id: 2, item: "Beta Caroteno", precio: 150},
    {id: 3, item: "Sucralosa", precio: 92},
    {id: 4, item: "Acesulfame K", precio: 15.8},
    {id: 5, item: "Dioxido de titanio", precio: 14.5},
    {id: 6, item: "Ácido Cítrico", precio: 4.5}
    ];
    
function cargar () {
    let producto = parseInt(prompt("De acuerdo a la tabla en la página, por favor seleccione un sólo item que usted desee agregar; en caso que no pueda ver la tabla por favor seleccione cero (0) ")) ;

    if (producto == 0){
        alert(JSON.stringify(portfolio));
        producto = parseInt(prompt("De acuerdo a la tabla en la página, por favor seleccione un sólo item que usted desee agregar")) ;
    }

    while (isNaN(producto) || producto >= 7 ||  producto <=0){
        producto = parseInt(prompt("Por favor, ingrese sólo un número de acuerdo al ID de la tabla (entre 1 y 6")) ;
    }

    pedido.push(producto);

    let seguir = prompt("¿Desea segir cargando productos (Si o No)?");
    seguir = seguir.toLowerCase();

    while (seguir != "si" && seguir != "no"){
        seguir = prompt("Por favor, escriba si para cargar otro producto y no para salir.");
        seguir = seguir.toLowerCase();
    }

        if (seguir == "si"){
            cargar()
        }
        else{

        return pedido;
        }
        
}



function Calcular (cantidad) {

    


    pedido.forEach((ele) => {
        
        const result = portfolio.find((elemento) => elemento.id == ele);
        let cantidad = prompt("por favor, intrese cuanta cantidad en Kg va a llevar de " + result.item);
            while (isNaN(cantidad)){
                cantidad = parseInt(prompt("Por favor, ingrese sólo números de lo que requiere en Kg de " + result.item)) ;
            }
        valorItemTotal = result.precio * cantidad;
        totalVenta.push(valorItemTotal);
        return totalVenta;
    })
   
    const totalFinal = totalVenta.reduce((acumulador, elementox) => acumulador + elementox, 0);
    alert("El valor total por sus items es de u$" + totalFinal);



}
    









