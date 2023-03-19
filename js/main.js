const suUsuario = "Nicolas";
const suTarjeta = 1234567;
let ingreso = false;

alert("Bienvenid@s a TIENDA ONLINE");

let saldo;

while (true) {
    let nombre = prompt("Ingrese su nombre completo");
    if (nombre === suUsuario){
    let saldo = 40000;
        alert("Bienvenido " + nombre);
        for (let i = 2; i >= 0; i--) {
            let tarjeta = parseFloat(prompt("Ingrese su numero de tarjeta sin puntos ni guiones. Tiene " + (i + 1) + " oportunidades."));
            if (tarjeta === suTarjeta) {
            alert("Ingreso con exito.");
            alert("Su saldo actual es " + "$" + saldo);
            ingreso = true;
            break;
            } else {
                alert("Tarjeta incorrecta. Reintente.");
            }
        }
    } else {
        alert("Nombre de usuario no reconocido");
    }
    //Llamamos a la funcion
    if (ingreso) {
    ingresoExitoso();
    break;
    //pausamos la funcion asi no queda el ingreso guardado.
    } else {
    alert("No se pudo acceder a su cuenta.");
    }
}

//Funcion
function ingresoExitoso() {
    let opciones;
    saldo = 40000;
    //Opciones al ingresar al menu principal
    do {
        opciones = prompt("Elija su opcion:\n1. Calzado\n2. Ropa\n3. Accesorios\n4. Salir");
        switch (opciones) {
        //Opciones de Calzado
        case "1":
            opcionesCalzado();
        break;
        //Opciones de Ropa
        case "2":
            opcionesRopa();
        break;
        //Opciones de Accesorios
        case "3":
            opcionesAccesorios();
        break;
        //Opcion de salida
        case "4":
        break;
        default:
            alert("Opcion invalida. Elija nuevamente.");
        break;
        }
    } while (opciones !== "4");
}

