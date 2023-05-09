class EsCeroPelotudx extends Error
{

}

function Cubo(num:number):number
{
    return Math.pow(num,3);
}

function Primeros20Primos():string
{
    let primos:string = "";
    let cont=0;
    for(let i = 2, max = i+1 ; i<max ;i++)
    {

        if(CalcularPrimo(i))
        {
            primos = primos+`, ${i}`;
            cont++;
            if(cont == 20)
            {
                break;
            }
        
        }
        max++;
    }
    return primos;
}

function CalcularPrimo(num:number):any
{
    let esPrimo = true;
    for(let i = 1;i<num;i++)
    {
        if((num%i == 0)&&(i!=1))
        {
            esPrimo = false;
            break;
        }              
    }

    return esPrimo;
}

function Factorial(num:number):number
{
    let factorial:number = 1;
    for(let i = 1;i<=num;i++)
    {
        factorial = factorial*i;
    }

    return factorial;
}
function QUIEROUNNUMERO(num:number):string
{
    let respuesta;
    if(num>0)
    {
        respuesta = `El factorial de ${num} es ${Factorial(num)}`;
    }
    else
    {
        if(num<0)
        {
            respuesta = `El Cubo de ${num} es ${Cubo(num)}`;
        }
        else
        {
            throw new EsCeroPelotudx();
        }

    }

    return respuesta;
}
console.log(`Cubo de ${9} es ${Cubo(9)}`);
console.log(Primeros20Primos());
console.log(`Factorial de ${5} es ${Factorial(5)}`);
try
{
 console.log(QUIEROUNNUMERO(-9));
}
catch(EsCeroPelotudx)
{
 console.log("ERROR NO PODEMOS CALCULAR EL CUBO NI EL FACTORIAL DE 0");
}