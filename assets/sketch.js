var newFont;
function preload() {
  newFont = loadFont("https://andersonlot.github.io/Tetris-Old-Style/assets/DS-DIGIB.TTF");
}
//var newFont=0; //loadFont("DS-DIGIB.TTF");
const colorback = [100, 110, 55];
var score = 0;
/*let matriz_temp2 = [
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
*/
let matriz_temp = [];
let matriz_fixa = [];
let matriz = [];
let teste = 0;

function setup() {
  canva=createCanvas(340, 420);
  canva.parent('canvas');
  campo = new grade();
  cont = 0;
  for (let i = 0; i < 40; i++) {
    matriz[i] = [];
    matriz_temp[i] = [];
    matriz_fixa[i] = [];
    for (let j = 0; j < 20; j++) {
      matriz[i][j] = false;
      matriz_temp[i][j] = false;
      matriz_fixa[i][j] = false;
      campo.spaces[cont] = new square(10 + j * 10, 10 + i * 10, false);
      cont++;
    }
  }
}

function draw() {
  
  teste++;
  background(colorback);
  campo.att();
  campo.display();
  textFont(newFont);
  textSize(25);
  text("tetris", 240, 30);
  textSize(20);
  text("score", 250, 60);
  text(score, 255, 80);
  if (teste > 4) {
    teste = 0;

    //rolar matriz temporaria

    for (let a = 39; a >= 0; a--) {
      for (let b = 0; b < 20; b++) {
        if (a <= 0) {
          matriz_temp[a][b] = false;
        } else {
          matriz_temp[a][b] = matriz_temp[a - 1][b];
        }
      }
    }
    matriz_temp[0][int(random(0, 20))] = true;
    matriz_temp[0][int(random(0, 20))] = true;
    matriz_temp[0][int(random(0, 20))] = true;
    matriz_temp[0][int(random(0, 20))] = true;

    //checar se chegou no fundo
    for (let i = 0; i < 20; i++) {
      matriz_fixa[39][i] = matriz[39][i] || matriz_fixa[39][i];
    }
    //checar se tem quadrado embaixo
    for (let i = 38; i >= 0; i--) {
      for (let j = 0; j < 20; j++) {
        if (matriz_fixa[i + 1][j] === true) {
          //console.log("deu");
          matriz_fixa[i][j] = matriz_fixa[i][j] || matriz_temp[i][j];
          matriz_temp[i][j] = false;
        }
      }
    }
  }

  //checar se deu linha cheia
  let linha_cheia = [];
  for (let i = 39; i >= 0; i--) {
    linha_cheia[i] = true;
    for (let j = 0; j < 20; j++) {
      linha_cheia[i] = linha_cheia[i] && matriz_fixa[i][j];
    }
    if (linha_cheia[i]) {
      score += 50;
      for (let j = 0; j < 20; j++) {
        matriz_fixa[i][j] = false;
        matriz[i][j] = false;
        for(let a=39;a>0;a--){
          for(let b=0;b<20;b++){
            matriz_temp[a][b]=matriz[a][b];
            matriz_fixa[a][b]=false;
          }
        }
      }
    }
  }
  matriz = ou(matriz_fixa, matriz_temp);
}

function ou(matriz_a, matriz_b) {
  let matriz_result = [];
  for (let i = 0; i < matriz_a.length; i++) {
    matriz_result[i] = [];
    for (let j = 0; j < matriz_a[0].length; j++) {
      matriz_result[i][j] = matriz_a[i][j] || matriz_b[i][j];
    }
  }
  return matriz_result;
}

class grade {
  constructor() {
    this.size = createVector(200, 400);
    this.pos = createVector(10, 10);
    this.spaces = [];
  }
  att() {
    if (this.spaces.length) {
      for (let a = 0; a < 20 * 40; a++) {
        this.spaces[a].apresenta = matriz[(a - (a % 20)) / 20][a % 20];
      }
    }
  }
  display() {
    push();
    fill(colorback);
    rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    stroke(0, 20);
    for (let linha = 10; linha < this.size.x; linha += 10) {
      line(
        this.pos.x + linha,
        this.pos.y,
        this.pos.x + linha,
        this.pos.y + this.size.y
      );
    }
    for (let linha = 10; linha < this.size.y; linha += 10) {
      line(
        this.pos.x,
        this.pos.y + linha,
        this.pos.x + this.size.x,
        this.pos.y + linha
      );
    }
    pop();

    if (this.spaces.length) {
      for (let a = 0; a < 20 * 40; a++) {
        this.spaces[a].display();
      }
    }
  }
}

function drawSquare(x, y, size) {
  push();
  noFill();
  stroke(0);
  rect(x, y, size);
  noStroke();
  fill(0);
  rect(x + 2, y + 2, size - 4);
  pop();
}

class square {
  constructor(x, y, mostra) {
    this.size = 10;
    this.pos = createVector(x, y);
    this.apresenta = mostra;
  }
  display() {
    if (this.apresenta) {
      drawSquare(this.pos.x, this.pos.y, this.size);
    }
  }
}