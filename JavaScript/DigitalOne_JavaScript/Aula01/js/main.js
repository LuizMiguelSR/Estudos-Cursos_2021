
function clicou(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"; 
    //console.log(document.getElementById("agradecimento"));  
}
function redirecionar(){
    window.open("https://www.urionlinejudge.com.br/judge/pt"); 
    //window.location.href="https://www.urionlinejudge.com.br/judge/pt";
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>";
    elemento.innerHTML = "<b>Obrigado por passar o mouse</b>";
    //alert("Trocar texto");
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
    //alert("Trocar texto");
}
function load(){
    alert("Página carregada");
}
/*Function
function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

function validar(idade){
    var validar;
    if (idade >=18){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual sua idade?","Digite sua idade aqui");
console.log(validar(idade));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
alert(soma(5,10));*/

/*Trabalhando com date
var d = new Date();
alert(d);
alert(d.getFullYear());
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
if(d.getDay()==1){
    var dia = "segunda";
} else if (d.getDay()==2){
    var dia = "terça";
} else if (d.getDay()==3){
    var dia = "quarta";
} else if (d.getDay()==4){
    var dia = "quinta";
} else if (d.getDay()==5){
    var dia = "sexta";
} else if (d.getDay()==6){
    var dia = "sábado";
} else if (d.getDay()==7){
    var dia = "domingo";
}
document.write("Dia da semana "+dia+", dia "+d.getDate()+", mês "+(d.getMonth()+1)+", ano "+d.getFullYear());*/

/*Repetição for
var count;
for (count = 0; count <= 5; count++){
    console.log(count);
}*/

/*Repetição while
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
}*/

/*Condicional
var idade = prompt("Qual a sua idade: ");
//var idade = 18;
if(idade >= 18){
    alert("Maior de idade");
} else {
    alert("Menor de idade");
}*/

/*Array
var frutas = [{nome:"MaÃ§a", cor:"Vermelha"},{nome:"uva", cor:"roxo"}]
console.log(frutas);
console.log(frutas[1].cor);
alert(frutas[1].cor);
var fruta = {nome:"MaÃ§a", cor:"Vermelha"}
console.log(fruta);
console.log(fruta.cor);
alert(fruta.cor);

var lista = ["maÃ§a", "pÃªra", "laranja"];
lista.push("uva");
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.toString());
console.log(lista.join(" - "));
console.log(lista.reverse());
alert(lista[1]);*/

/*Variáveis
var nome = "Luiz Miguel";
var idade = 31;
alert(nome + " tem "+idade+" anos.");
var frase = "Japao e o melhor time";
console.log (nome);
console.log (idade);
console.log (frase.replace("Japao", "Brasil"));
console.log (frase.toLocaleLowerCase("Brasil"));*/