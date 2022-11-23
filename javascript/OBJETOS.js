function marcaCarro(marca,modelo,ano,){

   return{marca,modelo,ano
    };
}

const carro1=marcaCarro("Chevrolet","Onix",2023);
const carro2=marcaCarro("BMW","BMW M2",2016);
const carro3=marcaCarro("Ferrari","Ferrari Spider",2001);

console.log(carro1.marca ,carro2.marca,carro3.marca);
console.log(carro1.modelo ,carro2.modelo,carro3.modelo);
console.log(carro1.ano ,carro2.ano,carro3.ano);

