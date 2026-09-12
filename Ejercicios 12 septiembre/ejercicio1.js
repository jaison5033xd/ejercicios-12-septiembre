import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Bienvenido ingrese su nombre: ", (nombre) => {
    rl.question("Ingrese la cantidad de bebidas que llevara: ", (cantidad) => {
        let cantidadBebidas = parseInt(cantidad);
        let total = 0;

        console.log("1. Cafe $1.50");
        console.log("2. Chocolate $2.00");
        console.log("3. Te $1.25");
        console.log("4. Jugo natural $2.50");

        rl.question("Ingrese el numero de la bebida que desea: ", (bebida) => {

        switch (bebida) {
            case "1":
                let totalCafe = cantidadBebidas * 1.50;
                total += totalCafe;
            break;
            case "2":
                let totalChocolate = cantidadBebidas * 2.00;
                total += totalChocolate;
            break;
            case "3":
                let totalTe = cantidadBebidas * 1.25;
                total += totalTe;
            break;
            case "4":
                let totalJugo = cantidadBebidas * 2.50;
                total += totalJugo;
            break;
            default:
                console.log("Opcion no valida");
        }
    console.log("Detalle de la compra:");
    console.log("Nombre del cliente: " + nombre);
    console.log("Cantidad de bebidas: " + cantidadBebidas);
    console.log("Total a pagar: $" + total.toFixed(2));
    rl.close();
    });
    });
});





