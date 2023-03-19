const suUsuario = "Lemus";
const suTarjeta = 1234567;
let ingreso = false;

alert("Bienvenid@s a TIENDA ONLINE");

let saldo;

while (true) {
    let apellido = prompt("Ingrese su Apellido");
    if (apellido === suUsuario){
        let saldo = 40000;
        alert("Bienvenido " + apellido);
        for (let i = 2; i >= 0; i--) {
            let tarjeta = parseFloat(prompt("Ingrese su numero de tarjeta. Tiene " + (i + 1) + " oportunidades."));
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
        alert("Apellido de usuario no reconocido");
    }
    if (ingreso) {
    ingresoExitoso();
    break;
    //pausamos la funcion asi no queda el ingreso guardado.
    } else {
    alert("No se pudo acceder a su cuenta.");
    }
}
//FUNCION DE INGRESO
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
//Deportivos
function opcionesDeportivo() {
    let selectDeportivo = prompt("\n1. Nike-$4.000 \n2. Adidas-$3.900 \n3. Under-$5.000 \n4. Puma-$4.900 \n5. New Balance-$5.200 \n6. Volver a Calzados \n7. Volver al menu principal");
        switch (selectDeportivo) {
            case "1":
                procesarCompra(4000);
            break;
            case "2":
                procesarCompra(3900);
            break;
            case "3":
                procesarCompra(5000);
            break;
            case"4":
                procesarCompra(4900);
            break;
            case"5":
                procesarCompra(5200);
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
//Casual
function opcionesCasual() {
    let selectCasual=prompt("\n1. Botas-$5.000 \n2. Nuticas-$4.900 \n3.Sneakers -$6.000 \n4. Levi’s-$5.390 \n5. Converse-$5.999 \n6. Volver a Calzados \n7. Volver al menu principal")
        switch(selectCasual){
            case"1":
                procesarCompra(5000)
            break;
            case"2":
                procesarCompra(4900);
            break;
            case"3":
                procesarCompra(6000);
            break;
            case"4": 
                procesarCompra(5390);
            break;
            case"5":
                procesarCompra(5999);
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
//Formal
function opcionesFormal(){
    let selectFormal=prompt("\n1. Cuero-$7.000 \n2. Zapatos sin cordones-$5.900 \n3. Desert-$6.900 \n4.Oxford-$6.199 \n5.Gaziano & Girling-$10.000 \n6. Volver a Calzados \n7. Volver al menu principal")
        switch(selectFormal){
            case"1":
                procesarCompra(7000);
            break;
            case"2":
                procesarCompra(5900);
                break;
            case"3":
                procesarCompra(6900);
            break;
            case"4":
                procesarCompra(6199);
            break;
            case"5":
                procesarCompra(10000);
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
                procesarCompra(1000);
            break;
            case"2":
                procesarCompra(900);
            break;
            case"3":
                procesarCompra(5000);
            break;
            case"4":
                procesarCompra(590);
            break;
            case"5":
                procesarCompra(890);
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
    let selectVerano=prompt("\n1. Remera-$2.000 \n2. Short-$2.990 \n3. Gorra-$1.090 \n4. Havaianas-$390 \n5. Bermuda-$1.290 \n6. Volver a Ropa \n7. Volver al menu principal")
        switch(selectVerano){
            case"1":
                procesarCompra(2000);
            break;
            case"2":
                procesarCompra(2990);
            break;
            case"3":
                procesarCompra(1090);
            break;
            case"4":
                procesarCompra(390);
            break;
            case"5":
                procesarCompra(1290);
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
                procesarCompra(2390);
            break;
            case"2":
                procesarCompra(3999)
            break;
            case"3":
                procesarCompra(4900);
            break;
            case"4":
                procesarCompra(2190);
            break;
            case"5":
                procesarCompra(1099);
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
//ACCESORIOS
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
            procesarCompra(7000);
        break;
        case"2":
            procesarCompra(5900);
        break;
        case"3":
            procesarCompra(5000);
        break;
        case"4":
            procesarCompra(9000);
        break;
        case"5":
            procesarCompra(12000);
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
            procesarCompra(12000);
        break;
        case"2":
            procesarCompra(7490);
        break;
        case"3":
            procesarCompra(5190);
        break;
        case"4":
            procesarCompra(12099);
        break;
        case"5":
            procesarCompra(10199);
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
    let selectCadenita=prompt("\n1. Cadena 18k-$13.390 \n2. Bañada en oro-$9.999 \n3.Plata de ley 925 -$8.250 \n4. Chokers-$3.219  \n5. Choker-3.999 \n6. Volver a Accesorios \n7. Volver al menu principal")
        switch(selectCadenita){
            case"1":
                procesarCompra(13390);
            break;
            case"2":
                procesarCompra(9999);
            break;
            case"3":
                procesarCompra(8250);
            break;
            case"4":
                procesarCompra(3219);
            break;
            case"5":
                procesarCompra(3999);
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
//FUNCION DE COMPRA
function procesarCompra(precio){
    if(saldo < precio){
        alert("Saldo no disponible." + " Saldo actual: $" + saldo);
    }else{
        saldo -= precio;
        alert(" Gracias por su compra!. " + "Su saldo es de " + "$" + saldo);
    }
}