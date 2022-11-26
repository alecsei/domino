enum lugar {
  Jogador01 = 0,
  Jogador02  = 1,
  Mesa = 2,
  Monte = 3
}

let pecas: peca[] = [];

for( var x: number = 0; x<=6; x++){
  for(var y: number = 0; y<=6; y++){
    pecas.push({numero01: x, numero02: y,comQuem: lugar.Monte});
  }
  
}

SorteiaPeca(lugar.Jogador01);
SorteiaPeca(lugar.Jogador02);

console.log(pecas.filter( pmonte => (pmonte.comQuem == lugar.Jogador01)));

function SorteiaPeca(paraQuem: lugar):void{

for(var x: number=0; x<=6; x++)
{
  let pecasNoMonte = pecas.filter( pmonte => (pmonte.comQuem != paraQuem));
  let randPeca: number  = Math.trunc( Math.random() * pecasNoMonte.length-1);
  pecas[randPeca].comQuem = paraQuem;
}
 

}

interface peca{
  numero01: number,
  numero02: number,
  comQuem: lugar

}
