namespace Prueba
{
    export class Persona
    {
        protected apellido:string;
        protected nombre:string;

        public constructor(nombre:string, apellido:string)
        {
            this.apellido = apellido;
            this.nombre = nombre;
        }
        
        public ToString():string
        {
            return this.apellido +"-"+ this.nombre;
        }
    }
}