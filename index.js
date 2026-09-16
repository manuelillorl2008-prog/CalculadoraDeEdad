let continuar = "si";
let nombre = "";
let apellido = "";

while (continuar.toLowerCase() === "si") {
  nombre = prompt("Ingrese su nombre:");
  apellido = prompt("Ingrese su apellido:");
  const anioNacimiento = parseInt(prompt("Ingrese su año de nacimiento:"), 10);

  const anioActual = new Date().getFullYear();
  const edad = anioActual - anioNacimiento;
  const esMayorDeEdad = edad >= 18;

  if (esMayorDeEdad) {
    alert(`Hola ${nombre} ${apellido}, usted es mayor de edad ya que tiene ${edad} años porque nació en el año ${anioNacimiento}.`);
  } else {
    alert(`Hola ${nombre} ${apellido}, usted es menor de edad ya que tiene ${edad} años porque nació en el año ${anioNacimiento}.`);
  }

  continuar = prompt("¿Quieres calcular tu edad otra vez? (si/no)");
}

alert(`Gracias por usar el programa, ${nombre} ${apellido}.`);
