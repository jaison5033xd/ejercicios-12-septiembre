import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese el nombre del trabajador: ", (nombre) => {
rl.question("Ingrese la cantidad de horas trabajadas: ", (horasTrabajadas) => {

    let trabajador = nombre;
    let horas = parseInt(horasTrabajadas);

    console.log("Seleccione su turno");
    console.log("1. Turno matutino");
    console.log("2. Turno vespertino");
    console.log("3. Turno nocturno");

    rl.question("Seleccione una opcion del menu (1, 2, 3): ", (opcion) => {

    let total;

    switch(opcion){
        case "1":
            total = horas * 4.50;
            break;
            case "2":
            total = horas * 5.25;
            break;
            case "3":
            total = horas * 6.00;
            break;

        default:
            console.log("Opcion no valida");
    }

    console.log("DETALLE DEL PAGO");
    console.log(`Trabajador: ${nombre.toUpperCase()}`);
    console.log(`Cantidad de horas trabajadas: ${horas}`);
    console.log(`Total a pagar: ${total.toFixed(2)}`);
    rl.close();
      }); 
    });   
  });   