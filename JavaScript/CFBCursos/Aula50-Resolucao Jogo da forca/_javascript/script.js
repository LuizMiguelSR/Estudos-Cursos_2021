// Variáveis criadas a partir de TAGS HTML;

var tagDica = document.querySelector("#tagDica");
var tagPalavra = document.querySelector("#tagPalavra");
var tagTotErros = document.querySelector("#tagTotErros");
var tagBtSorteiaPalavra = document.querySelector("#tagBtSorteiaPalavra");
var tagAdivinhaLetra = document.querySelector("#tagAdivinhaLetra");
var tagBtVerificaLetra = document.querySelector("#tagBtVerificaLetra");

// =======================================================================



// Variáveis auxiliares; 

var palavras = [
    ["japão","É um país"],
    ["os miseráveis","Nome de um livro"],
    ["miguel de cervantes","Nome de um escritor"],
    ["bicicleta","É um meio de transporte"],
    ["são paulo","É uma cidade"],
    ["o exterminador do futuro","É um filme"],
    ["jennifer lawrence","É uma atriz"],
    ["elefante","É um animal"],
    ];

var linhaSorteada;
var numLetras; 
var escondePalavra = [[],[]];
var palavraSorteada;  
var dicaPalavraSorteada; 
var letrasBloqueadas = [];
var contErros = 0;

// ===================================================================


inicio();

// Função padrão de início de código;

function inicio(){

tagAdivinhaLetra.addEventListener("input",function(){

verificaValorTagLetra();    

});

tagBtVerificaLetra.addEventListener("click",function(){ 

verificaLetraEnviada(tagAdivinhaLetra.value);

});

tagBtSorteiaPalavra.addEventListener("click",iniciaJogada);

iniciaJogada();

}

// ===============================================================


// Função que faz os preparativos para que o jogo seja iniciado;

function iniciaJogada(){

letrasBloqueadas = [];
contErros = 0;    

switchEstadoElemento(tagAdivinhaLetra,false);
verificaValorTagLetra();
switchEstadoElemento(tagBtSorteiaPalavra,true);


definePalavra();
preencheHTML(tagDica,dicaPalavraSorteada);

preencheVetorEscondePalavra();

preencheHTML(tagPalavra,escondePalavra[1].join("  "));
preencheHTML(tagTotErros,contErros);

exibeMsg("Digite a letra desejada e clique em enviar");

}

// ===========================================================


// Função que verifica o valor digitado na tag tagAdivinhaLetra;

function verificaValorTagLetra(){


if(
tagAdivinhaLetra.value == " " || 
tagAdivinhaLetra.value == "" || 
tagAdivinhaLetra.value == null || 
tagAdivinhaLetra.value == undefined ||
letrasBloqueadas.indexOf(tagAdivinhaLetra.value) != -1
)
switchEstadoElemento(tagBtVerificaLetra,true);
else
switchEstadoElemento(tagBtVerificaLetra,false);

}

// =============================================================


// Função que sorteia a palavra;

function definePalavra(){

linhaSorteada = Math.round((Math.random() * (palavras.length - 1)));
numLetras = (palavras[linhaSorteada][0].length) - (contaEspacos(palavras[linhaSorteada][0]));

palavraSorteada = palavras[linhaSorteada][0];
dicaPalavraSorteada = palavras[linhaSorteada][1] + " com " + numLetras + " letras.";

}

// ================================================================================================


// Função que preenche a variável escondePalavra;

function preencheVetorEscondePalavra(){

escondePalavra[0] = [];
escondePalavra[1] = [];

for(var x = 0; x < palavraSorteada.length; x++){


if(!(palavraSorteada[x].localeCompare(" "))){

escondePalavra[0].push(true);
escondePalavra[1].push("<div class = 'letra desabilitado'></div>");

}else{

escondePalavra[0].push(false);
escondePalavra[1].push("<div class = 'letra'></div>");

}
}

} 

// ==========================================================================


// Função que atualiza os valores da tag esconde palavra;

function atualizaVetorEscondePalavra(i,l){

escondePalavra[0][i] = true;
escondePalavra[1][i] = "<div class = 'letra'>" + l + "</div>"; 

}


// ==============================================================


// Função que preenche um elemento HTML de acordo com os parâmetros passados;

function preencheHTML(ele,txt){

ele.innerHTML = txt;

}

// ============================================================================


// Função que conta quantos espaços a palavra sorteada poosui;

function contaEspacos(d){

var res = d.match(/ /g);

if(res == null)
return 0;
else
return res.length;

}

// ============================================================


// Função que verifica se a letra enviada está presente na palavra;

function verificaLetraEnviada(l){

var letra = (l).toLocaleLowerCase();
letrasBloqueadas.push(letra);
verificaValorTagLetra();

var acerto = false;


while(palavraSorteada.indexOf(letra) != -1){

acerto = true;

var i = palavraSorteada.indexOf(letra);

atualizaVetorEscondePalavra(i,letra);    


palavraSorteada = palavraSorteada.replace(letra," ");

}



if(acerto){

preencheHTML(tagPalavra,escondePalavra[1].join("  "));
exibeMsg("Você acertou a letra!");


if(escondePalavra[0].indexOf(false) == -1)
finalizaJogo(true);
else
verificaAcaoUsuario();   

}else{

contErros++;
preencheHTML(tagTotErros,contErros);
exibeMsg("Você errou a letra!");
    
if(contErros == 4)
finalizaJogo(false);
else
exibeMsg("Digite a letra desejada e clique em enviar");

}

}

// ===========================================================================


// Função que verifica se a palavra enviada está correta;

function verificaPalavraEnviada(pl){

var palavra = (pl).toLocaleLowerCase();

if(!((palavra).localeCompare(palavras[linhaSorteada][0]))){


for(var x = 0; x < palavra.length; x++){

if(!(escondePalavra[0][x])){

atualizaVetorEscondePalavra(x,palavra[x]);    

}    

}


preencheHTML(tagPalavra,escondePalavra[1].join("  "));
exibeMsg("Você acertou a palavra!");
finalizaJogo(true);

}else{

exibeMsg("Você errou a palavra!");
finalizaJogo(false);   

}
}

// =============================================================================


// Função que exibe uma mensagem de alerta na tela;

function exibeMsg(msg){


alert(msg); 

}


function verificaAcaoUsuario(){

var acao = confirm("Deseja adivinhar a palavra?");

if(acao)
verificaPalavraEnviada(prompt("Digite a palavra e clique em ok","Digite a palavra aqui"));    
else
exibeMsg("Digite a letra desejada e clique em enviar");

}

// ========================================================================================


// Função que habilita/desabilita um elemento;

function switchEstadoElemento(tag,valor){

tag.disabled = valor; 

}

// ==============================================


// Função que finaliza o jogo;

function finalizaJogo(v){

if(v)
exibeMsg("Você venceu, Parabéns!");
else
exibeMsg("Que pena, você perdeu.");

if(v)
palavras.splice(linhaSorteada,1);

switchEstadoElemento(tagAdivinhaLetra,true);
switchEstadoElemento(tagBtVerificaLetra,true);

switchEstadoElemento(tagBtSorteiaPalavra,!(palavras.length));

if(palavras.length)
exibeMsg("Sorteie outra palavra para jogar novamente");
else
exibeMsg("Todas as palavras já foram sorteadas\nAtualize a página para jogar novamente");

}

// =========================================================================================