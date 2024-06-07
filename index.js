const entradaDados = require('readline-sync');

let salarioMinimo = [
    {ano: 2010, salario: 510.00},
    {ano: 2011, salario: 545.00},
    {ano: 2012, salario: 622.00},
    {ano: 2013, salario: 678.00},
    {ano: 2014, salario: 724.00},
    {ano: 2015, salario: 788.00},
    {ano: 2016, salario: 880.00},
    {ano: 2017, salario: 937.00},
    {ano: 2018, salario: 954.00},
    {ano: 2019, salario: 998.00},
    {ano: 2020, salario: 1045.00},
    {ano: 2021, salario: 1100.00},
    {ano: 2022, salario: 1212.00},
    {ano: 2023, salario: 1320.00},
    {ano: 2024, salario: 1412.00}

];

let Inflacao = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52},
    {ano: 2021, ipca: 10.06},
    {ano: 2022, ipca: 5.79},
    {ano: 2023, ipca: 4.62},
    {ano: 2024, ipca: 1.80}
];

console.log("\nEscolha uma das alternativas: \n");

console.log("1 - Listar os salários mínimos de 2010 à 2020");
console.log("2 - Listar o IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");

let escolha = entradaDados.question("\nDigite o numero da sua escolha: ");

let AnoLabel = "Ano: ";
let SalarioLabel = "Salário mínimo: ";
let CresciSalarioLabel = "Crescimento Salarial: ";
let InflacaoLabel = "Inflação IPCA: ";

AnoLabel = AnoLabel.padEnd(30, '.');
SalarioLabel = SalarioLabel.padEnd(30, '.');
CresciSalarioLabel = CresciSalarioLabel.padEnd(30, '.');
InflacaoLabel = InflacaoLabel.padEnd(30, '.');

if(Number(escolha) == 1){
    for(let contador = 0; contador < salarioMinimo.length; contador++){

        let Ano = salarioMinimo[contador].ano.toString();
        let SalarioM = salarioMinimo[contador].salario.toFixed(2).toString().replace(".",",");

        console.log("\n" +AnoLabel + Ano);
        console.log(SalarioLabel +"R$: " + SalarioM +"\n");
    }
}

else if(Number(escolha) == 2){
    for(let contador = 0; contador < Inflacao.length; contador++){

        let Ano = Inflacao[contador].ano.toString();
        let Ipca = Inflacao[contador].ipca.toFixed(2).toString().replace(".",",");

        console.log("\n" +AnoLabel + Ano);
        console.log(InflacaoLabel + Ipca +"%\n");
    }
}

else if(Number(escolha) == 3){

    for(let contador = 0; contador < salarioMinimo.length; contador++){

        let Ano = salarioMinimo[contador].ano.toString();
        let SalarioM = salarioMinimo[contador].salario.toFixed(2).toString().replace(".",",");
        
        let contAnterior = contador == 0 ? 0 : contador - 1;
        
        let DiffSalarioM = salarioMinimo[contador].salario - salarioMinimo[contAnterior].salario;
        let CresciSalarioM = (DiffSalarioM / salarioMinimo[contAnterior].salario) * 100;

        CresciSalarioM = CresciSalarioM.toFixed(2).toString().replace(".",",");

        let Ipca = Inflacao[contador].ipca.toFixed(2).toString().replace(".",",");

        console.log("\n" + AnoLabel + Ano);
        console.log(SalarioLabel +"R$: " + SalarioM);
        console.log(CresciSalarioLabel + CresciSalarioM + "%");
        console.log(InflacaoLabel + Ipca +"%\n");

    }
}

else if(Number(escolha) > 3){
    console.log("\nNão temos essa opção. Escolha um número de 1 a 3\n");
}

else {
    console.log("\nOpção inválida. Escolha apenas números de 1 a 3\n");
}