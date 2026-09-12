import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("CONVERSION DE MEDIDAS:");
console.log("1. Metros a centimetros");
console.log("2. Kilometros a metros");
console.log("3. Horas a minutos");
console.log("4. Dias a horas");

rl.question("Seleccione una de las opciones ingresando el numero (Eje: 1, 2, 3 o 4) ", (option) =>{
    rl.question("Ingrese el valor a convertir: ", (dato) => {

        let cantidad = Number(dato)
        let resultado;

        switch(option){
            case "1":
                resultado = cantidad * 100;
                console.log(`Resultado: ${resultado} centimetros`);
                break;
            case "2":
                resultado = cantidad * 1000;
                console.log(`Resultado: ${resultado} metros`);
                break;
            case "3":
                resultado = cantidad * 60;
                console.log(`Resultado: ${resultado} minutos`);
                break;
            case "4":
                resultado = cantidad * 24;
                console.log(`Resultado: ${resultado} horas`);
                break;
            
            default:
                console.log("Opción no válida");
        }
        rl.close();
    });
});
