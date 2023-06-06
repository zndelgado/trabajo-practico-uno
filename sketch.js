let angle = 0;

function setup() {
  createCanvas(512, 512);
  background(0);
  strokeWeight(2);
  noFill();
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  
  // líneas rotativas
  for (let i = 0; i < 10; i++) {
    let x = 100 * cos(angle * i);
    let y = 100 * sin(angle * i);
    
    stroke(255);
    line(0, 0, x, y);
  }
  
  // incrementar el ángulo para generar movimiento
  angle += 0.05;
}
