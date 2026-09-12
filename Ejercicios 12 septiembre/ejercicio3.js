import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Bienvenido ingrese su nombre: ", (nombre) => {
    rl.question("Ingrese la cantidad de entradas que llevara: ", (cantidad) => {
        let cantidadEntradas = parseInt(cantidad);
        let precioUnitario = 0;
        let total = 0;

        console.log("1. Entrada general       $6.00");
        console.log("2. Entrada preferencial  $10.00");
        console.log("3. Entrada VIP           $15.00");

        rl.question("Ingrese el numero de la entrada que desea: ", (entrada) => {

        switch (entrada) {
            case "1":
                precioUnitario = 6.00;
                let totalGeneral = cantidadEntradas * precioUnitario;
                total += totalGeneral;
            break;
            case "2":
                precioUnitario = 10.00;
                let totalPreferencial = cantidadEntradas * precioUnitario;
                total += totalPreferencial;
            break;  
            case "3":
                precioUnitario = 15.00;
                let totalVIP = cantidadEntradas * precioUnitario;
                total += totalVIP;
            break;
            default:
                console.log("Opcion no valida");
        }
        console.log("Detalle de la compra:");   
    console.log("Nombre del cliente: " + nombre.toUpperCase());
    console.log("Cantidad de entradas: " + cantidadEntradas);
    console.log("Precio unitario: $" + precioUnitario.toFixed(2));
    console.log("Total a pagar: $" + total.toFixed(2));
    rl.close();
    });
    });
    });