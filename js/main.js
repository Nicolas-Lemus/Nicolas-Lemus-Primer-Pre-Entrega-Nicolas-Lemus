const suUsuario = "Nicolas";
const suTarjeta = 1234567;
let ingreso = false;

alert("Bienvenid@s a TIENDA ONLINE");

let saldo;

while(true){
let nombre = prompt("Ingrese su nombre");
if(nombre === suUsuario){

  saldo = 2000000;
  alert("Bienvenido " + nombre);

  for (let i = 2; i >= 0; i--) {
    let tarjeta = parseFloat(prompt("Ingrese su Numero de tarjeta. Tiene " + (i + 1) + " oportunidades."));
    if (tarjeta === suTarjeta) {
      alert("Ingreso con exito.");
      alert("Su saldo actual es " + "$" + saldo);
      ingreso = true;
      break;
    } else {
      alert("PIN incorrecto. Reintente.");
    }
  }
}else{
  alert("Nombre de usuario no reconocido")
}
  if (ingreso) {
    ingresoExitoso();
    break;
  } else {
  alert("No se pudo acceder a su cuenta.");
  }
}

function ingresoExitoso() {
  let opciones;
  saldo = 2000000;
  //Opciones al ingresar al menu principal
  do {
    opciones = prompt("Elija su opcion:\n1. Calzado\n2. Ropa\n3. Accesorios\n4. Salir");
    switch (opciones) {
      //Opciones de Calzado
      case "1":
        let selectCalzado = prompt("Elija tipo de calzado:\n1. Deportivo\n2. Casual\n3. Formal\n4. Volver");
        switch(selectCalzado){
          case "1":
            let selectDeportivo=prompt("\n1. Nike-$4000 \n2. Adidas-$3900 \n3. Under-$5000 \n4. Volver al menu principal");
            switch(selectDeportivo){ 
              case"1":
                saldo -= 4000;
                alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                break;
              case"2":
                saldo -= 3900;
                alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                break;
              case"3":
                saldo-= 5000;
                alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                break;
              case"4":
              break;
            }
            break;
            //Opciones de Casual
            case"2":
            let selectCasual=prompt("\n1. Botas-$5000 \n2. Nuticas-$4900 \n3. Oxford-$6000 \n4. Volver al menu principal")
            switch(selectCasual){
              case"1":
                saldo -= 5000;
                alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                break;
              case"2":
                saldo -= 4900;
                alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                break;
              case"3":
                saldo-= 6000;
                alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                break;
              case"4":
              break;
            }
            break;
            //Opciones de Formal
          case "3":
            let selectFormal=prompt("\n1. Cuero-$7000 \n2. Zapatos sin cordones-$5900 \n3. Desert-$6900 \n4. Volver al menu principal")
            switch(selectFormal){
              case"1":
                saldo -= 7000;
                alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                break;
              case"2":
                saldo -= 5900;
                alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                break;
              case"3":
                saldo-= 6900;
                alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                break;
              case"4":
              break;
            }
            break;
            //Opcion de salida
          case "4":
            break;
        } break;
        //Opciones de Prendas 
      case "2":
        let selectPrenda = prompt("Elija tipo de prenda:\n1. Invierno\n2. Verano\n3. Primavera\n4. Volver");
        switch(selectPrenda){
          case "1":
            //Opciones de Invierno
            let selectInvierno=prompt("\n1. Gorro-$1000 \n2. Guantes-$900 \n3. Campera-$5000 \n4. Volver al menu principal");
            switch(selectInvierno){ 
              case"1":
                saldo -= 1000;
                alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                break;
              case"2":
                saldo -= 900;
                alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                break;
              case"3":
                saldo-= 5000;
                alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                break;
              case"4":
              break;
            }
            break;
            //Opciones de Verano
            case"2":
            let selectVerano=prompt("\n1. Remera-$2000 \n2. Short-$2990 \n3. Gorra-$1090 \n4. Volver al menu principal")
            switch(selectVerano){
              case"1":
                saldo -= 2000;
                alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                break;
              case"2":
                saldo -= 2990;
                alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                break;
              case"3":
                saldo-= 1090;
                alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                break;
              case"4":
              break;
            }
            break;
            //Opciones de Primavera 
          case "3":
            let selectPrimavera=prompt("\n1. Remera manga larga-$2390 \n2. Jeans-$3990 \n3. Campera fina-$4900 \n4. Volver al menu principal")
            switch(selectPrimavera){
              case"1":
                saldo -= 2390;
                alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                break;
              case"2":
                saldo -= 3990;
                alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                break;
              case"3":
                saldo-= 4900;
                alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                break;
              case"4":
              break;
            }
            break;
            //Opcion de salida
          case "4":
            break;
        } break;
        //Opciones de Accesorios
        case "3":
          let selectAccesorio = prompt("Elija tipo de Accesorio:\n1. Reloj\n2. Anillo\n3. Cadenita\n4. Volver");
          switch(selectAccesorio){
        case "1":
          // Opciones de Reloj
          let selectReloj=prompt("\n1. Malla Acero-$7000\n2. Malla Cuero-$5900 \n3. Inteligente-$5000 \n4. Volver al menu principal");
          switch(selectReloj){ 
            case"1":
              saldo -= 7000;
              alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
              break;
            case"2":
              saldo -= 5900;
              alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
              break;
            case"3":
              saldo-= 5000;
              alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
              break;
            case"4":
            break;
          }
          break;
          //Opciones de Anillo
        case"2":
          let selectAnillo=prompt("\n1. Oro-$12.000 \n2. Plata-$7490 \n3. Bronce-$5190 \n4. Volver al menu principal")
          switch(selectAnillo){
            case"1":
              saldo -= 12000;
              alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
              break;
            case"2":
              saldo -= 7490;
              alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
              break;
            case"3":
              saldo-= 5190;
              alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
              break;
            case"4":
            break;
          }
          break;
          //Opciones de Cadenita
        case "3":
          let selectCadenita=prompt("\n1. Cadena 18k-$13.390 \n2. Bañada en oro-$9999 \n3.Plata de ley 925 -$8250 \n4. Volver al menu principalgit ")
          switch(selectCadenita){
            case"1":
              saldo -= 13390;
              alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
              break;
            case"2":
              saldo -= 9999;
              alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
              break;
            case"3":
              saldo-= 8250;
              alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
              break;
            case"4":
            break;
          }
          break;
          //Opcion de salida 
        case "4":
          break;
      } break; 
        
      case "4":
        alert("Gracias por comprar en TIENDA ONLINE");
        break;
    }
  }while (opciones !== "4");
}