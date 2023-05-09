enum Meses {
    Enero = 1,
    Febrero = 2,
    Marzo = 3,
    Abril = 4,
    Mayo = 5,
    Junio = 6,
    Julio = 7,
    Agosto = 8,
    Semptiempre = 9,
    Octubre = 10,
    Noviembre = 11,
    Diciembre = 12
};

let meses : Meses[] = [1,2,3,4,5,6,7,8,9,10,11,12];

for(let i = 0;i < 12;i++)
{
    console.log(`${Meses[meses[i]]}, es el mes ${meses[i]}`);

};
