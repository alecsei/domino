enum lugar {
  Jogador01 = 0,
  Jogador02  = 1,
  Mesa = 2,
  Monte = 3
}

let pecas: peca[] = [];

IniciaPecas();
SorteiaPeca(lugar.Jogador01);
SorteiaPeca(lugar.Jogador02);

console.log(pecas.filter( pmonte => (pmonte.comQuem == lugar.Jogador01)));
function quemComeca(): lugar{
  
  let p1HasDupla: boolean = pecas.some(x => (x.isDupla == true && x.comQuem == lugar.Jogador01));
  let p2HasDupla: boolean = pecas.some(x => (x.isDupla == true && x.comQuem == lugar.Jogador02));
}
function IniciaPecas(): void {
  for (var x: number = 0; x <= 6; x++) {
    for (var y: number = 0; y <= 6; y++) {
      let isDupla: boolean = false;
      let maiorNumero: number = x;

      if (x == y) {
        isDupla = true;
        maiorNumero = x;
      } else {
        isDupla = false;
        if (x > y) { maiorNumero = x; } else { maiorNumero = y };

      };
      pecas.push({ numero01: x, numero02: y, comQuem: lugar.Monte, isDupla: isDupla, maiorNumero: maiorNumero });
    }
  }
}


function SorteiaPeca(paraQuem: lugar): void {

  for (var x: number = 0; x <= 6; x++) {
    let pecasNoMonte = pecas.filter(pmonte => (pmonte.comQuem != paraQuem));
    let randPeca: number = Math.trunc(Math.random() * pecasNoMonte.length - 1);
    pecas[randPeca].comQuem = paraQuem;
  }


}

interface peca{
  numero01: number,
  numero02: number,
  comQuem: lugar,
  isDupla: boolean,
  maiorNumero: number

}
