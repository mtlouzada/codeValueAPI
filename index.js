import entradaDados from 'readline-sync';

let opcao1  = 1;
let opcao2 = 2;
let opcao3 = 3;

var salarioMinimo = [
    {ano: 2010, salario: 510.00},
    {ano: 2011, salario: 510.00},
    {ano: 2012, salario: 510.00},
    {ano: 2013, salario: 510.00},
    {ano: 2014, salario: 510.00},
    {ano: 2015, salario: 510.00},
    {ano: 2016, salario: 510.00},
    {ano: 2017, salario: 510.00},
    {ano: 2018, salario: 510.00},
    {ano: 2019, salario: 510.00},
    {ano: 2020, salario: 510.00}
];

var precoInflacao = [
    {ano: 2010, ipca: 510.00},
    {ano: 2011, ipca: 510.00},
    {ano: 2012, ipca: 510.00},
    {ano: 2013, ipca: 510.00},
    {ano: 2014, ipca: 510.00},
    {ano: 2015, ipca: 510.00},
    {ano: 2016, ipca: 510.00},
    {ano: 2017, ipca: 510.00},
    {ano: 2018, ipca: 510.00},
    {ano: 2019, ipca: 510.00},
    {ano: 2020, ipca: 510.00}
];

console.log("\nEscolha uma das alternativas: \n");
console.log("1 - Listar os salários mínimos de 2010 à 2020");
console.log("2 - Listar o IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");

console.log("\nDigite o número da sua escolha: \n")

