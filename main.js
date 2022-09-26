// CONDICIONALES

// let hora = parseInt(prompt("Ingresa la hora por favor."));

// if ((hora >=6) && (hora <=12)){
//    alert("Buenos días!");
// } else if((hora >=13) && (hora <=18)) {
//    alert("Buenas tardes!");
// } else{
//    alert("Buenas noches!");
// }

// CICLOS

// let cont = 1;

// while(cont <= 15){
//   console.log(cont);
//    cont++;
// }




// SIMULADOR CONVERTIDOR DE MONEDA



function convertir(cantidad, moneda) {
    
    cantidad = parseInt(prompt("que cantidad queres convertir?"));
    moneda = prompt("a que moneda queres convertir?");

    let dolar = 10;
    let euro = 20;
    let bitcoin = 30;
  

    if (moneda === `dolar`){
      return (cantidad * dolar);
       
    }
    if (moneda === `euro`){
        return (cantidad * euro);
    }
    if (moneda === `bitcoin`){
        return (cantidad * bitcoin);
    } else {
        return ("No existe tal moneda.");
    }

  
}

convertir();




















