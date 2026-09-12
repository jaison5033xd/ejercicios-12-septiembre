import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese su nombre: ", (nombre) => {
    rl.question("Ingrese la cantidad de boletos que desea comprar: ", (cantidad) => {
        let cantidadBoletos = parseInt(cantidad);
        let total = 0;

    console.log("1. 1. San Salvador  $5.50");
    console.log("2. Santa Ana     $8.00");
    console.log("3. La Unión      $4.25");
    console.log("4. Usulután      $3.50");

        rl.question("Ingrese el numero del destino que desea: ", (destino) => { 

    switch (destino) {
        case "1":
            let totalSanSalvador = cantidadBoletos * 5.50;
            total += totalSanSalvador;
        break;
        case "2":
            let totalSantaAna = cantidadBoletos * 8.00;
            total += totalSantaAna;
        break;
        case "3":
            let totalLaUnion = cantidadBoletos * 4.25;
            total += totalLaUnion;
        break;
        case "4":
            let totalUsulutan = cantidadBoletos * 3.50;
            total += totalUsulutan;
        break;
        default:
            console.log("Opcion no valida");
    }
    console.log("Detalle de la compra:");
    console.log("Nombre del cliente: " + nombre);
    console.log("Cantidad de boletos: " + cantidadBoletos);
    console.log("Total a pagar: $" + total.toFixed(2));
    rl.close();
    });
    });
    });