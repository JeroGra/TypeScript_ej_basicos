function MostrarNombreApellido(nombre:string,apellido:string)
{
    apellido = apellido.toLowerCase();
    nombre = nombre.toLowerCase();

    apellido =  apellido.charAt(0).toUpperCase() + apellido.slice(1);
    nombre = nombre.toUpperCase();
    console.log(`${nombre}, ${apellido}`);
}

MostrarNombreApellido("jeRo","gRa");