//Funciones de Calzado
function opcionesCalzado() {
    let selectCalzado = prompt("Elija tipo de calzado:\n1. Deportivo\n2. Casual\n3. Formal\n4. Volver");
        switch (selectCalzado) {
            case "1":
                opcionesDeportivo();
            break;
            case "2":
                opcionesCasual();
            break;
            case "3":
                opcionesFormal();
            break;
            case "4":
            break;
            default:
                alert("Opcion invalida. Elija nuevamente.");
                opcionesCalzado();
            break;
        }
}
//deportivos
function opcionesDeportivo() {
    let selectDeportivo = prompt("\n1. Nike-$4.000 \n2. Adidas-$3.900 \n3. Under-$5.000 \n4. Puma-$4.900 \n5. New Balance-$5.200 \n6. Volver a Calzados \n7. Volver al menu principal");
        switch (selectDeportivo) {
            case "1":
                if(saldo <= 4000){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 4000;
                    saldo -= 4000;
                    alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case "2":
                if(saldo <= 3900){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 3900;
                    saldo -= 3900;
                    alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case "3":
                if(saldo <= 5000){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 5000;
                    saldo -= 5000;
                    alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case"4":
                if(saldo <= 4900){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 4900;
                    saldo-= 4900;
                    alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case"5":
                if(saldo <= 5200){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 5200;
                    saldo-=5200;
                    alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case "6":
                opcionesCalzado();
            break;
            case"7":
            break;
            default:
                alert("Opcion invalida. Elija nuevamente.");
                opcionesDeportivo();
            break;
        }
}
//casual
function opcionesCasual() {
    let selectCasual=prompt("\n1. Botas-$5.000 \n2. Nuticas-$4.900 \n3.Sneakers -$6.000 \n4. Levi’s-$5.390 \n5. Converse-$5.999 \n6. Volver a Calzados \n7. Volver al menu principal")
        switch(selectCasual){
            case"1":
            if(saldo <= 5000){
                alert("Saldo no disponible.")
            }else{
                saldo < 5000;
                saldo -= 5000;
                alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
            }
            break;
            case"2":
                if(saldo <= 4900){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 4900;
                    saldo -= 4900;
                    alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case"3":
                if(saldo <= 6000){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 6000;   
                    saldo -= 6000;
                    alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case"4":    
                if(saldo <= 5390){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 5000;
                    saldo -=5390;
                    alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case"5":
                if(saldo <= 5999){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 5999;
                    saldo -=5999;
                    alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case "6":
                opcionesCalzado();
            break;
            case"7":
            break;
            default:
                alert("Opcion invalida. Elija nuevamente.");
                opcionesCasual();
            break;
        }
}
//formal
function opcionesFormal(){
    let selectFormal=prompt("\n1. Cuero-$7.000 \n2. Zapatos sin cordones-$5.900 \n3. Desert-$6.900 \n4.Oxford-$6.199 \n5.Gaziano & Girling-$10.000 \n6. Volver a Calzados \n7. Volver al menu principal")
        switch(selectFormal){
            case"1":
                if(saldo <= 7000){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 7000;
                    saldo -= 7000;
                    alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case"2":
                saldo -= 5900;
                alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                break;
            case"3":
                if(saldo <= 6900){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 6900;
                    saldo -= 6900;
                    alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case"4":
                if(saldo <= 6199){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 6199;
                    saldo -= 6199;
                    alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case"5":
                if(saldo <= 10000){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 10000;
                    saldo -= 10000;
                alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case "6":
                opcionesCalzado();
            break;
            case"7":
            break;
            default:
                alert("Opcion invalida. Elija nuevamente.");
                opcionesFormal();
            break;
        }
}
//PRENDAS
function opcionesRopa() {
    let selectRopa=prompt("Elija tipo de prenda:\n1. Invierno\n2. Verano\n3. Primavera\n4. Volver");
        switch (selectRopa) {
            case "1":
                opcionesInvierno();
            break;
            case "2":
                opcionesVerano();
            break;
            case "3":
                opcionesPrimavera();
            break;
            case "4":
            break;
            default:
                alert("Opcion invalida. Elija nuevamente.");
                opcionesRopa();
            break;
        }
}

//Invierno
function opcionesInvierno(){
    let selectInvierno=prompt("\n1. Gorro-$1.000 \n2. Guantes-$900 \n3. Campera-$5.000 \n4. Bufanda-$590 \n5. Medias térmicas-$890 \n6. Volver a Ropa \n7. Volver al menu principal");
        switch(selectInvierno){ 
            case"1":
                if(saldo <= 1000){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 1000;
                    saldo -= 1000;
                    alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case"2":
                if(saldo <= 900){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 900;
                    saldo -= 900;
                    alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case"3":
                saldo-= 5000;
                alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
            break;
            case"4":
                if(saldo <= 590){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 590;
                    saldo-= 590;
                    alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case"5":
                if(saldo <= 890){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 890;
                    saldo-= 890;
                    alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case "6":
                opcionesRopa();
            break;
            case"7":
            break;
            default:
                alert("Opcion invalida. Elija nuevamente.");
                opcionesInvierno();
            break;
        }
}
//Verano
function opcionesVerano(){
    let selectVerano=prompt("\n1. Remera-$2.000 \n2. Short-$2.990 \n3. Gorra-$1.090 \n4. Havaianas-$3.90 \n5. Bermuda-$1.290 \n6. Volver a Ropa \n7. Volver al menu principal")
        switch(selectVerano){
            case"1":
                if(saldo <= 2000){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 2000;
                    saldo -= 2000;
                    alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case"2":
                if(saldo <= 2990){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 2990;
                    saldo -= 2990;
                    alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case"3":
                if(saldo <= 1090){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 1090;
                    saldo-= 1090;
                    alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case"4":
                if(saldo <= 390){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 390;
                    saldo-= 390;
                    alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case"5":
                if(saldo <= 1290){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 1290;
                    saldo-= 1290;
                    alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case "6":
                opcionesRopa();
            break;   
            case"7":
            break;
            default:
                alert("Opcion invalida. Elija nuevamente.");
                opcionesVerano();
            break;
        }
}
//Primavera
function opcionesPrimavera(){
    let selectPrimavera=prompt("\n1. Remera manga larga-$2.390 \n2. Jeans-$3.990 \n3. Campera fina-$4.900 \n4. Ripped jeans-$2.190 \n5. Buzo-$1.099 \n6. Volver a Ropa \n7. Volver al menu principal")
        switch(selectPrimavera){
            case"1":
                if(saldo <= 2390){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 2390;
                    saldo -= 2390;
                    alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case"2":
                if(saldo <= 3999){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 3999;
                    saldo -= 3990;
                    alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case"3":
                if(saldo <= 4900){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 4900;
                    saldo-= 4900;
                    alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case"4":
                if(saldo <= 2190){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 2190;
                    saldo-= 2190;
                alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case"5":
                if(saldo <= 1099){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 1099;
                    saldo-= 1099;
                    alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case "6":
                opcionesRopa();
            break;
            case"7":
            break;
            default:
                alert("Opcion invalida. Elija nuevamente.");
                opcionesPrimavera();
            break;
        }
}
//Accesorios
function opcionesAccesorios(){
    let selectAccesorios = prompt("Elija tipo de Accesorios:\n1. Reloj \n2. Anillo\n3. Cadenita\n4. Volver");
        switch (selectAccesorios) {
            case "1":
                opcionesReloj();
            break;
            case "2":
                opcionesAnillo();
            break;
            case "3":  
                opcionesCadenita();
            break;                    
            case "4":
            break;
            default:
                alert("Opcion invalida. Elija nuevamente.");
                opcionesAccesorios();
            break;   
        }
}
//Reloj
function opcionesReloj(){
    let selectReloj=prompt("\n1. Malla Acero-$7.000\n2. Malla Cuero-$5.900 \n3. Inteligente-$5.000 \n4. Casio-$9.000 \n5. Kinetic-$12.000 \n6. Volver a Accesorios  \n7. Volver al menu principal");
    switch(selectReloj){ 
        case"1":
            if(saldo <= 7000){
                alert("Saldo no disponible.")
            }else{
                saldo < 7000;
                saldo -= 7000;
                alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
            }
        break;
        case"2":
            if(saldo <= 5900){
                alert("Saldo no disponible.")
            }else{
                saldo < 5900;
                saldo -= 5900;
                alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
            }
        break;
        case"3":
            if(saldo <= 5000){
                alert("Saldo no disponible.")
            }else{
                saldo < 5000;
                saldo-= 5000;
                alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
            }
        break;
        case"4":
            if(saldo <= 9000){
                alert("Saldo no disponible.")
            }else{
                saldo < 9000;
                saldo-= 9000;
                alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
            }
        break;
        case"5":
            if(saldo <= 12000){
                alert("Saldo no disponible.")
            }else{
                saldo < 12000;
                saldo-= 12000;
                alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
            }
        break;
        case"6":
            opcionesAccesorios();
        break;
        case"7":
        break;
        default:
            alert("Opcion invalida. Elija nuevamente.");
            opcionesReloj();
        break;
    }
}
//Anillo
function opcionesAnillo(){
    let selectAnillo=prompt("\n1. Oro-$12.000 \n2. Plata-$7.490 \n3. Bronce-$5.190 \n4. Casamineto-12.099 \n5. Compromiso-$10.199 \n6.Volver a Accesorios \n7. Volver al menu principal")
    switch(selectAnillo){
        case"1":
            if(saldo <= 12000){
                alert("Saldo no disponible.")
            }else{
                saldo < 12000;
                saldo -= 12000;
                alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
            }
        break;
        case"2":
            if(saldo <= 7490){
                alert("Saldo no disponible.")
            }else{
                saldo < 7490;
                saldo -= 7490;
                alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
            }
        break;
        case"3":
            if(saldo <= 5190){
                alert("Saldo no disponible.")
            }else{
                saldo < 5190;
                saldo-= 5190;
                alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
            }
        break;
        case"4":
            if(saldo <= 12099){
                alert("Saldo no disponible.")
            }else{
                saldo < 12099;
                saldo-= 12099;
                alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
            }
        break;
        case"5":
            if(saldo <= 10199){
                alert("Saldo no disponible.")
            }else{
                saldo < 10199;
                saldo-= 10199;
                alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
            }
        break;
        case"6":
            opcionesAccesorios();
        break;
        case"7":
        break;
        default:
            alert("Opcion invalida. Elija nuevamente.");
            opcionesAnillo();
        break;
    }
}
//Cadenitas
function opcionesCadenita(){
    let selectCadenita=prompt("\n1. Cadena 18k-$13.390 \n2. Bañada en oro-$9.999 \n3.Plata de ley 925 -$8.250 \n4. Chokers-$3.219  \n5. Choker-3.999 \n6. Volver a Accesorios \n7. Volver al menu principalgit ")
        switch(selectCadenita){
            case"1":
                if(saldo <= 13390){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 13390;
                    saldo -= 13390;
                    alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case"2":
                if(saldo <= 9999){
                    alert("Saldo no disponible.")
                }else{
                    saldo <9999;
                    saldo -= 9999;
                    alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case"3":
                saldo-= 8250;
                alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
            break;
            case"4":
                if(saldo <= 3219){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 3219;
                    saldo-= 3219;
                    alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case"5":
                if(saldo <= 3999){
                    alert("Saldo no disponible.")
                }else{
                    saldo < 3999;
                    saldo-= 3999;
                    alert("Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
                }
            break;
            case"6":
                opcionesAccesorios();
            break;
            case"7":
            break; 
            default:
                alert("Opcion invalida. Elija nuevamente.");
                opcionesCadenita();
            break;
        }
}