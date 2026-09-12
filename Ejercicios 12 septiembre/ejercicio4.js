import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Bienvenido ingrese su nombre: ", (nombre) => {
    rl.question("Ingrese la cantidad de horas trabajadas: ", (cantidad) => {
        let cantidadHoras = parseInt(cantidad);
        let turnoSeleccionado = "";
        let total = 0;

    console.log("1. Turno matutino    $4.50 por hora");
    console.log("2. Turno vespertino  $5.25 por hora");
    console.log("3. Turno nocturno    $6.00 por hora");

    rl.question("Ingrese el numero del turno que desea: ", (turno) => {

        switch (turno) {
            case "1":
                let totalMatutino = cantidadHoras * 4.50;
                total += totalMatutino;
                turnoSeleccionado = "Matutino";
            break;
            case "2":
                let totalVespertino = cantidadHoras * 5.25;
                total += totalVespertino;
                turnoSeleccionado = "Vespertino";
            break;  
            case "3":
                let totalNocturno = cantidadHoras * 6.00;
                total += totalNocturno;
                turnoSeleccionado = "Nocturno";
            break;
            default:
                console.log("Opcion no valida");
        }

        console.log("Detalle de su salario:");
        console.log("Nombre del empleado: " + nombre.toUpperCase());
        console.log("Turno seleccionado: " + turnoSeleccionado);
        console.log("Precio por hora: $" + (total / cantidadHoras).toFixed(2));
        console.log("Cantidad de horas trabajadas: " + cantidadHoras);
        console.log("Total a pagar: $" + total.toFixed(2));
        rl.close();
    });
});
});