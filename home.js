const botaovermelho = document.getElementById('botaovermelho');
const botaoamarelo = document.getElementById('botaoamarelo');
const botaoverde = document.getElementById('botaoverde');
const img = document.getElementById('img');
const botaorecarregar = document.getElementById('botaorecarregar')


function vermelhoOn() {
    img.src = './img/vermelho.png'
}

function amareloOn() {
    img.src = './img/amarelo.png'
}

function verdeON() {
    img.src = './img/verde.png'

}


function botaorecarregarOn() {
    img.src = './img/desligado.png'
}

botaovermelho.addEventListener('click', vermelhoOn);
botaoamarelo.addEventListener('click', amareloOn);
botaoverde.addEventListener('click', verdeON);
botaorecarregar.addEventListener('click', botaorecarregarOn);