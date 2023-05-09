namespace Prueba
{
    export class Alumno extends Persona
    {
        protected legajo:number;

        public constructor(nombre:string, apellido:string, legajo:number)
        {
            super(nombre,apellido);
            this.legajo = legajo;
        }

        public ToString():string 
        {
            return  super.ToString()+"-"+this.legajo;
        }
    }
}