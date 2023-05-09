namespace Ej_01
{
    export class Rectangulo
    {
        private area : number;
        private ladoUno : number;
        private ladoDos : number;
        private perimetro : number;
        private vertice1 : Punto;
        private vertice2 : Punto;
        private vertice3 : Punto;
        private vertice4 : Punto;
    
        public constructor(v1:Punto,v3:Punto)
        {
            this.vertice1 = v1;
            this.vertice3 = v3;
    
            this.ladoUno = v1.GetY - v3.GetY;
            this.ladoDos = v3.GetX - v1.GetX;
            this.vertice2 = new Punto(v1.GetX,v3.GetY);
            this.vertice4 = new Punto(v3.GetX, v1.GetY);
            this.perimetro = 2*this.ladoUno + 2*this.ladoDos;
            this.area = this.ladoUno * this.ladoDos;
        }
    
        public get Area():number
        {
            return this.area;
        }
    
        public get Perimetro():number
        {
            return this.perimetro;
        }
    
        public ToString():string
        {
            return `\n
            Vertice Uno: (${this.vertice1.GetX},${this.vertice1.GetY})\n
            Vertice Dos: (${this.vertice2.GetX},${this.vertice2.GetY})\n
            Vertice Tres: (${this.vertice3.GetX},${this.vertice3.GetY})\n
            Vertice Cuatro: (${this.vertice4.GetX},${this.vertice4.GetY})\n
            Lado Uno: ${this.ladoUno}\n
            Lado Dos: ${this.ladoDos}\n
            Area: ${this.area}\n
            Perimetro:${this.perimetro}\n`; 
        }
    
        public Dibujito():string
        {
            let ancho ="";
    
            for(let i = 0;i<this.ladoDos;i++)
            {
                ancho += "*";
            }
    

            for(let i = 0; i<this.ladoUno;i++)
            {  
                ancho += "\n"+ ancho;
            }
            //console.log(ancho);
            alert(ancho);
            

            for(let i = 0; i<this.ladoUno;i++)
            {
                ancho = ancho.replace("\n","</br>");
            }
            return ancho;
        }
    }
}

