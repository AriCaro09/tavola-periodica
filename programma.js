
let Idrogeno = {};

Idrogeno.simbolo = "H"
Idrogeno.numeroAtomico = 1;
Idrogeno.nome = "idrogeno"

let elio = {};

elio.simbolo = "He";
elio.numeroAtomico = 2;
elio.nome = "elio";
 
let elementi = [Idrogeno, elio];

for (const element of elementi) {
    let contenitore = document.getElementById('contenitore');


let cella = document.createElement('div');
cella.style.borderStyle = 'solid';
cella.style.width = '70px';

let numeroAtomico = document.createElement('p');
numeroAtomico.innerText = element.numeroAtomico;
cella.appendChild(numeroAtomico);

let simbolo = document.createElement('a');
simbolo.innerText = element.simbolo;
cella.appendChild(simbolo);

let nome = document.createElement('p');
nome.innerText = element.nome;
cella.appendChild(nome);

contenitore.appendChild(cella);
}



