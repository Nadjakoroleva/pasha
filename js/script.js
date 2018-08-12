let x = 0;
let dx = 10;
let ob;
let mach;
let y = 110;
let dy = 7;
let score = 0;

function setup() {
  createCanvas(500, 500);
}

function preload() {
  // preload() runs once
  ob = loadImage("ob.jpg");
}

function draw() {
  ob.resize(500, 500);
  background(ob);
  fill("#939393");
  ellipse(x, y, 40, 40);
  rect(mouseX, height - 20, 120, 15);
  if (x > width) {
    dx = -dx;
  }

  if (x < 0) {
    dx = -dx;
  }

  if (y < 0) {
    dy = -dy;
  }

  if (x > mouseX && x < mouseX + 120) {
    if (y > height - 30 && y < height - 15) {
      dy = -dy;
      score = score + 1;
    }
  }
  textSize(50);
  text(score, 250, 100);
  if (y > height + 50) {
    dy = 0;
    dx = 0;
    x = 2000000;
    y = 50000000;
    background(ob);
    fill("#A53232");
    textSize(100);
    text(score, 240, 200);
    textSize(35);
    text("ПОТЕРЯН И НЕ НАЙДЕН", 55, 250);
  }

  x = x + dx;
  y = y + dy;
}
