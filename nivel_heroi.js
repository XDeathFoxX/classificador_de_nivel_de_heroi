/*Instruções para entrega
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**" 
Bons estudos 😉
*/
console.log("     _       _________          _______  _          ______   _______ ")
console.log("    ( (    /|\\__   __/|\\     /|(  ____ \\( \\        (  __  \\ (  ____ \\ ")
console.log("    |  \\  ( |   ) (   | )   ( || (    \\/| (        | (  \\  )| (    \\/ ")
console.log("    |   \\ | |   | |   | |   | || (__    | |        | |   ) || (__     ")
console.log("    | (\\ \\) |   | |   ( (   ) )|  __)   | |        | |   | ||  __)    ")
console.log("    | | \\   |   | |    \\ \\_/ / | (      | |        | |   ) || (       ")
console.log("    | )  \\  |___) (___  \\   /  | (____/\\| (____/\\  | (__/  )| (____/\\ ")
console.log("    |/    )_)\\_______/   \\_/   (_______/(_______/  (______/ (_______/ ")
console.log("                                                                     ")
console.log("              _______  _______  _______ _________ ")
console.log("    |\\     /|(  ____ \\(  ____ )(  ___  )\\__   __/ ")
console.log("    | )   ( || (    \\/| (    )|| (   ) |   ) (    ")
console.log("    | (___) || (__    | (____)|| |   | |   | |    ")
console.log("    |  ___  ||  __)   |     __)| |   | |   | |    ")
console.log("    | (   ) || (      | (\\ (   | |   | |   | |    ")
console.log("    | )   ( || (____/\\| ) \\ \\__| (___) |___) (___ ")
console.log("    |/     \\|(_______/|/   \\__/(_______)\\_______/ ")
                                                 
    
var numeroAleatorio = Math.floor(Math.random() * 1150);

const read = require('readline-sync');
const cores = require('colors');

var nome_heroi = read.question("Digite o nome do herói: ")
console.log(nome_heroi)
nome_heroi = nome_heroi.charAt(0).toUpperCase() + nome_heroi.slice(1);
var xp_heroi = Number(read.question("Digite o xp inicial do herói (Entre 0 até 900):  "))
console.log(xp_heroi)

while (xp_heroi < 10001){
    xp_heroi = xp_heroi + numeroAleatorio
    var nivel_heroi = "";

    if (xp_heroi < 1000)
        nivel_heroi = "Ferro";
    else if (xp_heroi >= 1001 && xp_heroi <=2000)
        nivel_heroi = "Bronze";
    else if (xp_heroi >= 2001 && xp_heroi <=5000)
        nivel_heroi = "Prata";
    else if (xp_heroi >= 5001 && xp_heroi <= 7000)
        nivel_heroi = "Ouro";
    else if (xp_heroi >= 7001 && xp_heroi <= 8000)
        nivel_heroi = "Platina";
    else if (xp_heroi >= 8001 && xp_heroi <= 9000)
        nivel_heroi = "Ascendente";
    else if (xp_heroi >= 9001 && xp_heroi <= 10000)
        nivel_heroi = "Imortal";
    else if (xp_heroi >= 10001)
        nivel_heroi = "Radiante";

    if (nivel_heroi == "Ferro")
        nivel_heroi = nivel_heroi.blue

    else if (nivel_heroi == "Bronze")
        nivel_heroi = nivel_heroi.cyan

    else if (nivel_heroi == "Prata")
        nivel_heroi = nivel_heroi.grey

    else if (nivel_heroi == "Ouro")
        nivel_heroi = nivel_heroi.yellow

    else if (nivel_heroi == "Platina")
        nivel_heroi = nivel_heroi.green

    else if (nivel_heroi == "Ascendente")
        nivel_heroi = nivel_heroi.magenta

    else if (nivel_heroi == "Imortal")
        nivel_heroi = nivel_heroi.red

    else if (nivel_heroi == "Radiante")
        nivel_heroi = nivel_heroi.rainbow

    console.log("O herói "+ nome_heroi + " está no nível " + nivel_heroi + " com xp total de : " + xp_heroi)
    console.log("")
    }
